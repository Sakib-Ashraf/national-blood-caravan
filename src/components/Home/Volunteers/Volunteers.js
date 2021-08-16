import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OwlCarousel from 'react-owl-carousel';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import VP from './volunteer.png';
import {options} from '../../../containers/OwlCarouselOptions';

const Volunteers = () => {
    return (
		<section className='dedicated-team-area padding-120'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-lg-8'>
						<div className='section-title margin-bottom-60'>
							<h2 className='title'>Our Volunteer Members</h2>
							<span className='separator'></span>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-12'>
						<OwlCarousel className='our-dedicated-team-carousel owl-carousel' {...options}>
							<div className='single-team-member'>
								<div className='thumb'>
									<span className='blood-group'>o+</span>
									<img
										src={VP}
										alt='Jorge Amos'
									/>
								</div>
								<div className='content'>
									<h4 className='title'>Jorge Amos</h4>
									<span className='designation'>
										General Member
									</span>
									<ul className='social-icon'>
										<li>
											<a href='www.facebook.com'>
												<FontAwesomeIcon icon={faFacebook} />
											</a>
										</li>
										<li>
											<a href='www.twitter.com'>
												<FontAwesomeIcon
													icon={faTwitter}
												/>
											</a>
										</li>
										<li>
											<a href='www.instagram.com'>
												<FontAwesomeIcon
													icon={faInstagram}
												/>
											</a>
										</li>
										<li>
											<a href='www.linkedin.com'>
												<FontAwesomeIcon
													icon={faLinkedin}
												/>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className='single-team-member'>
								<div className='thumb'>
									<span className='blood-group'>o+</span>
									<img
										src={VP}
										alt='Earl Cho'
									/>
								</div>
								<div className='content'>
									<h4 className='title'>Earl Cho</h4>
									<span className='designation'>Founder</span>
									<ul className='social-icon'>
										<li>
											<a href='www.facebook.com'>
												<FontAwesomeIcon
													icon={faFacebook}
												/>
											</a>
										</li>
										<li>
											<a href='www.twitter.com'>
												<FontAwesomeIcon
													icon={faTwitter}
												/>
											</a>
										</li>
										<li>
											<a href='www.instagram.com'>
												<FontAwesomeIcon
													icon={faInstagram}
												/>
											</a>
										</li>
										<li>
											<a href='www.linkedin.com'>
												<FontAwesomeIcon
													icon={faLinkedin}
												/>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className='single-team-member'>
								<div className='thumb'>
									<span className='blood-group'>b+</span>
									<img
										src={VP}
										alt='Roberto McDermott'
									/>
								</div>
								<div className='content'>
									<h4 className='title'>Roberto McDermott</h4>
									<span className='designation'>Founder</span>
									<ul className='social-icon'>
										<li>
											<a href='www.facebook.com'>
												<FontAwesomeIcon icon={faFacebook} />
											</a>
										</li>
										<li>
											<a href='www.twitter.com'>
												<FontAwesomeIcon
													icon={faTwitter}
												/>
											</a>
										</li>
										<li>
											<a href='www.instagram.com'>
												<FontAwesomeIcon
													icon={faInstagram}
												/>
											</a>
										</li>
										<li>
											<a href='www.linkedin.com'>
												<FontAwesomeIcon
													icon={faLinkedin}
												/>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className='single-team-member'>
								<div className='thumb'>
									<span className='blood-group'>a+</span>
									<img
										src={VP}
										alt='Michael Hughes'
									/>
								</div>
								<div className='content'>
									<h4 className='title'>Michael Hughes</h4>
									<span className='designation'>
										General Member
									</span>
									<ul className='social-icon'>
										<li>
											<a href='www.facebook.com'>
												<FontAwesomeIcon icon={faFacebook} />
											</a>
										</li>
										<li>
											<a href='www.twitter.com'>
												<FontAwesomeIcon
													icon={faTwitter}
												/>
											</a>
										</li>
										<li>
											<a href='www.instagram.com'>
												<FontAwesomeIcon
													icon={faInstagram}
												/>
											</a>
										</li>
										<li>
											<a href='www.linkedin.com'>
												<FontAwesomeIcon
													icon={faLinkedin}
												/>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className='single-team-member'>
								<div className='thumb'>
									<span className='blood-group'>a-</span>
									<img
										src={VP}
										alt='Charlie Buckner'
									/>
								</div>
								<div className='content'>
									<h4 className='title'>Charlie Buckner</h4>
									<span className='designation'>Founder</span>
									<ul className='social-icon'>
										<li>
											<a href='www.facebook.com'>
												<FontAwesomeIcon icon={faFacebook} />
											</a>
										</li>
										<li>
											<a href='www.twitter.com'>
												<FontAwesomeIcon
													icon={faTwitter}
												/>
											</a>
										</li>
										<li>
											<a href='www.instagram.com'>
												<FontAwesomeIcon
													icon={faInstagram}
												/>
											</a>
										</li>
										<li>
											<a href='www.linkedin.com'>
												<FontAwesomeIcon
													icon={faLinkedin}
												/>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className='single-team-member'>
								<div className='thumb'>
									<span className='blood-group'>b+</span>
									<img
										src={VP}
										alt='Gary  Ladner'
									/>
								</div>
								<div className='content'>
									<h4 className='title'>Gary Ladner</h4>
									<span className='designation'>
										General Member
									</span>
									<ul className='social-icon'>
										<li>
											<a href='www.facebook.com'>
												<FontAwesomeIcon icon={faFacebook} />
											</a>
										</li>
										<li>
											<a href='www.twitter.com'>
												<FontAwesomeIcon
													icon={faTwitter}
												/>
											</a>
										</li>
										<li>
											<a href='www.instagram.com'>
												<FontAwesomeIcon
													icon={faInstagram}
												/>
											</a>
										</li>
										<li>
											<a href='www.linkedin.com'>
												<FontAwesomeIcon
													icon={faLinkedin}
												/>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className='single-team-member'>
								<div className='thumb'>
									<span className='blood-group'>a+</span>
									<img
										src={VP}
										alt='Larry Ford'
									/>
								</div>
								<div className='content'>
									<h4 className='title'>Larry Ford</h4>
									<span className='designation'>
										General Member
									</span>
									<ul className='social-icon'>
										<li>
											<a href='www.facebook.com'>
												<FontAwesomeIcon icon={faFacebook} />
											</a>
										</li>
										<li>
											<a href='www.twitter.com'>
												<FontAwesomeIcon
													icon={faTwitter}
												/>
											</a>
										</li>
										<li>
											<a href='www.instagram.com'>
												<FontAwesomeIcon
													icon={faInstagram}
												/>
											</a>
										</li>
										<li>
											<a href='www.linkedin.com'>
												<FontAwesomeIcon
													icon={faLinkedin}
												/>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className='single-team-member'>
								<div className='thumb'>
									<span className='blood-group'>a+</span>
									<img
										src={VP}
										alt='Myron Merritt'
									/>
								</div>
								<div className='content'>
									<h4 className='title'>Myron Merritt</h4>
									<span className='designation'>Founder</span>
									<ul className='social-icon'>
										<li>
											<a href='www.facebook.com'>
												<FontAwesomeIcon icon={faFacebook} />
											</a>
										</li>
										<li>
											<a href='www.twitter.com'>
												<FontAwesomeIcon
													icon={faTwitter}
												/>
											</a>
										</li>
										<li>
											<a href='www.instagram.com'>
												<FontAwesomeIcon
													icon={faInstagram}
												/>
											</a>
										</li>
										<li>
											<a href='www.linkedin.com'>
												<FontAwesomeIcon
													icon={faLinkedin}
												/>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</OwlCarousel>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Volunteers;