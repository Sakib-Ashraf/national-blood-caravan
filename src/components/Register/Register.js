import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '../../containers/App.css';

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

		fetch('http://www.nationalbloodcaravan.com/register', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: this.state.name,
				username: this.state.username,
				email: this.state.email,
				mobile: this.state.mobile,
				password: this.state.password,
			}),
		})
			.then((response) => response.json())
			.then((user) => {
				if (user.id) {
					this.props.loadData(user);
					this.props.onRouteChange('home');
				}
			});
	};

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
										<form
											method='POST'
											id='contact_page_form'
											className='contact-page-form'
										>
											<div className='row justify-content-center'>
												<div className='col-lg-8'>
													<div className='form-group'>
														<input
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
														<div style={{ display: 'flex', justifyContent: 'space-between'}}>
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
												<NavLink to='/users/profile/:id/:name'>
													<input
														onClick={
															this
																.onSubmitRegister
														}
														type='submit'
														value='Register'
														className='submit-btn register-as-donor'
													/>
												</NavLink>
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
	}
}

export default Register;
