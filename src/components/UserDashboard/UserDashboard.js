import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../containers/App.css';

const UserDashboard = ({ loginProfile , dateConverter}) => {
	const {
		id,
		name,
		username,
		email,
		blood_group,
		age,
		mobile,
		gender,
		address,
		area,
		donated,
		joined,
		last_donate_date,
		activation_date,
		disablerValue,
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
									<li>
										<strong>Age: </strong>{' '}
										<span className='right'>{age}</span>
									</li>
									<li>
										<strong>Gender: </strong>{' '}
										<span className='right'>{gender}</span>
									</li>
									<li>
										<strong>Blood Group: </strong>{' '}
										<span className='right'>
											{blood_group}
										</span>
									</li>
									<li>
										<strong>Donated: </strong>{' '}
										<span className='right'>
											{donated}
											{' Times'}
										</span>
									</li>
									<li>
										<strong>Area: </strong>{' '}
										<span className='right'>{area}</span>
									</li>
									<li>
										<strong>Address: </strong>{' '}
										<span className='right'>{address}</span>
									</li>
									<li>
										<strong>Joined: </strong>{' '}
										<span className='right'>{dateConverter(joined)}</span>
									</li>
									<li>
										<strong>Last Donate Date: </strong>{' '}
										<span className='right'>
											{dateConverter(last_donate_date)}
										</span>
									</li>
									<li>
										<strong>Next Activation Date: </strong>{' '}
										<span className='right'>
											{dateConverter(activation_date)}
										</span>
									</li>
									<li>
										<strong>Account Status: </strong>{' '}
										<span className='right'>
											{disablerValue ? (
												<span
													style={{
														backgroundColor: '#fd7e14',
														color: '#fff',
														padding: '3px',
														borderRadius: '5px',
														marginLeft: '2rem'
													}}
												>
													Paused
												</span>
											) : (
												<span
													style={{
														backgroundColor: '#009C55',
														color: '#fff',
														padding: '3px',
														borderRadius: '5px',
														margin: '2rem 2rem 2rem 2rem'
													}}
												>
													Active
												</span>
											)}
										</span>
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
