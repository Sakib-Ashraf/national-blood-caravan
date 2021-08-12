import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import DP7 from './donor-pic-7.jpg';
import DP11 from './donor-pic-11.jpg';
import DP10 from './donor-pic-10.jpg';
import DP9 from './donor-pic-9.jpg';
import DP5 from './donor-pic-5.jpg';
import DP15 from './donor-pic-15.jpg';
import options from '../../../containers/OwlCarouselOptions';

const RecentDonors = (props) => {
    
    console.log(props);


    return (
        <div className="recently-donated-donors padding-bottom-120">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="section-title margin-bottom-60">
                        <h2 className="title">
                            <NavLink to="/recent-donors">Recent Donors</NavLink>
                            </h2>
                        <span className="separator"></span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <OwlCarousel className="recently-donated-donors-carousel owl-carousel" {...options}>
                        <div className="single-donors-item">
                            <div className="thumb">
                                <img style={{maxWidth: '300px'}} src={DP15} alt="dp15"/>
                            </div>
                            <div className="content">
                                <NavLink to="/recent-donors/donor-profile/15/john-schroyer">
                                    <h4 className="title">John Schroyer</h4>
                                </NavLink>
                                <span className="blood-group">Blood Group: <strong>B+</strong></span>
                                <span className="total-donate">Total Donate: <strong>1</strong> Times</span>
                            </div>
                        </div>
                        <div className="single-donors-item">
                            <div className="thumb">
                                <img style={{maxWidth: '300px'}} src={DP7} alt="dp7"/>
                            </div>
                            <div className="content">
                                <NavLink to="/recent-donors/donor-profile/7/susan-shaw">
                                    <h4 className="title">Susan Shaw</h4>
                                </NavLink>
                                <span className="blood-group">Blood Group: <strong>A+</strong></span>
                                <span className="total-donate">Total Donate: <strong>1</strong> Times</span>
                            </div>
                        </div>
                        <div className="single-donors-item">
                            <div className="thumb">
                                <img style={{maxWidth: '300px'}} src={DP10} alt="dp10"/>
                            </div>
                            <div className="content">
                                <NavLink to="/recent-donors/donor-profile/10/ardelia-rice">
                                    <h4 className="title">Ardelia Rice</h4>
                                </NavLink>
                                <span className="blood-group">Blood Group: <strong>B+</strong></span>
                                <span className="total-donate">Total Donate: <strong>1</strong> Times</span>
                            </div>
                        </div>
                        <div className="single-donors-item">
                            <div className="thumb">
                                <img style={{maxWidth: '300px'}} src={DP9} alt="dp9"/>
                            </div>
                            <div className="content">
                                <NavLink to="/recent-donors/donor-profile/9/charles-beckham">
                                    <h4 className="title">Charles Beckham</h4>
                                </NavLink>
                                <span className="blood-group">Blood Group: <strong>A+</strong></span>
                                <span className="total-donate">Total Donate: <strong>1</strong> Times</span>
                            </div>
                        </div>
                        <div className="single-donors-item">
                            <div className="thumb">
                                <img style={{maxWidth: '300px'}} src={DP5} alt="dp5"/>
                            </div>
                            <div className="content">
                                <NavLink to="/recent-donors/donor-profile/5/james-long">
                                    <h4 className="title">James Long</h4>
                                </NavLink>
                                <span className="blood-group">Blood Group: <strong>O+</strong></span>
                                <span className="total-donate">Total Donate: <strong>1</strong> Times</span>
                            </div>
                        </div>
                        <div className="single-donors-item">
                            <div className="thumb">
                                <img style={{maxWidth: '300px'}} src={DP11} alt="dp11"/>
                            </div>
                            <div className="content">
                                <NavLink to="/recent-donors/donor-profile/11/richard-donahue">
                                    <h4 className="title">Richard Donahue</h4>
                                </NavLink>
                                <span className="blood-group">Blood Group: <strong>AB+</strong></span>
                                <span className="total-donate">Total Donate: <strong>1</strong> Times</span>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
    </div>
    );
};

export default RecentDonors;