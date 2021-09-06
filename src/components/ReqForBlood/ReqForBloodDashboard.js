import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../containers/App.css';

const ReqForBloodDashboard = ({ ReqData, dateConverter }) => {
	console.log(ReqData);
	const {
		id,
		name,
		blood_group,
		mobile,
		age,
		email,
		gender,
		address,
		hospital_address,
		area,
		illness,
		number_of_units,
		message,
		requested_on
	} = ReqData;
	return (
		<div>
			<div className='breadcrumb-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='breadcrumb-inner'>
								<h2 className='page-title'>
									{' '}
									Blood Request Dashboard
								</h2>
								<ul className='page-list'>
									<li>
										<NavLink to='/'>Home</NavLink>
									</li>
									<li>
										<NavLink to={`users/request/${id}`}>
											{' '}
											Blood Request Dashboard
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
								<h2 className='title'>Blood Request Details</h2>
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
										<strong>Mobile no: </strong>{' '}
										<span className='right'>
											{mobile}
										</span>
									</li>
									<li>
										<strong>Email: </strong>{' '}
										<span className='right'>{email}</span>
									</li>
									<li>
										<strong>Blood Group: </strong>{' '}
										<span className='right'>{blood_group}</span>
									</li>
									<li>
										<strong>Patient Age: </strong>{' '}
										<span className='right'>{age}</span>
									</li>
									<li>
										<strong>Gender: </strong>{' '}
										<span className='right'>{gender}</span>
									</li>
									<li>
										<strong>Address: </strong>{' '}
										<span className='right'>
											{address}
										</span>
									</li>
									<li>
										<strong>Area: </strong>{' '}
										<span className='right'>{area}</span>
									</li>
									<li>
										<strong>Hospital Address: </strong>{' '}
										<span className='right'>{hospital_address}</span>
									</li>
									<li>
										<strong>Number Of Units: </strong>{' '}
										<span className='right'>{number_of_units}</span>
									</li>
									<li>
										<strong>Illness: </strong>{' '}
										<span className='right'>
											{illness}
										</span>
									</li>
									<li>
										<strong>Message: </strong>{' '}
										<span className='right'>{message}</span>
									</li>
									<li>
										<strong>Request Date: </strong>{' '}
										<span className='right'>{dateConverter(requested_on)}</span>
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

export default ReqForBloodDashboard;
