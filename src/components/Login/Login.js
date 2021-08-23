import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../containers/App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email_or_mobile: '',
			password: '',
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

	onSubmitLogIn = (event) => {
		event.preventDefault();

		fetch('http://localhost:3300/login', {
			method: 'post',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email_or_mobile: this.state.email_or_mobile,
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
										<div className='contact-page-form'>
											{' '}
											<div className='form-group'>
												<input
													onChange={
														this.onChange
													}
													type='text'
													name='email_or_mobile'
													placeholder='Your Email or Mobile no'
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
												<p
													style={{
														color: this.state.color,
														cursor: 'pointer',
													}}
													onClick={this.passShowHide}
												>Show Password ? {' '}
													<FontAwesomeIcon
														icon={this.state.icon}
													/>
												</p>
											</div>
											<div className='form-group'>
												<input
													onClick={this.onSubmitLogIn}
													type='submit'
													value='Login'
													className='submit-btn register-as-donor'
												/>
											</div>
											<div className='extra-links form-group'>
												<NavLink to='/recovery'>
													Forget Password ?
												</NavLink>
												<NavLink to='/register'>
													Don't Have Account ?
												</NavLink>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
};

export default Login;
