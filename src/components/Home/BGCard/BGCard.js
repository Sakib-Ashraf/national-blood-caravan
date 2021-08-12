import React from 'react';
import { NavLink } from 'react-router-dom';

const BGCard = () => {
    return (
        <section className="our-valuable-donor-area padding-bottom-90">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title margin-bottom-60">
                            <h2 className="title">Our Available Donors</h2>
                            <span className="separator"></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="single-donor-group-item">
                            <div className="icon">
                                <span className="blood-group">A+</span>
                            </div>
                            <div className="btn-wrapper">
                                <NavLink to="/bgcard/a+" className="boxed-btn">View All</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-donor-group-item">
                            <div className="icon">
                                <span className="blood-group">A-</span>
                            </div>
                            <div className="btn-wrapper">
                                <NavLink to="/bgcard/a-" className="boxed-btn">View All</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-donor-group-item">
                            <div className="icon">
                                <span className="blood-group">O+</span>
                            </div>
                            <div className="btn-wrapper">
                                <NavLink to="/bgcard/o+" className="boxed-btn">View All</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-donor-group-item">
                            <div className="icon">
                                <span className="blood-group">O-</span>
                            </div>
                            <div className="btn-wrapper">
                                <NavLink to="/bgcard/o-" className="boxed-btn">View All</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-donor-group-item">
                            <div className="icon">
                                <span className="blood-group">B+</span>
                            </div>
                            <div className="btn-wrapper">
                                <NavLink to="/bgcard/b+" className="boxed-btn">View All</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-donor-group-item">
                            <div className="icon">
                                <span className="blood-group">B-</span>
                            </div>
                            <div className="btn-wrapper">
                                <NavLink to="/bgcard/b-" className="boxed-btn">View All</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-donor-group-item">
                            <div className="icon">
                                <span className="blood-group">AB+</span>
                            </div>
                            <div className="btn-wrapper">
                                <NavLink to="/bgcard/ab+" className="boxed-btn">View All</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-donor-group-item">
                            <div className="icon">
                                <span className="blood-group">AB-</span>
                            </div>
                            <div className="btn-wrapper">
                                <NavLink to="/bgcard/ab-" className="boxed-btn">View All</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BGCard;