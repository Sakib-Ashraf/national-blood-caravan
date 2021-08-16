import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../containers/App.css';

const JoinAsDonor = () => {
	return (
		<section>
			<div className='breadcrumb-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='breadcrumb-inner'>
								<h2 className='page-title'> Join As Donor</h2>
								<ul className='page-list'>
									<li>
										<NavLink to='/home'>Home</NavLink>
									</li>
									<li>
										<NavLink to='/register-as-donor'>
											{' '}
											Join As Donor
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
							<div className='righti-content-area'>
								<div className='contact-page-form-wrap'>
									<div className='alert alert-danger'>
										<ul>
											<li>Every field is required.</li>
										</ul>
									</div>
									<form
										action='/register-as-donor'
										method='post'
										id='contact_page_form'
										className='contact-page-form'
										noValidate
										encType='multipart/form-data'
									>
										<input
											type='hidden'
											name='_token'
											value='OfPwLz0MpdRTmNY9ieQpPREP1CnEC1xHvU2a0HMH'
										/>{' '}
										<div className='row justify-content-center'>
											<div className='col-lg-8'>
												<div className='form-group'>
													<label htmlFor='Your Name'>
														Your Name:
													</label>
													<input
														type='text'
														name='name'
														value=''
														className='form-control'
														required
														aria-required='true'
													/>
												</div>
												<div className='form-group'>
													<label htmlFor='email'>
														Your Email:
													</label>
													<input
														type='email'
														className='form-control'
														id='email'
														name='email'
													/>
												</div>
												<div className='form-group'>
													<label htmlFor='mobile_number'>
														Your Mobile Number:
													</label>
													<input
														type='number'
														className='form-control'
														id='mobile'
														name='mobile'
														required
														aria-required='true'
													/>
												</div>
												<div className='form-group'>
													<label htmlFor='birth_date'>
														Your Birth-Date:
													</label>
													<input
														type='date'
														className='form-control'
														id='birthday'
														name='birthday'
														required
														aria-required='true'
													/>
												</div>
												<div className='form-group'>
													<label htmlFor='password'>
														Password:
													</label>
													<input
														type='password'
														name='password'
														className='form-control'
														minLength='6'
														required
														aria-required='true'
													/>
												</div>
												<div className='form-group'>
													<label htmlFor='confirm_password'>
														Confirm Password:
													</label>
													<input
														type='password'
														name='password_confirmation'
														className='form-control'
														minLength='6'
														required
														aria-required='true'
													/>
												</div>
												<div className='form-group'>
													<label htmlFor='blood_group'>
														Blood Group:
													</label>
													<select
														name='blood_group'
														id='blood_group'
														className='form-control nice-select wide'
														required
														aria-required='true'
													>
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
												</div>
												<div className='form-group'>
													<label htmlFor='gender'>
														Gender:
													</label>
													<select
														name='gender'
														id='gender'
														className='form-control nice-select wide'
														required
														aria-required='true'
													>
														<option value='male'>
															Male
														</option>
														<option value='female'>
															Female
														</option>
														<option value='other'>
															Other
														</option>
													</select>
												</div>
												<div className='form-group'>
													<label htmlFor='your_area'>
														Your Area:
													</label>
													<select
														name='area_id'
														className='form-control nice-select wide'
														id='area-id'
														required
														aria-required='true'
													>
														<option value=''>
															District
														</option>
														<option value='1'>
															Bagerhat
														</option>
														<option value='2'>
															Bandarban
														</option>
														<option value='3'>
															Barguna
														</option>
														<option value='4'>
															Barisal
														</option>
														<option value='5'>
															Bhola
														</option>
														<option value='6'>
															Bogura
														</option>
														<option value='7'>
															Brahmanbaria
														</option>
														<option value='8'>
															Chandpur
														</option>
														<option value='9'>
															Chapainawabganj
														</option>
														<option value='10'>
															Chattogram
														</option>
														<option value='11'>
															Chuadanga
														</option>
														<option value='12'>
															Comilla
														</option>
														<option value='13'>
															Coxsbazar
														</option>
														<option value='14'>
															Dhaka
														</option>
														<option value='15'>
															Dinajpur
														</option>
														<option value='16'>
															Faridpur
														</option>
														<option value='17'>
															Feni
														</option>
														<option value='18'>
															Gaibandha
														</option>
														<option value='19'>
															Gazipur
														</option>
														<option value='20'>
															Gopalganj
														</option>
														<option value='21'>
															Habiganj
														</option>
														<option value='22'>
															Jamalpur
														</option>
														<option value='23'>
															Jashore
														</option>
														<option value='24'>
															Jhalakathi
														</option>
														<option value='25'>
															Jhenaidah
														</option>
														<option value='26'>
															Joypurhat
														</option>
														<option value='27'>
															Khagrachhari
														</option>
														<option value='28'>
															Khulna
														</option>
														<option value='29'>
															Kishoreganj
														</option>
														<option value='30'>
															Kurigram
														</option>
														<option value='31'>
															Kushtia
														</option>
														<option value='32'>
															Lakshmipur
														</option>
														<option value='33'>
															Lalmonirhat
														</option>
														<option value='34'>
															Madaripur
														</option>
														<option value='35'>
															Magura
														</option>
														<option value='36'>
															Manikganj
														</option>
														<option value='37'>
															Meherpur
														</option>
														<option value='38'>
															Moulvibazar
														</option>
														<option value='39'>
															Munshiganj
														</option>
														<option value='40'>
															Mymensingh
														</option>
														<option value='41'>
															Naogaon
														</option>
														<option value='42'>
															Narail
														</option>
														<option value='43'>
															Narayanganj
														</option>
														<option value='44'>
															Narsingdi
														</option>
														<option value='45'>
															Natore
														</option>
														<option value='46'>
															Netrokona
														</option>
														<option value='47'>
															Nilphamari
														</option>
														<option value='48'>
															Noakhali
														</option>
														<option value='49'>
															Pabna
														</option>
														<option value='50'>
															Panchagarh
														</option>
														<option value='51'>
															Patuakhali
														</option>
														<option value='52'>
															Pirojpur
														</option>
														<option value='53'>
															Rajbari
														</option>
														<option value='54'>
															Rajshahi
														</option>
														<option value='55'>
															Rangamati
														</option>
														<option value='56'>
															Rangpur
														</option>
														<option value='57'>
															Satkhira
														</option>
														<option value='58'>
															Shariatpur
														</option>
														<option value='59'>
															Sherpur
														</option>
														<option value='60'>
															Sirajganj
														</option>
														<option value='61'>
															Sunamganj
														</option>
														<option value='62'>
															Sylhet
														</option>
														<option value='63'>
															Tangail
														</option>
														<option value='64'>
															Thakurgaon
														</option>
													</select>
												</div>
												<div className='form-group'>
													<label htmlFor='address'>
														Your Address:
													</label>
													<input
														type='text'
														name='address'
														value=''
														className='form-control'
														required
														aria-required='true'
													/>
												</div>
												<div className='form-group'>
													<label htmlFor='last_donate_date'>
														Last Donate Date:
													</label>
													<input
														type='date'
														className='form-control'
														id='last-donate-date'
														name='last-donate-date'
														required
														aria-required='true'
													/>
												</div>
											</div>
										</div>
										<div className='form-group'>
											<input
												type='submit'
												value='Register As Donor'
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
		</section>
	);
};

export default JoinAsDonor;
