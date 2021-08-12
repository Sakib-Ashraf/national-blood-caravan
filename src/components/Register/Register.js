import React from 'react';
import '../../containers/App.css';


const Register = () => {
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
										<a href='https://nationalbloodcaravan.com/'>
											Home
										</a>
									</li>
									<li>
										<a href='/register'>Register</a>
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
										action='https://nationalbloodcaravan.com/register'
										method='post'
										id='contact_page_form'
										className='contact-page-form'
										noValidate
										encType='multipart/form-data'
									>
										<input
											type='hidden'
											name='_token'
											value='OfPwLz0MpdRTmNY9ieQpPREP1CnEC1xHvU2a0HMH'
										/>
										<div className='row justify-content-center' />
										<div className='col-lg-8'>
											<div className='form-group'>
												<input
													type='text'
													name='name'
													placeholder='Your Name'
													value=''
													className='form-control'
													required
													aria-required='true'
												/>
											</div>
											<div className='form-group'>
												<input
													type='text'
													name='username'
													placeholder='Your Username'
													value=''
													className='form-control'
													required
													aria-required='true'
												/>
											</div>
											<div className='form-group'>
												<input
													type='email'
													name='email'
													placeholder='Your Email'
													value=''
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
													type='password'
													name='password_confirmation'
													placeholder='Confirm Password'
													className='form-control'
													required
													aria-required='true'
												/>
											</div>
                                        </div>
                                        <div className='form-group'>
											<input
												type='submit'
												value='Register'
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


export default Register;