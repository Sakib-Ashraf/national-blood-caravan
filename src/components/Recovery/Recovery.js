import React from 'react';
import '../../containers/App.css';


const Recovery = () => {
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
										<a href='https://nationalbloodcaravan.com/home'>
											Home
										</a>
									</li>
									<li>
										<a href='https://nationalbloodcaravan.com/forget-password'>
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
										action='https://nationalbloodcaravan.com/user-forget-password'
										method='post'
										className='contact-page-form'
										noValidate
										encType='multipart/form-data'
									>
										<input
											type='hidden'
											name='_token'
											value='OfPwLz0MpdRTmNY9ieQpPREP1CnEC1xHvU2a0HMH'
										/>{' '}
										<div className='form-group'>
											<label for='username'>
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
};


export default Recovery;