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
import Profile from '../Profile/Profile';

import JoinAsDonor from '../../components/JoinAsDonor/JoinAsDonor';
import Contact from '../../components/Contact/Contact';

import Anegetive from './BGCard/A-/A-';
import Aposetive from './BGCard/A+/A+';
import ABnegetive from './BGCard/AB-/AB-';
import ABposetive from './BGCard/AB+/AB+';
import Bnegetive from './BGCard/B-/B-';
import Bposetive from './BGCard/B+/B+';
import Onegetive from './BGCard/O-/O-';
import Oposetive from './BGCard/O+/O+';
import ErrorPage from '../../components/ErrorPage/ErrorPage';

const Home = () => {
    return (
		<Router>
			<Header />
			<SearchBox />
			<DonationProcess />
			<BGCard />
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