import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Topbar from '../components/Topbar/Topbar';
import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import About from '../components/About/About';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';
import Donors from '../components/Donors/Donors';
import JoinAsDonor from '../components/JoinAsDonor/JoinAsDonor';
import RecentDonors from '../components/Home/RecentDonors/RecentDonors';
import Profile from '../components/Profile/Profile';
import Recovery from '../components/Recovery/Recovery';
import Volunteer from '../components/Volunteer/Volunteer';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Footer from '../components/Footer/Footer';
import FloatingWidget from '../components/FloatingWidget/FloatingWidget';
import './App.css';

import Anegetive from '../components/Home/BGCard/A-/A-';
import Aposetive from '../components/Home/BGCard/A+/A+';
import ABnegetive from '../components/Home/BGCard/AB-/AB-';
import ABposetive from '../components/Home/BGCard/AB+/AB+';
import Bnegetive from '../components/Home/BGCard/B-/B-';
import Bposetive from '../components/Home/BGCard/B+/B+';
import Onegetive from '../components/Home/BGCard/O-/O-';
import Oposetive from '../components/Home/BGCard/O+/O+';



function App() {
	return (
		<Router>
			<Topbar />
			<Navbar />
			<Switch>
				<Route exact path='/'>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/bgcard/a-' component={Anegetive} />
						<Route exact path='/bgcard/a+' component={Aposetive} />
						<Route exact path='/bgcard/ab-' component={ABnegetive} />
						<Route exact path='/bgcard/ab+' component={ABposetive} />
						<Route exact path='/bgcard/b-' component={Bnegetive} />
						<Route exact path='/bgcard/b+' component={Bposetive} />
						<Route exact path='/bgcard/o-' component={Onegetive} />
						<Route exact path='/bgcard/o+' component={Oposetive} />
						<Route component={ErrorPage} />
						</Switch>
				</Route>
				<Route exact path='/about' component={About} />
				<Route exact path='/volunteer' component={Volunteer} />
				<Route exact path='/donors' component={Donors} />
				<Route exact path='/blog' component={Blog} />
				<Route exact path='/contact' component={Contact} />
				<Route exact path='/join-donor' component={JoinAsDonor} />
				<Route exact path='/recent-donors' component={RecentDonors} />
				<Route exact path='/recent-donors/donor-profile/:id/:name' component={Profile} />
				<Route exact path='/recovery' component={Recovery} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/register' component={Register} />
				<Route component={ErrorPage} />
			</Switch>
			<Footer />
			<FloatingWidget />
		</Router>
	);
}

export default App;
