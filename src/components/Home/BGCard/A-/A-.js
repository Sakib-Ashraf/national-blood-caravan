import React from 'react';
import '../../../../containers/App.css';
import dp from '../../../Donors/Donor.png';
import { NavLink } from 'react-router-dom';

const Anegetive = () => {
	return (
		<>
			<div className='breadcrumb-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='breadcrumb-inner'>
								<h2 className='page-title'>
									{' '}
									All Available Donors In A-
								</h2>
								<ul className='page-list'>
									<li>
										<NavLink to='/'>Home</NavLink>
									</li>
									<li>
										<NavLink to='/a-'>
											{' '}
											All Available Donors In A-
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
						<div className='col-lg-12'>
							<div className='col-lg-12'>
								<div className='alert alert-danger'>
									Sorry No A- Group Donor Available !!
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

export default Anegetive;
