import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../containers/App.css';

const UserDashboard = ({ loginProfile }) => {
	const {
		id,
		name,
		username,
		email,
		mobile,
	} = loginProfile;
    return (
		<div>
			<div className='breadcrumb-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='breadcrumb-inner'>
								<h2 className='page-title'> User Dashboard</h2>
								<ul className='page-list'>
									<li>
										<NavLink to='/'>Home</NavLink>
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
										<strong>ID: </strong>{' '}
										<span className='right'>{id}</span>
									</li>
									<li>
										<strong>Name: </strong>{' '}
										<span className='right'>{name}</span>
									</li>
									<li>
										<strong>Username: </strong>{' '}
										<span className='right'>
											{username}
										</span>
									</li>
									<li>
										<strong>Email: </strong>{' '}
										<span className='right'>{email}</span>
									</li>
									<li>
										<strong>Mobile no: </strong>{' '}
										<span className='right'>{mobile}</span>
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
