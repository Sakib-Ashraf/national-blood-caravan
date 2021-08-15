import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../containers/App.css';

const ChangePassword = () => {
	return (
		<div>
			<div className='breadcrumb-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='breadcrumb-inner'>
								<h2 className='page-title'> Change Password</h2>
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
								<form
									action='/user-change-password'
									method='post'
									encType='multipart/form-data'
								>
									<input
										type='hidden'
										name='_token'
										value='sQwPxV15RmeuaCrE21fHEtoX47NZffqzxq3LXrsZ'
									/>{' '}
									<div className='form-group'>
										<label htmlFor='password'>
											Old Password
										</label>
										<input
											type='password'
											name='old_password'
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
											type='password'
											name='password'
											placeholder='New Password'
											className='form-control'
											required
											aria-required='true'
										/>
									</div>
									<div className='form-group'>
										<label htmlFor='password_confirmation'>
											Confirm New Password
										</label>
										<input
											type='password'
											name='password_confirmation'
											placeholder='Confirm Password'
											className='form-control'
											required
											aria-required='true'
										/>
									</div>
									<div className='form-group'>
										<button
											type='submit'
											className='submit-btn'
										>
											Change Password
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChangePassword;
