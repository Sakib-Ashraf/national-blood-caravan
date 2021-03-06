import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../containers/App.css';
import Form from 'react-validation/build/form';
import CheckButton from 'react-validation/build/button';
import baseURL from '../Auth/baseURL';


const required = (value) => {
	if (!value) {
		return (
			<div className='alert alert-danger' role='alert'>
				This field is required!
			</div>
		);
	}
};


class ReqForBlood extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			mobile: '',
			email: '',
			age: '',
			blood_group: '',
			gender: '',
			area: '',
			address: '',
			number_of_units: '',
			illness: '',
			hospital_address: '',
			message: '',
			response: {},
			data: true,
			loading: false,
			resmessage: '',
		};
	}

	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	onSubmitBloodRequest = (event) => {
		event.preventDefault();

		this.setState({
			resmessage: '',
			loading: true,
		});

		this.form.validateAll();

		if (this.checkBtn.context._errors.length === 0) {
			baseURL
				.post('blood-request', {
					name: this.state.name,
					email: this.state.email,
					mobile: this.state.mobile,
					age: this.state.age,
					blood_group: this.state.blood_group,
					gender: this.state.gender,
					area: this.state.area,
					address: this.state.address,
					number_of_units: this.state.number_of_units,
					illness: this.state.illness,
					hospital_address: this.state.hospital_address,
					message: this.state.message,
				})
				.then(
					(response) => {
						if (response.statusText === 'OK') {
							this.props.routerProps.history.push(`/#blood-requests`);
						
						console.log(response);
						response.data
							? this.setState({
									data: true,
									resmessage: response.statusText,
							  })
								: this.setState({ data: false });
						}
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
							resmessage: resMessage,
							loading: false,
						});
					}
				)
				.catch((err) => console.log(err));
		} else {
			this.setState({
				loading: false,
				data: false,
			});
		}
	};;

	render() {
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
										<Form
											ref={(c) => {
												this.form = c;
											}}
											onSubmit={this.onSubmitBloodRequest}
											className='contact-page-form'
											noValidate
										>
											{' '}
											<div className='row justify-content-center'>
												<div className='col-lg-8'>
													{this.state.data ? (
														<h1
															style={{
																marginBottom:
																	'4rem',
															}}
														>
															Blood Request
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
															Request submission
															error. try again.
														</h3>
													)}
													<div className='form-group'>
														<input
															type='text'
															name='name'
															onChange={
																this.onChange
															}
															placeholder='Your Name'
															className='form-control'
															required
															validations={[
																required,
															]}
															aria-required='true'
														/>
													</div>
													<div className='form-group'>
														<input
															type='email'
															name='email'
															placeholder='Your Email'
															onChange={
																this.onChange
															}
															className='form-control'
															required
															validations={[
																required,
															]}
															aria-required='true'
														/>
													</div>
													<div className='form-group'>
														<input
															type='text'
															className='form-control'
															id='mobile'
															onChange={
																this.onChange
															}
															name='mobile'
															validations={[
																required,
															]}
															placeholder='Your Mobile'
														/>
													</div>
													<div className='form-group'>
														<input
															type='number'
															className='form-control'
															id='age'
															onChange={
																this.onChange
															}
															name='age'
															validations={[
																required,
															]}
															placeholder='Patient Age'
														/>
													</div>
													<div className='form-group'>
														<select
															onChange={
																this.onChange
															}
															name='blood_group'
															id='blood_group'
															placeholder='Blood Group'
															className='form-control nice-select wide'
															required
															validations={[
																required,
															]}
															aria-required='true'
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
														<select
															onChange={
																this.onChange
															}
															name='gender'
															id='gender'
															placeholder='Gender'
															className='form-control nice-select wide'
															required
															validations={[
																required,
															]}
															aria-required='true'
														>
															<option value=''>
																Select Patient's
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
														<select
															onChange={
																this.onChange
															}
															name='area'
															className='form-control nice-select wide'
															id='area'
															placeholder='Your Area'
															required
															validations={[
																required,
															]}
															aria-required='true'
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
														<input
															onChange={
																this.onChange
															}
															type='text'
															name='address'
															placeholder='Enter your address'
															className='form-control'
															required
															validations={[
																required,
															]}
															aria-required='true'
														/>
													</div>
													<div className='form-group'>
														<input
															type='number'
															onChange={
																this.onChange
															}
															className='form-control'
															id='number_of_units'
															name='number_of_units'
															validations={[
																required,
															]}
															placeholder='Number Of Units'
														/>
													</div>
													<div className='form-group'>
														<input
															type='text'
															onChange={
																this.onChange
															}
															className='form-control'
															id='illness'
															name='illness'
															validations={[
																required,
															]}
															placeholder='Illness'
														/>
													</div>
													<div className='form-group'>
														<textarea
															name='hospital_address'
															onChange={
																this.onChange
															}
															id='hospital_address'
															className='form-control'
															cols='30'
															rows='10'
															validations={[
																required,
															]}
															placeholder='Hospital Address'
														></textarea>
													</div>
													<div className='form-group'>
														<textarea
															name='message'
															onChange={
																this.onChange
															}
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
												<button
													value='Submit Request'
													className='submit-btn register-as-donor'
													disabled={
														this.state.loading
													}
												>
													{this.state.loading && (
														<span className='spinner-border spinner-border-sm'></span>
													)}{' '}
													<span>
														Submit Request
													</span>
												</button>
											</div>
											{this.state.resmessage && (
												<div className='form-group'>
													<div
														className='alert alert-danger'
														role='alert'
													>
														{this.state.resmessage}
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
			</div>
		);
	}
}

export default ReqForBlood;
