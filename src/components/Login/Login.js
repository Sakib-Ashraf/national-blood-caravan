import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../containers/App.css';

class Login extends Component {
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
										<form
											action='/login'
											method='post'
											className='contact-page-form'
											noValidate
											encType='multipart/form-data'
										>{' '}
											<div className='form-group'>
												<input
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
													type='password'
													name='password'
													placeholder='Your Password'
													className='form-control'
													required
													aria-required='true'
												/>
											</div>
											<div className='form-group'>
												<input
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
										</form>
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
