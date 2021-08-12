import React from 'react';
import '../../../../containers/App.css';
import dp from '../../../Donors/Donor.png';
import { NavLink } from 'react-router-dom';

const ABnegetive = () => {
	return (
		<>
			<div class='breadcrumb-area'>
				<div class='container'>
					<div class='row'>
						<div class='col-lg-12'>
							<div class='breadcrumb-inner'>
								<h2 class='page-title'>
									{' '}
									All Available Donors In AB-
								</h2>
								<ul class='page-list'>
									<li>
										<NavLink to='/'>Home</NavLink>
									</li>
									<li>
										<NavLink to='/ab-'>
											{' '}
											All Available Donors In AB-
										</NavLink>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<section class='dedicated-team-area padding-120 '>
				<div class='container'>
					<div class='row'>
						<div class='col-lg-12'></div>
						<div class='col-lg-3 col-md-6'>
							<div class='single-donors-item margin-bottom-30'>
								<div class='thumb'>
									<img
										src={dp}
										alt='dp'
									/>
								</div>
								<div class='content'>
									<NavLink to='/donor-profile/14/mark-sims'>
										{' '}
										<h4 class='title'>Mark Sims</h4>
									</NavLink>
									<span class='blood-group'>
										Blood Group: <strong>AB-</strong>
									</span>
									<span class='total-donate'>
										Total Donate: <strong>0</strong> Times
									</span>
								</div>
							</div>
						</div>
						<div class='col-lg-12'>
							<nav
								class='pagination-wrapper'
								ariaLabel='Page navigation '
							></nav>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ABnegetive;
