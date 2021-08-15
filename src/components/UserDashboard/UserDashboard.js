import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../containers/App.css';

const UserDashboard = () => {
    return (
		<div>
			<div
				className='breadcrumb-area'
			>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='breadcrumb-inner'>
								<h2 className='page-title'> User Dashboard</h2>
								<ul className='page-list'>
									<li>
										<NavLink to='/'>
											Home
										</NavLink>
									</li>
									<li>
										<NavLink to='/user-dashboard'>
											{' '}
											User Dashboard
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
								<h2 className='title'>Profile Information</h2>
								<ul>
									<li>
										<strong>Name: </strong>{' '}
										<span className='right'>Sakib Ashraf</span>
									</li>
									<li>
										<strong>Email: </strong>{' '}
										<span className='right'>
											sakibashrafnew5898@gmail.com
										</span>
									</li>
									<li>
										<strong>Username: </strong>{' '}
										<span className='right'>Sakib_Ashraf</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserDashboard;
