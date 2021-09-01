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
			loading: false,
			message: '',
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

		this.setState({
			message: '',
			loading: true,
		});

		this.form.validateAll();

		if (this.checkBtn.context._errors.length === 0) {
			auth.login(this.state.mobile, this.state.password).then(
				(val) => {
					this.props.loadLoginProfile(val.user);
					const { id, name } = val.user;
					this.props.routerProps.history.push(`/donors/profile/${id}/${name}`);
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
												></input>
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
												></input>
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
													type='submit'
													value='Login'
													disabled={
														this.state.loading
													}
													className='submit-btn register-as-donor'
												>
													{this.state.loading && (
														<span className='spinner-border spinner-border-sm'></span>
													)}{' '}
													<span>Login</span>
												</button>
												{/* </NavLink> */}
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
