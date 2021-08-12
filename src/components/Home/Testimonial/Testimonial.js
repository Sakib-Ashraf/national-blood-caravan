import React from 'react';
import TP1 from './testimonial-pic-1.jpg';
import TP2 from './testimonial-pic-2.jpg';
import TP3 from './testimonial-pic-3.jpg';

const Testimonial = () => {
    return (
<div className="testimonial-area padding-120">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="section-title margin-bottom-60">
                    <h2 className="title">What People Say&#039;s</h2>
                    <span className="separator"></span>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <div className="testimonial-carousel owl-carousel">
                    <div className="single-testimonial-item">
                        <div className="thumb">
                            <img src={TP1} alt="Javier Jeffery"/>

                        </div>
                        <div className="content">
                            <p>So we me unknown as improve hastily sitting forming. Especially favourable compliment but thoroughly unreserved saw she themselves.</p>
                            <div className="author-meta">
                                <div className="ratings">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4 className="title">Javier Jeffery</h4>
                                <span className="designation">Founder</span>
                            </div>
                        </div>
                    </div>
                    <div className="single-testimonial-item">
                        <div className="thumb">
                            <img src={TP2} alt="David Barnes"/>

                        </div>
                        <div className="content">
                            <p>So we me unknown as improve hastily sitting forming. Especially favourable compliment but thoroughly unreserved saw she themselves.</p>
                            <div className="author-meta">
                                <div className="ratings">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4 className="title">David Barnes</h4>
                                <span className="designation">CEO</span>
                            </div>
                        </div>
                    </div>
                    <div className="single-testimonial-item">
                        <div className="thumb">
                            <img src={TP3} alt="Victor Ryan"/>

                        </div>
                        <div className="content">
                            <p>So we me unknown as improve hastily sitting forming. Especially favourable compliment but thoroughly unreserved saw she themselves.</p>
                            <div className="author-meta">
                                <div className="ratings">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4 className="title">Victor Ryan</h4>
                                <span className="designation">Founder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
};

export default Testimonial;