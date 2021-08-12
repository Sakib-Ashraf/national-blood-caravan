import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import SearchBox from './SearchBox/SearchBox';
import DonationProcess from './DonationProcess/DonationProcess';
import BGCard from './BGCard/BGCard';
import ReqBGInfo from './ReqBGInfo/ReqBGInfo';
import RecentDonors from './RecentDonors/RecentDonors';
import Motivation from './Motivation/Motivation';
import Volunteers from './Volunteers/Volunteers';
import Counter from './Counter/Counter';
import Testimonial from './Testimonial/Testimonial';
import CTA from './CTA/CTA';
import News from './News/News';

// import JoinAsDonor from '../../components/JoinAsDonor/JoinAsDonor';
// import Contact from '../../components/Contact/Contact';

// import Anegetive from './BGCard/A-/A-';
// import Aposetive from './BGCard/A+/A+';
// import ABnegetive from './BGCard/AB-/AB-';
// import ABposetive from './BGCard/AB+/AB+';
// import Bnegetive from './BGCard/B-/B-';
// import Bposetive from './BGCard/B+/B+';
// import Onegetive from './BGCard/O-/O-';
// import Oposetive from './BGCard/O+/O+';
import ErrorPage from '../../components/ErrorPage/ErrorPage';

const Home = () => {
    return (
		<Router>
			<Header />
			{/* <Switch>
				<Route exact path='/contact' component={Contact} />
				<Route exact path='/join-donor' component={JoinAsDonor} />
			</Switch> */}
			<SearchBox />
			<DonationProcess />
			<BGCard />
			{/* <Switch>
				<Route exact path='/a-' component={Anegetive} />
				<Route exact path='/a+' component={Aposetive} />
				<Route exact path='/ab-' component={ABnegetive} />
				<Route exact path='/ab+' component={ABposetive} />
				<Route exact path='/b-' component={Bnegetive} />
				<Route exact path='/b+' component={Bposetive} />
				<Route exact path='/o-' component={Onegetive} />
				<Route exact path='/o+' component={Oposetive} />
				<Route component={ErrorPage} />
			</Switch> */}
			<ReqBGInfo />
			<RecentDonors />
			<Motivation />
			<Volunteers />
			<Counter />
			<Testimonial />
			<CTA />
			<News />
		</Router>
	);
};

export default Home;