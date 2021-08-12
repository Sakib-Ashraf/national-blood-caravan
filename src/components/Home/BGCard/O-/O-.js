import React from 'react';
import '../../../../containers/App.css';
import dp from '../../../Donors/Donor.png';
import { NavLink } from 'react-router-dom';

const Onegetive = () => {
    return (
		<>
			<div class='breadcrumb-area'>
				<div class='container'>
					<div class='row'>
						<div class='col-lg-12'>
							<div class='breadcrumb-inner'>
								<h2 class='page-title'>
									{' '}
									All Available Donors In O-
								</h2>
								<ul class='page-list'>
									<li>
										<NavLink to='/'>
											Home
										</NavLink>
									</li>
									<li>
										<NavLink to='/o-'>
											{' '}
											All Available Donors In O-
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
						<div class='col-lg-12'>
							<div class='col-lg-12'>
								<div class='alert alert-danger'>
									Sorry No O- Group Donor Available !!
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

export default Onegetive;