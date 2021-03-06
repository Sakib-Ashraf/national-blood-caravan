import React from 'react';
import { NavLink } from 'react-router-dom';
import './CTA.css';


const CTA = () => {
    return (
        <section className="call-to-action-area padding-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cta-inner">
                            <div className="left-content-area">
                                <h2 className="title">Donate Your Blood and Inspires other To Donate</h2>
                            </div>
                            <div className="right-content-area">
                                <div className="btn-wrapper">
                                    <NavLink to="/join-donor" className="boxed-btn">Join with us</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;