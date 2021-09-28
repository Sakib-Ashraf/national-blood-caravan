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
class Recovery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mobile: '',
			NewPassword: '',
			message: '',
			role: '',
			loading: false,
			userloading: false,
			donorloading: false,
		};
	}

	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	onChangePassword = (event) => {
		event.preventDefault();

		this.state.role === 'user'
			? this.setState({
				message: '',
				userloading: true,
			})
			: this.setState({
				message: '',
				donorloading: true,
			});

		this.form.validateAll();

		if (this.checkBtn.context._errors.length === 0) {
			if (this.state.role === 'donor') {
				baseURL
					.put(`donor-recovery`, {
						mobile: this.state.mobile,
						NewPassword: this.state.NewPassword,
					})
					.then(
						(profileData) => {
							if (profileData.data) {
								this.props.routerProps.history.push(`/login`);
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
								donorloading: false,
								message: resMessage,
							});
						}
					);
			} else if (this.state.role === 'user') {
				baseURL
					.put(`user-recovery`, {
						mobile: this.state.mobile,
						NewPassword: this.state.NewPassword,
					})
					.then(
						(profileData) => {
							if (profileData.data) {
								this.props.routerProps.history.push(`/login`);
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
		};
	};

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
										Forget Password
									</h2>
									<ul className='page-list'>
										<li>
											<NavLink to='/home'>Home</NavLink>
										</li>
										<li>
											<a href='/forget-password'>
												{' '}
												Forget Password
											</a>
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
										<h2 className='title'>
											Forget Password
										</h2>
										<Form
											className='contact-page-form'
											ref={(c) => {
												this.form = c;
											}}
											onSubmit={this.onChangePassword}
										>
											{' '}
											<div className='form-group'>
												<label htmlFor='mobile'>
													Your Mobile Number
												</label>
												<input
													validations={[required]}
													onChange={this.onChange}
													type='tel'
													name='mobile'
													placeholder='Enter Your Mobile Number'
													className='form-control'
													required
													aria-required='true'
												/>
											</div>
											<div className='form-group'>
												<label htmlFor='password'>
													Your New Password
												</label>
												<input
													validations={[required]}
													onChange={this.onChange}
													type='password'
													name='NewPassword'
													placeholder='New Password'
													className='form-control'
													required
													aria-required='true'
												/>
											</div>
											<div className='form-group'>
												<button
													onClick={() =>
														this.setState({
															role: 'donor',
														})
													}
													type='submit'
													value='Change Password as Donor'
													disabled={
														this.state.donorloading
													}
													className='submit-btn register-as-donor'
												>
													{this.state
														.donorloading && (
														<span className='spinner-border spinner-border-sm'></span>
													)}{' '}
													<span>Change Password as Donor</span>
												</button>
											</div>
											<p style={{ textAlign: 'center' }}>
												Or
											</p>
											<div className='form-group'>
												<button
													onClick={() =>
														this.setState({
															role: 'user',
														})
													}
													type='submit'
													value='Change Password as User'
													disabled={
														this.state.userloading
													}
													className='submit-btn register-as-donor'
												>
													{this.state.userloading && (
														<span className='spinner-border spinner-border-sm'></span>
													)}{' '}
													<span>Change Password as User</span>
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
};


export default Recovery;