import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Topbar from '../components/Topbar/Topbar';
import Navbar from '../components/Navbar/Navbar';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import About from '../components/About/About';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';
import Donors from '../components/Donors/Donors';
import JoinAsDonor from '../components/JoinAsDonor/JoinAsDonor';
import Profile from '../components/Profile/Profile';
import Recovery from '../components/Recovery/Recovery';
import Volunteer from '../components/Volunteer/Volunteer';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Footer from '../components/Footer/Footer';
import FloatingWidget from '../components/FloatingWidget/FloatingWidget';
import './App.css';

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

import Anegetive from '../components/Home/BGCard/A-/A-';
import Aposetive from '../components/Home/BGCard/A+/A+';
import ABnegetive from '../components/Home/BGCard/AB-/AB-';
import ABposetive from '../components/Home/BGCard/AB+/AB+';
import Bnegetive from '../components/Home/BGCard/B-/B-';
import Bposetive from '../components/Home/BGCard/B+/B+';
import Onegetive from '../components/Home/BGCard/O-/O-';
import Oposetive from '../components/Home/BGCard/O+/O+';
import DonorList from '../components/Donors/DonorList';



const initState = {
	input: '',
	imageUrl: '',
	box: {},
	route: 'signin',
	isSignedIn: false,
	donors: {},
	donorProfile: [],
	user: {
		id: '',
		name: '',
		email: '',
		entries: 0,
		joined: '',
	},
};


class App extends Component {
	constructor(props) {
		super(props);
		this.state = initState;
	}


	loadData = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    });
  }


	loadDonorData = (donors) => {
		this.setState({donors: donors});
	};

	loadAllDonor = (donors) => {
		this.setState({AllDonors: donors});
	};

	loadDonorProfile = (donorProfile) => {
		this.setState({donorProfile: donorProfile});
	};

	onRouteChange = (route) => {
		if (route === 'signout') {
			this.setState(initState);
		} else if (route === 'home') {
			this.setState({ isSignedIn: true });
		}
		this.setState({ route: route });
	};

	render() {
		const { isSignedIn, route} = this.state;
		return (
			<Router>
				<Topbar />
				<Navbar />
				<Switch>
					<Route exact path='/'>
						<Header />
						<SearchBox loadDonorData={this.loadDonorData} />
						<DonationProcess />
						<BGCard />
						<Switch>
							<Route
								exact
								path='/bgcard/:bg-group'
								component={Anegetive}
							/>
							<Route
								exact
								path='/bgcard/:bg-group'
								component={Aposetive}
							/>
							<Route
								exact
								path='/bgcard/:bg-group'
								component={ABnegetive}
							/>
							<Route
								exact
								path='/bgcard/:bg-group'
								component={ABposetive}
							/>
							<Route
								exact
								path='/bgcard/:bg-group'
								component={Bnegetive}
							/>
							<Route
								exact
								path='/bgcard/:bg-group'
								component={Bposetive}
							/>
							<Route
								exact
								path='/bgcard/:bg-group'
								component={Onegetive}
							/>
							<Route
								exact
								path='/bgcard/:bg-group'
								component={Oposetive}
							/>
						</Switch>
						<ReqBGInfo />
						<RecentDonors />
						<Motivation />
						<Volunteers />
						<Counter />
						<Testimonial />
						<CTA />
						<News />
					</Route>
					<Route exact path='/about' component={About} />
					<Route exact path='/volunteer' component={Volunteer} />
					<Route exact path='/donors'>
						<Donors
							loadDonorData={this.loadDonorData}
							loadDonorProfile={this.loadDonorProfile}
							donors={this.state.donors}
						/>
						<Route exact path='/donors/donor-profile/:id/:name'>
							<Profile donorProfile={this.state.donorProfile} />
						</Route>
					</Route>
					<Route exact path='/blog' component={Blog} />
					<Route exact path='/contact' component={Contact} />
					<Route exact path='/join-donor'>
						<JoinAsDonor
							loadData={this.loadData}
							onRouteChange={this.onRouteChange}
						/>
					</Route>
					<Route
						exact
						path='/recent-donors'
						component={RecentDonors}
					/>
					<Route
						exact
						path='/recent-donors/donor-profile/:id/:name'
						>
							<Profile/>
						</Route>
					<Route exact path='/login'>
						<Login
							loadData={this.loadData}
							onRouteChange={this.onRouteChange}
						/>
					</Route>
					<Switch>
						<Route exact path='/recovery' component={Recovery} />
						<Route exact path='/register'>
							<Register
								loadData={this.loadData}
								onRouteChange={this.onRouteChange}
							/>
						</Route>
					</Switch>
					<Route path='*' component={ErrorPage} />
				</Switch>
				<Footer />
				<FloatingWidget />
			</Router>
		);
	}
}

export default App;