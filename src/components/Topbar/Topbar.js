import React from "react";
import './Topbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";


const Topbar = () => {
  return (
		<div className='topbar-area'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-12'>
						<div className='topbar-inner'>
							<div className='left-content-area'>
								<ul className='info-items'>
									<li>
										<FontAwesomeIcon icon={faEnvelope} />{' '}
										support@nationalbloodcaravan.com
									</li>
									<li>
										<FontAwesomeIcon icon={faPhone} /> + 880
										123 456 7890
									</li>
								</ul>
							</div>
							<div className='right-content-area'>
								<div className='right-inner'>
									<ul className='social-icons'>
										<li>
											<a
												rel='noreferrer'
												target='_blank'
												href='https://www.facebook.com'
											>
												<FontAwesomeIcon
													icon={faFacebook}
												/>
											</a>
										</li>
										<li>
											<a
												rel='noreferrer'
												target='_blank'
												href='https://www.twitter.com'
											>
												<FontAwesomeIcon
													icon={faTwitter}
												/>
											</a>
										</li>
										<li>
											<a
												rel='noreferrer'
												target='_blank'
												href='https://www.instagram.com'
											>
												<FontAwesomeIcon
													icon={faInstagram}
												/>
											</a>
										</li>
										<li>
											<a
												rel='noreferrer'
												target='_blank'
												href='https://www.linkedin.com'
											>
												<FontAwesomeIcon
													icon={faLinkedin}
												/>
											</a>
										</li>
									</ul>
									<div className='btn-wrapper'>
										<NavLink
											to='/login'
											className='boxed-btn'
										>
											Login
										</NavLink>
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

export default Topbar;
