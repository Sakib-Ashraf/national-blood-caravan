import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../containers/App.css';

const ReqForBlood = () => {
	return (
		<div>
			<div className='breadcrumb-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='breadcrumb-inner'>
								<h2 className='page-title'>
									{' '}
									Request For Blood
								</h2>
								<ul className='page-list'>
									<li>
										<NavLink to='/'>Home</NavLink>
									</li>
									<li>
										<NavLink to='/blood-request'>
											{' '}
											Request For Blood
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
						<div className='col-lg-12'>
							<div className='right-content-area'>
								<div className='contact-page-form-wrap'>
									<div className='alert alert-danger'>
										<ul>
											<li>Every field is required.</li>
										</ul>
									</div>
									<form
										action='/blood-request'
										method='post'
										className='contact-page-form'
										noValidate
										encType='multipart/form-data'
									>
										<input
											type='hidden'
											name='_token'
											value='3o2OuZCv3XmmG0AS5xs8zQCnskKZisrxlgtp9qfb'
										/>{' '}
										<div className='row justify-content-center'>
											<div className='col-lg-8'>
												<div className='form-group'>
													<input
														type='text'
														name='name'
														placeholder='Your Name'
														value=''
														className='form-control'
														required
														aria-required='true'
													/>
												</div>
												<div className='form-group'>
													<input
														type='email'
														name='email'
														placeholder='Your Email'
														value=''
														className='form-control'
														required
														aria-required='true'
													/>
												</div>
												<div className='form-group'>
													<input
														type='text'
														className='form-control'
														id='mobile'
														value=''
														name='mobile'
														placeholder='Mobile'
													/>
												</div>
												<div className='form-group'>
													<select
														name='blood_group'
														id='blood_group'
														className='form-control nice-select wide'
														style={{
															display: 'none',
														}}
													>
														<option value=''>
															Blood Group
														</option>
														<option value='o+'>
															O+
														</option>
														<option value='o-'>
															O-
														</option>
														<option value='b+'>
															B+
														</option>
														<option value='b-'>
															B-
														</option>
														<option value='a+'>
															A+
														</option>
														<option value='a-'>
															A-
														</option>
														<option value='ab+'>
															AB+
														</option>
														<option value='ab-'>
															AB-
														</option>
													</select>
													<div
														className='nice-select form-control wide'
														tabIndex='0'
													>
														<span className='current'>
															Blood Group
														</span>
														<div className='nice-select-search-box'>
															<input
																type='text'
																className='nice-select-search'
																placeholder='Search...'
															/>
														</div>
														<ul className='list'>
															<li
																data-value=''
																className='option selected'
															>
																Blood Group
															</li>
															<li
																data-value='o+'
																className='option'
															>
																O+
															</li>
															<li
																data-value='o-'
																className='option'
															>
																O-
															</li>
															<li
																data-value='b+'
																className='option'
															>
																B+
															</li>
															<li
																data-value='b-'
																className='option'
															>
																B-
															</li>
															<li
																data-value='a+'
																className='option'
															>
																A+
															</li>
															<li
																data-value='a-'
																className='option'
															>
																A-
															</li>
															<li
																data-value='ab+'
																className='option'
															>
																AB+
															</li>
															<li
																data-value='ab-'
																className='option'
															>
																AB-
															</li>
														</ul>
													</div>
												</div>
												<div className='form-group'>
													<input
														type='text'
														className='form-control'
														id='state'
														value=''
														name='state'
														placeholder='State'
													/>
												</div>
												<div className='form-group'>
													<input
														type='text'
														className='form-control'
														id='city'
														name='city'
														placeholder='City'
													/>
												</div>
												<div className='form-group'>
													<input
														type='text'
														className='form-control'
														id='number_of_units'
														name='number_of_units'
														placeholder='Number Of Units'
													/>
												</div>
												<div className='form-group'>
													<input
														type='text'
														className='form-control'
														id='illness'
														name='illness'
														placeholder='Illness'
													/>
												</div>
												<div className='form-group'>
													<textarea
														name='hospital_address'
														id='hospital_address'
														className='form-control'
														cols='30'
														rows='10'
														placeholder='Hospital Address'
													></textarea>
												</div>
												<div className='form-group'>
													<textarea
														name='message'
														id='message'
														className='form-control'
														cols='30'
														rows='10'
														placeholder='Your Message'
													></textarea>
												</div>
											</div>
										</div>
										<div className='form-group'>
											<input
												type='submit'
												value='Submit Request'
												className='submit-btn register-as-donor'
											/>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReqForBlood;
