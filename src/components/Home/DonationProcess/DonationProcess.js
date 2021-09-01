import React from 'react';
import './DonationProcess.css';

const DonationProcess = () => {
    return (
        <section className="blood-donation-process-area padding-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title margin-bottom-60">
                            <h2 className="title">Blood Donation Process</h2>
                            <span className="separator"></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="blood-donation-process">
                            <ul className="donation-process-list">
                                <li className="single-donation-process">
                                    <span className="number">01</span>
                                    <h4 className="title">Registration</h4>
                                </li>
                                <li className="single-donation-process">
                                    <span className="number">02</span>
                                    <h4 className="title">Screening</h4>
                                </li>
                                <li className="single-donation-process">
                                    <span className="number">03</span>
                                    <h4 className="title">Donation</h4>
                                </li>
                                <li className="single-donation-process">
                                    <span className="number">04</span>
                                    <h4 className="title">Rest &amp; Refresh</h4>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    );
};

export default DonationProcess;