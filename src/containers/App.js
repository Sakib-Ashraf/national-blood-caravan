import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from '../components/Auth/protected.route';
import baseURL from '../components/Auth/baseURL';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './App.css';

import Topbar from '../components/Topbar/Topbar';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Home/Header/Header';
import SearchBox from '../components/Home/SearchBox/SearchBox';
import DonationProcess from '../components/Home/DonationProcess/DonationProcess';
import BGCard from '../components/Home/BGCard/BGCard';
import ReqBGInfo from '../components/Home/ReqBGInfo/ReqBGInfo';
import RecentDonors from '../components/Home/RecentDonors/RecentDonors';
import Motivation from '../components/Home/Motivation/Motivation';
import Volunteers from '../components/Home/Volunteers/Volunteers';
import Counter from '../components/Home/Counter/Counter';
import Testimonial from '../components/Home/Testimonial/Testimonial';
import CTA from '../components/Home/CTA/CTA';
import News from '../components/Home/News/News';
import Footer from '../components/Footer/Footer';
import FloatingWidget from '../components/FloatingWidget/FloatingWidget';

const Login = React.lazy(() => import('../components/Login/Login'));
const Register = React.lazy(() => import('../components/Register/Register'));
const About = React.lazy(() => import('../components/About/About'));
const Blog = React.lazy(() => import('../components/Blog/Blog'));
const Contact = React.lazy(() => import('../components/Contact/Contact'));
const Donors = React.lazy(() => import('../components/Donors/Donors'));
const JoinAsDonor = React.lazy(() =>
	import('../components/JoinAsDonor/JoinAsDonor')
);
const Profile = React.lazy(() => import('../components/Profile/Profile'));
const Recovery = React.lazy(() => import('../components/Recovery/Recovery'));
const Volunteer = React.lazy(() => import('../components/Volunteer/Volunteer'));
const ErrorPage = React.lazy(() => import('../components/ErrorPage/ErrorPage'));

const BloodGroup = React.lazy(() =>
	import('../components/Home/BGCard/BloodGroup/BloodGroup')
);
const UserDashboard = React.lazy(() =>
	import('../components/Dashboard/UserDashboard')
);
const DonorDashboard = React.lazy(() =>
	import('../components/Dashboard/DonorDashboard')
);
const EditProfile = React.lazy(() =>
	import('../components/EditProfile/EditProfile')
);
const ChangePassword = React.lazy(() =>
	import('../components/ChangePassword/ChangePassword')
);
const ReqForBlood = React.lazy(() =>
	import('../components/ReqForBlood/ReqForBlood')
);
const ReqForBloodDashboard = React.lazy(() =>
	import('../components/ReqForBlood/ReqForBloodDashboard')
);

const initState = {
	donors: {},
	donorProfile: {},
	loginProfile: {},
	ReqData: {},
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = initState;
	}

	componentDidMount() {
		baseURL
			.get(`/donors`)
			.then((donors) => {
				if (donors.data[0]) {
					this.setState({ donors: donors.data });
				}
			})
			.catch((err) => console.log(err));
	}

	loadDonorData = (donors) => {
		this.setState({ donors: donors });
	};

	loadAllDonor = (donors) => {
		this.setState({ AllDonors: donors });
	};

	loadReqData = (data) => {
		this.setState({ ReqData: data });
		console.log(this.state.ReqData);
	};
	loadDonorProfile = (donor) => {
		this.setState({ donorProfile: donor });
	};
	loadLoginProfile = (donor) => {
		this.setState({ loginProfile: donor });
	};

	dateConverter = (timestampData) => {
		const date = new Date(timestampData);
		const year = date.getFullYear();
		let month = date.getMonth() + 1;
		let dt = date.getDate();

		if (dt < 10) {
			dt = '0' + dt;
		}
		if (month < 10) {
			month = '0' + month;
		}

		const finalDate = dt + '-' + month + '-' + year;
		return finalDate;
	};

	render() {
		return (
			<Router>
				<Route
					render={(routerProps) => {
						return (
							<>
									<Topbar />
									<Navbar
										routerProps={routerProps}
										loginProfile={this.state.loginProfile}
									/>
							</>
						);
					}}
				/>

				<Switch>
					<Route exact path='/'>
							<Header />
							<SearchBox loadDonorData={this.loadDonorData} />
							<DonationProcess />
							<BGCard />
							<ReqBGInfo loadReqData={this.loadReqData} />
							<RecentDonors
								donors={this.state.donors}
								dateConverter={this.dateConverter}
							/>
							<Motivation />
							<Volunteers />
							<Counter />
							<Testimonial />
							<CTA />
							<News />
					</Route>
					<Route exact path='/about'>
						<Suspense fallback={<div>Loading...</div>}>
							<About />
						</Suspense>
					</Route>
					<Route exact path='/volunteer'>
						<Suspense fallback={<div>Loading...</div>}>
							<Volunteer />
						</Suspense>
					</Route>
					<Route
						exact
						path='/donors'
						render={() => {
							return (
								<Suspense fallback={<div>Loading...</div>}>
									<Donors
										loadDonorData={this.loadDonorData}
										dateConverter={this.dateConverter}
										loadDonorProfile={this.loadDonorProfile}
										donors={this.state.donors}
									/>
								</Suspense>
							);
						}}
					/>

					<Route exact path='/blog'><Suspense fallback={<div>Loading...</div>}><Blog/></Suspense></Route>
					<Route exact path='/contact'><Suspense fallback={<div>Loading...</div>}><Contact/></Suspense></Route>
					<Route
						exact
						path='/join-donor'
						render={(routerProps) => {
							return (
								<Suspense fallback={<div>Loading...</div>}>
									<JoinAsDonor routerProps={routerProps} />
								</Suspense>
							);
						}}
					/>

					<Route
						exact
						path='/donors/:bg'
						render={(routerProps) => {
							return (
								<Suspense fallback={<div>Loading...</div>}>
									<BloodGroup
										dateConverter={this.dateConverter}
										loadDonorProfile={this.loadDonorProfile}
										routerProps={routerProps}
									/>
								</Suspense>
							);
						}}
					/>
					<Route exact path='/recent-donors'>
						<Suspense fallback={<div>Loading...</div>}>
							<RecentDonors />
						</Suspense>
					</Route>
					<ProtectedRoute
						exact
						path='/donors/profile/:id/:name'
						component={(routerProps) => {
							return (
								<Suspense fallback={<div>Loading...</div>}>
									<Profile
										dateConverter={this.dateConverter}
										donorProfile={this.state.donorProfile}
										routerProps={routerProps}
									/>
								</Suspense>
							);
						}}
					/>
					<ProtectedRoute
						exact
						path='/blood-request'
						component={(routerProps) => {
							return (
								<Suspense fallback={<div>Loading...</div>}>
									<ReqForBlood routerProps={routerProps} />
								</Suspense>
							);
						}}
					/>
					<Route
						exact
						path='/login'
						render={(routerProps) => {
							return (
								<Suspense fallback={<div>Loading...</div>}>
									<Login
										loadLoginProfile={this.loadLoginProfile}
										loginProfile={this.state.loginProfile}
										routerProps={routerProps}
									/>
								</Suspense>
							);
						}}
					/>

					<Switch>
						<Route
							exact
							path='users/request/:id'
							render={() => {
								return (
									<Suspense fallback={<div>Loading...</div>}>
										<ReqForBloodDashboard
											dateConverter={this.dateConverter}
											ReqData={this.state.ReqData}
										/>
									</Suspense>
								);
							}}
						/>
						<Route
							exact
							path='/recovery'
							render={(routerProps) => {
								return (
									<Suspense fallback={<div>Loading...</div>}>
										<Recovery routerProps={routerProps} />
									</Suspense>
								);
							}}
						/>
						<Route
							exact
							path='/register'
							render={(routerProps) => {
								return (
									<Suspense fallback={<div>Loading...</div>}>
										<Register routerProps={routerProps} />
									</Suspense>
								);
							}}
						/>
						<ProtectedRoute
							exact
							path='/donor-dashboard/:id/:name'
							component={(routerProps) => {
								return (
									<Suspense fallback={<div>Loading...</div>}>
										<DonorDashboard
											dateConverter={this.dateConverter}
											loadLoginProfile={
												this.loadLoginProfile
											}
											loginProfile={
												this.state.loginProfile
											}
											routerProps={routerProps}
										/>
									</Suspense>
								);
							}}
						/>
						<ProtectedRoute
							exact
							path='/user-dashboard/:id/:name'
							component={() => {
								return (
									<Suspense fallback={<div>Loading...</div>}>
										<UserDashboard
											loginProfile={
												this.state.loginProfile
											}
										/>
									</Suspense>
								);
							}}
						/>
						<ProtectedRoute
							exact
							path='/user-edit-profile'
							component={() => {
								return (
									<Suspense fallback={<div>Loading...</div>}>
										<EditProfile
											loadLoginProfile={
												this.loadLoginProfile
											}
											loginProfile={
												this.state.loginProfile
											}
										/>
									</Suspense>
								);
							}}
						/>
						<ProtectedRoute
							exact
							path='/user-change-password'
							component={() => {
								return (
									<Suspense fallback={<div>Loading...</div>}>
										<ChangePassword
											loadLoginProfile={
												this.loadLoginProfile
											}
											loginProfile={
												this.state.loginProfile
											}
										/>
									</Suspense>
								);
							}}
						/>
					</Switch>
					<Route path='*'>
						<Suspense fallback={<div>Loading...</div>}>
							<ErrorPage />
						</Suspense>
					</Route>
				</Switch>
				<Suspense fallback={<div>Loading...</div>}>
					<Footer />
				</Suspense>
				<Suspense fallback={<div>Loading...</div>}>
					<FloatingWidget />
				</Suspense>
			</Router>
		);
	}
}

export default App;
