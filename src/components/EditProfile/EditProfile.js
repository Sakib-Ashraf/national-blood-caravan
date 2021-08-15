import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../containers/App.css';

const EditProfile = () => {
	return (
		<div>
			<div className='breadcrumb-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='breadcrumb-inner'>
								<h2 className='page-title'> Edit Profile</h2>
								<ul className='page-list'>
									<li>
										<NavLink to='/'>Home</NavLink>
									</li>
									<li>
										<NavLink to='/user-edit-profile'>
											{' '}
											Edit Profile
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
								<h2 className='title'>Edit Profile</h2>
								<form
									action='/user-edit-profile'
									method='post'
									encType='multipart/form-data'
								>
									<input
										type='hidden'
										name='_token'
										value='sQwPxV15RmeuaCrE21fHEtoX47NZffqzxq3LXrsZ'
									/>{' '}
									<div className='form-group'>
										<input
											type='text'
											className='form-control'
											readOnly
											value='Sakib_Ashraf'
										/>
									</div>
									<div className='form-group'>
										<input
											type='text'
											className='form-control'
											name='name'
											id='name'
											value='Sakib Ashraf'
										/>
									</div>
									<div className='form-group'>
										<input
											type='text'
											className='form-control'
											name='email'
											id='email'
											value='sakibashrafnew5898@gmail.com'
										/>
									</div>
									<div className='form-group'>
										<button
											type='submit'
											className='submit-btn'
										>
											Save Change
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

export default EditProfile;
