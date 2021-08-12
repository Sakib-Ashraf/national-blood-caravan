import React from 'react';
import '../../../../containers/App.css';
import dp from '../../../Donors/Donor.png';
import { NavLink } from 'react-router-dom';

const Oposetive = () => {
	return (
		<>
			<div className='breadcrumb-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='breadcrumb-inner'>
								<h2 className='page-title'>
									{' '}
									All Available Donors In O+
								</h2>
								<ul className='page-list'>
									<li>
										<NavLink to='/'>Home</NavLink>
									</li>
									<li>
										<NavLink to='/o+'>
											{' '}
											All Available Donors In O+
										</NavLink>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<section className='dedicated-team-area padding-120 '>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'></div>
						<div className='col-lg-3 col-md-6'>
							<div className='single-donors-item margin-bottom-30'>
								<div className='thumb'>
									<img
										src={dp}
										alt='dp'
									/>
								</div>
								<div className='content'>
									<NavLink to='/donor-profile/16/donna-cessie'>
										{' '}
										<h4 className='title'>Donna Cessie</h4>
									</NavLink>
									<span className='blood-group'>
										Blood Group: <strong>O+</strong>
									</span>
									<span className='total-donate'>
										Total Donate: <strong>0</strong> Times
									</span>
								</div>
							</div>
						</div>
						<div className='col-lg-3 col-md-6'>
							<div className='single-donors-item margin-bottom-30'>
								<div className='thumb'>
									<img
										src={dp}
										alt='dp'
									/>
								</div>
								<div className='content'>
									<NavLink to='/donor-profile/8/marcus-jordle'>
										{' '}
										<h4 className='title'>Marcus Jordle</h4>
									</NavLink>
									<span className='blood-group'>
										Blood Group: <strong>O+</strong>
									</span>
									<span className='total-donate'>
										Total Donate: <strong>0</strong> Times
									</span>
								</div>
							</div>
						</div>
						<div className='col-lg-3 col-md-6'>
							<div className='single-donors-item margin-bottom-30'>
								<div className='thumb'>
									<img
										src={dp}
										alt='dp'
									/>
								</div>
								<div className='content'>
									<NavLink to='/donor-profile/5/james-long'>
										{' '}
										<h4 className='title'>James Long</h4>
									</NavLink>
									<span className='blood-group'>
										Blood Group: <strong>O+</strong>
									</span>
									<span className='total-donate'>
										Total Donate: <strong>1</strong> Times
									</span>
								</div>
							</div>
						</div>
						<div className='col-lg-12'>
							<nav
								className='pagination-wrapper'
								ariaLabel='Page navigation '
							></nav>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Oposetive;
