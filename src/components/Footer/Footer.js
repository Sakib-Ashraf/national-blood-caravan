import React from 'react';
import { NavLink } from 'react-router-dom';
import aboutLogo from './logo3.png';
import bGrid3 from './blog-grid-3.jpg';
import bGrid4 from './blog-grid-4.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faInstagram,
	faLinkedin,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
		<div>
			<footer className='footer-area'>
				<div className='footer-top-area padding-top-100 padding-bottom-60'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='footer-top-area-inner'>
									<div className='left-content-area'>
										<ul className='contact-info'>
											<li>
												<div className='single-contact-info'>
													<div className='icon'>
														<FontAwesomeIcon
															icon={faEnvelope}
														/>
													</div>
													<div className='content'>
														<h4 className='title'>
															Email Address
														</h4>
														<span className='detials'>
															support@nationalbloodcaravan.com
														</span>
													</div>
												</div>
											</li>
											<li>
												<div className='single-contact-info'>
													<div className='icon'>
														<FontAwesomeIcon
															icon={faPhone}
														/>
													</div>
													<div className='content'>
														<h4 className='title'>
															Emergency Calling
														</h4>
														<span className='detials'>
															+ 000 11 22 33
														</span>
													</div>
												</div>
											</li>
										</ul>
									</div>
									<div className='right-content-area'>
										<div className='share-widget'>
											<h4 className='title'>
												Let's Connect
											</h4>
											<ul className='social-share'>
												<li>
													<a href='https://www.facebook.com'>
														<FontAwesomeIcon
															icon={faFacebook}
														/>
													</a>
												</li>
												<li>
													<a href='https://www.twitter.com'>
														<FontAwesomeIcon
															icon={faTwitter}
														/>
													</a>
												</li>
												<li>
													<a href='https://www.instagram.com'>
														<FontAwesomeIcon
															icon={faInstagram}
														/>
													</a>
												</li>
												<li>
													<a href='https://www.linkedin.com'>
														<FontAwesomeIcon
															icon={faLinkedin}
														/>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='row'>
							<div className='col-lg-4 col-md-6'>
								<div className='widget footer-widget about_widget'>
									<div className='footer-logo'>
										<NavLink to='/'>
											<img
												src={aboutLogo}
												alt=' Footer Logo'
											/>
										</NavLink>
									</div>
									<p>
										Rem reiciendis odio minus eius
										doloremque est dolor libero placeat
										velit dolores incidunt, sequi at, totam
										in! Amet animi vel eos nihil! Vel dicta
										itaque veniam non praesentium facilis,
										eaque quia beatae.
									</p>
								</div>
							</div>
							<div className='col-lg-2 col-md-6'>
								<div className='widget footer-widget'>
									<h2 className='widget-title'>
										Useful Links
									</h2>
									<ul className='pages-list'>
										<li>
											<a href='mailto:nationalbloodcaravan@gmail.com'>
												Email Address
											</a>
										</li>
										<li>
											<NavLink to='/bgcard' exact>
												Blood Group
											</NavLink>
										</li>
										<li>
											<NavLink to='/contact'>
												Phone number
											</NavLink>
										</li>
									</ul>
								</div>
							</div>
							<div className='col-lg-4 col-md-6'>
								<div className='widget footer-widget'>
									<h2 className='widget-title'>
										Recent Posts
									</h2>
									<ul className='recent_post_item'>
										<li className='single-recent-post-item'>
											<div className='thumb'>
												<img
													src={bGrid4}
													alt='Subjects to ecstatic children  up as built match gravida'
												/>
											</div>
											<div className='content'>
												<h4 className='title'>
													<NavLink to='/blog/4/subjects-to-ecstatic-children-up-as-built-match-gravida'>
														Subjects to ecstatic
														children up as built
														match gravida
													</NavLink>
												</h4>
												<span className='times'>
													1 year ago
												</span>
											</div>
										</li>
										<li className='single-recent-post-item'>
											<div className='thumb'>
												<img
													src={bGrid3}
													alt='Nam nec tellus sed odio sit amet nibh vulputate cursus'
												/>
											</div>
											<div className='content'>
												<h4 className='title'>
													<NavLink to='/blog/3/nam-nec-tellus-sed-odio-sit-amet-nibh-vulputate-cursus'>
														Nam nec tellus sed odio
														sit amet nibh vulputate
														cursus
													</NavLink>
												</h4>
												<span className='times'>
													1 year ago
												</span>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div className='col-lg-2 col-md-6'>
								<div className=' widget footer-widget'>
									<h2 className='widget-title'>
										Important Links
									</h2>
									<ul className='pages-list'>
										<li>
											<NavLink to='/'>
												Terms & Conditions
											</NavLink>
										</li>
										<li>
											<NavLink to='/'>
												Privacy Policy
											</NavLink>
										</li>
										<li>
											<NavLink to='/'>
												Author
											</NavLink>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='copyright-area'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								&copy; Copyright 2021 . All Right Reserved
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;