import React from 'react';
import '../../../../containers/App.css';
import dp from '../../../Donors/Donor.png';
import { NavLink } from 'react-router-dom';

const Aposetive = () => {
	return (
		<>
			<div className='breadcrumb-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='breadcrumb-inner'>
								<h2 className='page-title'>
									{' '}
									All Available Donors In A+
								</h2>
								<ul className='page-list'>
									<li>
										<NavLink to='/'>Home</NavLink>
									</li>
									<li>
										<NavLink to='/a+'>
											{' '}
											All Available Donors In A+
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
									<NavLink to='/donor-profile/17/nannie-jude'>
										{' '}
										<h4 className='title'>Nannie Jude</h4>
									</NavLink>
									<span className='blood-group'>
										Blood Group: <strong>A+</strong>
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
									<NavLink to='/donor-profile/9/charles-beckham'>
										{' '}
										<h4 className='title'>Charles Beckham</h4>
									</NavLink>
									<span className='blood-group'>
										Blood Group: <strong>A+</strong>
									</span>
									<span className='total-donate'>
										Total Donate: <strong>1</strong> Times
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
									<NavLink to='/donor-profile/7/susan-shaw'>
										{' '}
										<h4 className='title'>Susan Shaw</h4>
									</NavLink>
									<span className='blood-group'>
										Blood Group: <strong>A+</strong>
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

export default Aposetive;
