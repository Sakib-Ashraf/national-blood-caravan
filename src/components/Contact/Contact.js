import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../containers/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
	return (
		<div>
			<div className='breadcrumb-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='breadcrumb-inner'>
								<h2 className='page-title'>Cotnact</h2>
								<ul className='page-list'>
									<li>
										<NavLink to='/'>
											Home
										</NavLink>
									</li>
									<li>
										<NavLink to='/contact'>
											Contact
										</NavLink>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='page-content contact-page-content-area padding-120'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-6'>
							<div className='left-content-area'>
								<div className='inner-title margin-bottom-55'>
									<h3 className='title'>Get In Touch</h3>
									<p>
										Instantly cordially far intention
										recommend estimable yet her his.
										Stimulated discretion impossible
										admiration in particular conviction up.
									</p>
								</div>
								<ul className='contact-info-list'>
									<li className='single-info-item'>
										<div className='icon'>
											<FontAwesomeIcon icon={faHome} />
										</div>
										<div className='content'>
											<span className='details'>
												143 castle road 517
											</span>
											<span className='details'>
												district, kiyev port south
												Canada
											</span>
										</div>
									</li>
									<li className='single-info-item'>
										<div className='icon'>
											<FontAwesomeIcon icon={faPhone} />
										</div>
										<div className='content'>
											<span className='details'>
												+3 123 456 789{' '}
											</span>
											<span className='details'>
												+1 222 345 342
											</span>
										</div>
									</li>
									<li className='single-info-item'>
										<div className='icon'>
											<FontAwesomeIcon
												icon={faEnvelope}
											/>
										</div>
										<div className='content'>
											<span className='details'>
												info@yourmail.com{' '}
											</span>
											<span className='details'>
												Info@yourmail2.com
											</span>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className='col-lg-6'>
							<div className='righti-content-area'>
								<div className='contact-page-form-wrap'>
									<form
										action='https://nationalbloodcaravan.com/contact'
										id='contact_page_form'
										method='post'
										className='contact-page-form'
										noValidate
									>
										<div>
											<input
												type='hidden'
												name='_token'
												value='OfPwLz0MpdRTmNY9ieQpPREP1CnEC1xHvU2a0HMH'
											/>
											<div className='row'>
												<div className='col-lg-6'>
													<div className='form-group'>
														<input
															type='text'
															name='name'
															placeholder='Your Name'
															className='form-control'
															required
															aria-required='true'
														/>
													</div>
												</div>
												<div className='col-lg-6'>
													<div className='form-group'>
														<input
															type='email'
															name='email'
															placeholder='Your Email'
															className='form-control'
															required
															aria-required='true'
														/>
													</div>
												</div>
												<div className='col-lg-12'>
													<div className='form-group'>
														<input
															type='text'
															name='subject'
															placeholder='Your Subject'
															className='form-control'
															required
															aria-required='true'
														/>
													</div>
													<div className='form-group'>
														<textarea
															className='form-control'
															name='message'
															cols='30'
															rows='10'
															required
															placeholder='Message'
														></textarea>
													</div>
													<div className='form-group'>
														<input
															type='submit'
															value='Submit Message'
															className='submit-btn'
														/>
													</div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className='contact-map'>
				<div
					id='map'
					data-latitude='23.7797664'
					data-longitude='90.4234868'
				></div>
			</div> */}
		</div>
	);
};

export default Contact;
