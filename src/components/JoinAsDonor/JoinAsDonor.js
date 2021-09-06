import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import '../../containers/App.css';
import auth from '../Auth/auth';
import Form from 'react-validation/build/form';
import input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const required = (value) => {
	if (!value) {
		return (
			<div className='alert alert-danger' role='alert'>
				This field is required!
			</div>
		);
	}
};

class JoinAsDonor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			name: '',
			username: '',
			mobile: '',
			email: '',
			password: '',
			age: '',
			birth_date: '',
			blood_group: '',
			donated: '',
			gender: '',
			area: '',
			address: '',
			last_donate_date: '',
			showPass: false,
			icon: faEye,
			color: '#009C55',
			data: true,
			loading: false,
			message: '',
		};
	}

	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	}

	passShowHide = () => {
		if (this.state.showPass === false) {
			this.setState({
				showPass: true,
				icon: faEyeSlash,
				color: '#E83530',
			});
		} else if (this.state.showPass === true) {
			this.setState({
				showPass: false,
				icon: faEye,
				color: '#009C55',
			});
		}
	};

	onSubmitJoinDonor = (e) => {


		e.preventDefault();

		this.setState({
			message: '',
			loading: true,
		});

		this.form.validateAll();

		if (this.checkBtn.context._errors.length === 0) {
			auth.DonorRegister(this.state).then(
					(val) => {
						console.log(val);
						this.props.routerProps.history.push(
							`/login`
						);
					},
					(error) => {
						console.log(error);
						const resMessage =
							(error.response &&
								error.response.data &&
								error.response.data.message) ||
							error.message ||
							error.toString();

						this.setState({
							loading: false,
							message: resMessage,
						});
					}
				);
			
		} else {
			this.setState({
				loading: false,
				data: false,
			});
		}
	};

	render() {
		return (
			<section>
				<div className='breadcrumb-area'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='breadcrumb-inner'>
									<h2 className='page-title'>
										{' '}
										Join As Donor
									</h2>
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
										<Form
											onSubmit={this.onSubmitJoinDonor}
											ref={(c) => {
												this.form = c;
											}}
											id='contact_page_form'
											className='contact-page-form'
											noValidate
										>
											{' '}
											<div className='row justify-content-center'>
												{
													<div className='col-lg-8'>
														{this.state.data ? (
															<h1
																style={{
																	marginBottom:
																		'4rem',
																}}
															>
																Donor
																Information:
															</h1>
														) : (
															<h3
																className='alert-danger'
																style={{
																	marginBottom:
																		'4rem',
																}}
															>
																Form submission
																error. try
																again.
															</h3>
														)}
														<div className='form-group'>
															<label htmlFor='Your Name'>
																Your Name:
															</label>
															<input
																onChange={
																	this
																		.onChange
																}
																type='text'
																name='name'
																className='form-control'
																required
																aria-required='true'
																validations={[
																	required,
																]}
															/>
														</div>
														<div className='form-group'>
															<label htmlFor='Your Username'>
																Your Username:
															</label>
															<input
																onChange={
																	this
																		.onChange
																}
																type='text'
																name='username'
																className='form-control'
																required
																aria-required='true'
																validations={[
																	required,
																]}
															/>
														</div>
														<div className='form-group'>
															<label htmlFor='email'>
																Your Email:
															</label>
															<input
																onChange={
																	this
																		.onChange
																}
																type='email'
																className='form-control'
																id='email'
																name='email'
																validations={[
																	required,
																]}
															/>
														</div>
														<div className='form-group'>
															<label htmlFor='mobile_number'>
																Your Mobile
																Number:
															</label>
															<input
																onChange={
																	this
																		.onChange
																}
																type='tel'
																className='form-control'
																id='mobile'
																name='mobile'
																required
																aria-required='true'
																validations={[
																	required,
																]}
															/>
														</div>
														<div className='form-group'>
															<label htmlFor='age'>
																Your Age:
															</label>
															<input
																onChange={
																	this
																		.onChange
																}
																type='number'
																className='form-control'
																id='age'
																name='age'
																required
																aria-required='true'
																validations={[
																	required,
																]}
															/>
														</div>
														<div className='form-group'>
															<label htmlFor='birthday'>
																Your Date of
																Birth:
															</label>
															<input
																onChange={
																	this
																		.onChange
																}
																type='date'
																className='form-control'
																id='birthday'
																name='birth_date'
																required
																aria-required='true'
																validations={[
																	required,
																]}
															/>
														</div>
														<div className='form-group'>
															<label htmlFor='password'>
																Password:
															</label>
															<input
																onChange={
																	this
																		.onChange
																}
																type={
																	this.state
																		.showPass
																		? 'text'
																		: 'password'
																}
																name='password'
																className='form-control'
																required
																aria-required='true'
																validations={[
																	required,
																]}
															/>
															<p
																style={{
																	color: this
																		.state
																		.color,
																	cursor: 'pointer',
																}}
																onClick={
																	this
																		.passShowHide
																}
															>
																{' '}
																Show Password ?{' '}
																<FontAwesomeIcon
																	icon={
																		this
																			.state
																			.icon
																	}
																/>
															</p>
														</div>
														<div className='form-group'>
															<label htmlFor='blood_group'>
																Blood Group:
															</label>
															<select
																onChange={
																	this
																		.onChange
																}
																name='blood_group'
																id='blood_group'
																className='form-control nice-select wide'
																required
																aria-required='true'
																validations={[
																	required,
																]}
															>
																<option value=''>
																	Blood Group
																</option>
																<option value='O+'>
																	O+
																</option>
																<option value='O-'>
																	O-
																</option>
																<option value='B+'>
																	B+
																</option>
																<option value='B-'>
																	B-
																</option>
																<option value='A+'>
																	A+
																</option>
																<option value='A-'>
																	A-
																</option>
																<option value='AB+'>
																	AB+
																</option>
																<option value='AB-'>
																	AB-
																</option>
															</select>
														</div>
														<div className='form-group'>
															<label htmlFor='blood_group'>
																Total Donated:
															</label>
															<input
																onChange={
																	this
																		.onChange
																}
																type='number'
																name='donated'
																className='form-control'
																placeholder='0 times'
																required
																aria-required='true'
																validations={[
																	required,
																]}
															/>
														</div>
														<div className='form-group'>
															<label htmlFor='gender'>
																Gender:
															</label>
															<select
																onChange={
																	this
																		.onChange
																}
																name='gender'
																id='gender'
																className='form-control nice-select wide'
																required
																aria-required='true'
															>
																<option value=''>
																	Select Your
																	Gender
																</option>
																<option value='Male'>
																	Male
																</option>
																<option value='Female'>
																	Female
																</option>
																<option value='Other'>
																	Other
																</option>
															</select>
														</div>
														<div className='form-group'>
															<label htmlFor='your_area'>
																Your Area:
															</label>
															<select
																onChange={
																	this
																		.onChange
																}
																name='area'
																className='form-control nice-select wide'
																id='area'
																required
																aria-required='true'
																validations={[
																	required,
																]}
															>
																<option value=''>
																	District
																</option>
																<option value='Bagerhat'>
																	Bagerhat
																</option>
																<option value='Bandarban'>
																	Bandarban
																</option>
																<option value='Barguna'>
																	Barguna
																</option>
																<option value='Barisal'>
																	Barisal
																</option>
																<option value='Bhola'>
																	Bhola
																</option>
																<option value='Bogura'>
																	Bogura
																</option>
																<option value='Brahmanbaria'>
																	Brahmanbaria
																</option>
																<option value='Chandpur'>
																	Chandpur
																</option>
																<option value='Chapainawabganj'>
																	Chapainawabganj
																</option>
																<option value='Chattogram'>
																	Chattogram
																</option>
																<option value='Chuadanga1'>
																	Chuadanga
																</option>
																<option value='Comilla'>
																	Comilla
																</option>
																<option value='Coxsbazar'>
																	Coxsbazar
																</option>
																<option value='Dhaka'>
																	Dhaka
																</option>
																<option value='Dinajpur'>
																	Dinajpur
																</option>
																<option value='Faridpur'>
																	Faridpur
																</option>
																<option value='Feni'>
																	Feni
																</option>
																<option value='Gaibandha'>
																	Gaibandha
																</option>
																<option value='Gazipur'>
																	Gazipur
																</option>
																<option value='Gopalganj'>
																	Gopalganj
																</option>
																<option value='Habiganj'>
																	Habiganj
																</option>
																<option value='Jamalpur'>
																	Jamalpur
																</option>
																<option value='Jashore'>
																	Jashore
																</option>
																<option value='Jhalakathi'>
																	Jhalakathi
																</option>
																<option value='Jhenaidah'>
																	Jhenaidah
																</option>
																<option value='Joypurhat'>
																	Joypurhat
																</option>
																<option value='Khagrachhari'>
																	Khagrachhari
																</option>
																<option value='Khulna'>
																	Khulna
																</option>
																<option value='Kishoreganj'>
																	Kishoreganj
																</option>
																<option value='Kurigram'>
																	Kurigram
																</option>
																<option value='Kushtia'>
																	Kushtia
																</option>
																<option value='Lakshmipur'>
																	Lakshmipur
																</option>
																<option value='Lalmonirhat'>
																	Lalmonirhat
																</option>
																<option value='Madaripur'>
																	Madaripur
																</option>
																<option value='Magura'>
																	Magura
																</option>
																<option value='Manikganj'>
																	Manikganj
																</option>
																<option value='Meherpur'>
																	Meherpur
																</option>
																<option value='Moulvibazar'>
																	Moulvibazar
																</option>
																<option value='Munshiganj'>
																	Munshiganj
																</option>
																<option value='Mymensingh'>
																	Mymensingh
																</option>
																<option value='Naogaon'>
																	Naogaon
																</option>
																<option value='Narail'>
																	Narail
																</option>
																<option value='Narayanganj'>
																	Narayanganj
																</option>
																<option value='Narsingdi'>
																	Narsingdi
																</option>
																<option value='Natore'>
																	Natore
																</option>
																<option value='Netrokona'>
																	Netrokona
																</option>
																<option value='Nilphamari'>
																	Nilphamari
																</option>
																<option value='Noakhali'>
																	Noakhali
																</option>
																<option value='Pabna'>
																	Pabna
																</option>
																<option value='Panchagarh'>
																	Panchagarh
																</option>
																<option value='Patuakhali'>
																	Patuakhali
																</option>
																<option value='Pirojpur'>
																	Pirojpur
																</option>
																<option value='Rajbari'>
																	Rajbari
																</option>
																<option value='Rajshahi'>
																	Rajshahi
																</option>
																<option value='Rangamati'>
																	Rangamati
																</option>
																<option value='Rangpur'>
																	Rangpur
																</option>
																<option value='Satkhira'>
																	Satkhira
																</option>
																<option value='Shariatpur'>
																	Shariatpur
																</option>
																<option value='Sherpur'>
																	Sherpur
																</option>
																<option value='Sirajganj'>
																	Sirajganj
																</option>
																<option value='Sunamganj'>
																	Sunamganj
																</option>
																<option value='Sylhet'>
																	Sylhet
																</option>
																<option value='Tangail'>
																	Tangail
																</option>
																<option value='Thakurgaon'>
																	Thakurgaon
																</option>
															</select>
														</div>
														<div className='form-group'>
															<label htmlFor='address'>
																Your Address:
															</label>
															<input
																onChange={
																	this
																		.onChange
																}
																type='text'
																name='address'
																className='form-control'
																required
																aria-required='true'
																validations={[
																	required,
																]}
															/>
														</div>
														<div className='form-group'>
															<label htmlFor='last_donate_date'>
																Last Donate
																Date:
															</label>
															<input
																onChange={
																	this
																		.onChange
																}
																type='date'
																className='form-control'
																id='last-donate-date'
																name='last_donate_date'
																required
																aria-required='true'
																validations={[
																	required,
																]}
															/>
														</div>
														<div className='form-group'>
															<label>
																Already a Donor?{' '}
																<NavLink to='/login'>
																	{' '}
																	<strong
																		style={{
																			color: '#E83530',
																		}}
																	>
																		Login
																	</strong>{' '}
																</NavLink>{' '}
																Instead
															</label>
														</div>
													</div>
												}
											</div>
											<div className='form-group'>
													<input
														onClick={
															this
																.onSubmitJoinDonor
														}
														type='submit'
														value='Register As Donor'
														className='submit-btn register-as-donor'
													/>
											</div>
											{this.state.message && (
												<div className='form-group'>
													<div
														className='alert alert-danger'
														role='alert'
													>
														{this.state.message}
													</div>
												</div>
											)}
											<CheckButton
												style={{ display: 'none' }}
												ref={(c) => {
													this.checkBtn = c;
												}}
											/>
										</Form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default JoinAsDonor;
