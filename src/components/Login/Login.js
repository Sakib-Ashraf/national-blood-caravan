import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../containers/App.css';
import auth from '../Auth/auth';

import Form from 'react-validation/build/form';
import input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mobile: '',
			password: '',
			icon: faEye,
			color: '#009C55',
			showPass: false,
			userloading: false,
			donorloading: false,
			message: '',
			role: '',
		};
	}

	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

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

	onSubmitLogIn = (e) => {
		
		e.preventDefault();

		this.state.role === 'user'
			? this.setState({
					message: '',
					userloading: true,
			  })
			: this.setState({
					message: '',
					donorloading: true,
			  })

		this.form.validateAll();

		if (this.checkBtn.context._errors.length === 0) {
			if (this.state.role === 'donor') {
				auth.Donorlogin(this.state.mobile, this.state.password)
					.then(val => {
						this.props.loadLoginProfile(val.user);
						const { id, name } = val.user;
						this.props.routerProps.history.push(`/donor-dashboard/${id}/${name}`);
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
								donorloading: false,
								message: resMessage,
							});
						}
					);
			} else if (this.state.role === 'user') {
				auth.Userlogin(this.state.mobile, this.state.password).then(
					(val) => {
						this.props.loadLoginProfile(val.user);
						const { id, name } = val.user;
						this.props.routerProps.history.push(
							`/user-dashboard/${id}/${name}`
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
							userloading: false,
							message: resMessage,
						});
					}
				);
			}
		} else {
			this.setState({
				userloading: false,
				donorloading: false,
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
									<h2 className='page-title'>Login</h2>
									<ul className='page-list'>
										<li>
											<NavLink to='/'>Home</NavLink>
										</li>
										<li>
											<NavLink to='/login'>Login</NavLink>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='page-content contact-page-content-area padding-120'>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col-lg-6'>
								<div className='right-content-area'>
									<div className='contact-page-form-wrap login-page'>
										<h2 className='title'>Login</h2>
										<Form
											onSubmit={this.onSubmitLogIn}
											ref={(c) => {
												this.form = c;
											}}
											className='contact-page-form'
										>
											{' '}
											<div className='form-group'>
												<input
													onChange={this.onChange}
													type='text'
													name='mobile'
													placeholder='Your Mobile no'
													className='form-control'
													required
													aria-required='true'
													validations={[required]}
													value={this.state.mobile}
												/>
											</div>
											<div className='form-group'>
												<input
													onChange={this.onChange}
													type={
														this.state.showPass
															? 'text'
															: 'password'
													}
													name='password'
													value={this.state.password}
													placeholder='Your Password'
													className='form-control'
													required
													validations={[required]}
													aria-required='true'
												/>
												<p
													style={{
														color: this.state.color,
														cursor: 'pointer',
													}}
													onClick={this.passShowHide}
												>
													Show Password ?{' '}
													<FontAwesomeIcon
														icon={this.state.icon}
													/>
												</p>
											</div>
											<div className='form-group'>
												<button
													onClick={() =>
														this.setState({
															role: 'user',
														})
													}
													type='submit'
													value='Login'
													disabled={
														this.state.userloading
													}
													className='submit-btn register-as-donor'
												>
													{this.state.userloading && (
														<span className='spinner-border spinner-border-sm'></span>
													)}{' '}
													<span>Login as User</span>
												</button>
											</div>
											<p style={{ textAlign: 'center' }}>
												Or
											</p>
											<div className='form-group'>
												<button
													onClick={() =>
														this.setState({
															role: 'donor',
														})
													}
													type='submit'
													value='Login'
													disabled={
														this.state.donorloading
													}
													className='submit-btn register-as-donor'
												>
													{this.state.donorloading && (
														<span className='spinner-border spinner-border-sm'></span>
													)}{' '}
													<span>Login as Donor</span>
												</button>
											</div>
											<div className='extra-links form-group'>
												<NavLink to='/recovery'>
													Forget Password ?
												</NavLink>
												<NavLink to='/register'>
													Don't Have Account ?
												</NavLink>
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

export default Login;
