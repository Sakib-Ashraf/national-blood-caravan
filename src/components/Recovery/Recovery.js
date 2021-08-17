import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../containers/App.css';


class Recovery extends Component {
	render() {
		return (
			<div>
				<div className='breadcrumb-area'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='breadcrumb-inner'>
									<h2 className='page-title'> Forget Password</h2>
									<ul className='page-list'>
										<li>
											<NavLink to='/home'>
												Home
											</NavLink>
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
										<h2 className='title'>Forget Password</h2>
										<form
											action='/user-forget-password'
											method='post'
											className='contact-page-form'
											noValidate
											encType='multipart/form-data'
										>{' '}
											<div className='form-group'>
												<label htmlFor='username'>
													Your Username Or Email
												</label>
												<input
													type='text'
													name='username'
													placeholder='Enter Username or Email'
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
};


export default Recovery;