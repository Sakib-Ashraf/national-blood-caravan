import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import '../../containers/App.css';
import Form from 'react-validation/build/form';
import input from 'react-validation/build/input';
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


class ChangePassword extends Component {
	constructor(props) {
		super(props);
		this.state = {
			OldPassword: '',
			NewPassword: '',
			message: '',
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
			if (this.props.loginProfile.blood_group) {
				baseURL
					.put(
						`donors/profile/donor-change-password/${this.props.loginProfile.id}`,
						{
							OldPassword: this.state.OldPassword,
							NewPassword: this.state.NewPassword,
						}
					)
					.then(
						(profileData) => {
							if (profileData.data.id) {
								this.props.loadLoginProfile(profileData.data);
							}
							this.setState({
								message: profileData.data.message,
							});
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
			} else {
				baseURL
					.put(
						`donors/profile/user-change-password/${this.props.loginProfile.id}`,
						{
							OldPassword: this.state.OldPassword,
							NewPassword: this.state.NewPassword,
						}
					)
					.then(
						(profileData) => {
							if (profileData.data.id) {
								this.props.loadLoginProfile(profileData.data);
							}
							this.setState({
								message: profileData.data.message,
							});
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
			<div>
				<div className='breadcrumb-area'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='breadcrumb-inner'>
									<h2 className='page-title'>
										{' '}
										Change Password
									</h2>
									<ul className='page-list'>
										<li>
											<NavLink to='/'>Home</NavLink>
										</li>
										<li>
											<NavLink to='/user-change-password'>
												{' '}
												Change Password
											</NavLink>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='donor-dashboard-page-content padding-120'>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col-lg-8'>
								<div className='donor-content-area'>
									<h2 className='title'>Change Password</h2>
									<Form
										ref={(c) => {
											this.form = c;
										}}
										onSubmit={this.onChangePassword}
									>
										<div className='form-group'>
											<label htmlFor='password'>
												Old Password
											</label>
											<input
												validations={[required]}
												onChange={this.onChange}
												type='password'
												name='OldPassword'
												placeholder='Old Password'
												className='form-control'
												required
												aria-required='true'
												autoComplete='off'
											/>
										</div>
										<div className='form-group'>
											<label htmlFor='password'>
												New Password
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
												type='submit'
												className='submit-btn'
												disabled={
													this.state.userloading
												}
											>
												{this.state.userloading && (
													<span className='spinner-border spinner-border-sm'></span>
												)}{' '}
												<span>
													Change Password
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
		);
	}
};

export default ChangePassword;
