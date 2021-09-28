import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import auth from '../Auth/auth';
import Form from 'react-validation/build/form';
import CheckButton from 'react-validation/build/button';
import '../../containers/App.css';


const required = (value) => {
	if (!value) {
		return (
			<div className='alert alert-danger' role='alert'>
				This field is required!
			</div>
		);
	}
};
class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			username: '',
			mobile: '',
			email: '',
			password: '',
			showPass: false,
			message: '',
			loading: false,
			icon: faEye,
			color: '#009C55',
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

	onSubmitRegister = (event) => {
		event.preventDefault();

		this.setState({
			message: '',
			loading: true,
		});

		this.form.validateAll();

		if (this.checkBtn.context._errors.length === 0) {
			auth.UserRegister(this.state).then(
				() => {
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

		};
	}

	render() {
		return (
			<div>
				<div className='breadcrumb-area'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='breadcrumb-inner'>
									<h2 className='page-title'>Register</h2>
									<ul className='page-list'>
										<li>
											<NavLink to='/'>Home</NavLink>
										</li>
										<li>
											<NavLink to='/register'>
												Register
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
											onSubmit={this.onSubmitRegister}
											ref={(c) => {
												this.form = c;
											}}
											id='contact_page_form'
											className='contact-page-form'
										>
											<div className='row justify-content-center'>
												<div className='col-lg-8'>
													<div className='form-group'>
														<input
															validations={[
																required,
															]}
															onChange={
																this.onChange
															}
															type='text'
															name='name'
															placeholder='Your Name'
															className='form-control'
															required
															aria-required='true'
														/>
													</div>
													<div className='form-group'>
														<input
															validations={[
																required,
															]}
															onChange={
																this.onChange
															}
															type='text'
															name='username'
															placeholder='Your Username'
															className='form-control'
															required
															aria-required='true'
														/>
													</div>
													<div className='form-group'>
														<input
															validations={[
																required,
															]}
															onChange={
																this.onChange
															}
															type='tel'
															name='mobile'
															placeholder='Your Mobile Number'
															className='form-control'
															required
															aria-required='true'
														/>
													</div>
													<div className='form-group'>
														<input
															validations={[
																required,
															]}
															onChange={
																this.onChange
															}
															type='email'
															name='email'
															placeholder='Your Email'
															className='form-control'
															required
															aria-required='true'
														/>
													</div>
													<div className='form-group'>
														<input
															validations={[
																required,
															]}
															onChange={
																this.onChange
															}
															type='password'
															name='password'
															placeholder='Your Password'
															className='form-control'
															required
															aria-required='true'
														/>
														<div
															style={{
																display: 'flex',
																justifyContent:
																	'space-between',
															}}
														>
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
																Show Password ?{' '}
																<FontAwesomeIcon
																	icon={
																		this
																			.state
																			.icon
																	}
																/>
															</p>

															<label>
																Already a User?{' '}
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
												</div>
											</div>
											<div className='form-group'>
												<button
													type='submit'
													value='Register'
													className='submit-btn register-as-donor'
													disabled={
														this.state.loading
													}
												>
													{this.state
														.loading && (
														<span className='spinner-border spinner-border-sm'></span>
													)}{' '}
													<span>
														Register As User
													</span>
												</button>
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
			</div>
		);
	}
}

export default Register;
