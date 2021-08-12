import React from 'react';
import { NavLink } from 'react-router-dom';
import dp from './Donor.png';
import '../../containers/App.css';
import SearchBox from '../Home/SearchBox/SearchBox';

const Donors = () => {
	return (
		<div>
			<div className='breadcrumb-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='breadcrumb-inner'>
								<h2 className='page-title'>Donors</h2>
								<ul className='page-list'>
									<li>
										<NavLink to='/'>
											Home
										</NavLink>
									</li>
									<li>
										<NavLink to='/donor'>Donors</NavLink>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<SearchBox></SearchBox>

			{/* <!-- our dedicated team area start  --> */}
			<section className='dedicated-team-area padding-120 '>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-3 col-md-6'>
							<div className='single-donors-item margin-bottom-30'>
								<div className='thumb'>
									<img
										src={dp}
										alt='dp'
									/>
								</div>
								<div className='content'>
									<NavLink to='/profile/17/nannie-jude'>
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
									<NavLink to='/profile/16/donna-cessie'>
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
									<NavLink to='/profile/15/john-schroyer'>
										{' '}
										<h4 className='title'>John Schroyer</h4>
									</NavLink>
									<span className='blood-group'>
										Blood Group: <strong>B+</strong>
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
									<NavLink to='/profile/14/mark-sims'>
										{' '}
										<h4 className='title'>Mark Sims</h4>
									</NavLink>
									<span className='blood-group'>
										Blood Group: <strong>AB-</strong>
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
									<NavLink to='/profile/13/joseph-packson'>
										{' '}
										<h4 className='title'>
											Joseph Packson
										</h4>
									</NavLink>
									<span className='blood-group'>
										Blood Group: <strong>B-</strong>
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
									<NavLink to='/profile/11/richard-donahue'>
										{' '}
										<h4 className='title'>
											Richard Donahue
										</h4>
									</NavLink>
									<span className='blood-group'>
										Blood Group: <strong>AB+</strong>
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
									<NavLink to='/profile/10/ardelia-rice'>
										{' '}
										<h4 className='title'>Ardelia Rice</h4>
									</NavLink>
									<span className='blood-group'>
										Blood Group: <strong>B+</strong>
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
									<NavLink to='/profile/9/charles-beckham'>
										{' '}
										<h4 className='title'>
											Charles Beckham
										</h4>
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
								aria-label='Page navigation'
							>
								<nav>
									<ul className='pagination'>
										<li
											className='page-item disabled'
											ariaDisabled
											ariaLabel='&laquo; Previous'
										>
											<span
												className='page-link'
												ariaHidden
											>
												&lsaquo;
											</span>
										</li>

										<li
											className='page-item active'
											ariaCurrent='page'
										>
											<span className='page-link'>1</span>
										</li>
										<li className='page-item'>
											<NavLink
												className='page-link'
												to='/donors4658?page=2'
											>
												2
											</NavLink>
										</li>

										<li className='page-item'>
											<NavLink
												className='page-link'
												to='/donors4658?page=2'
												rel='next'
												aria-label='Next &raquo;'
											>
												&rsaquo;
											</NavLink>
										</li>
									</ul>
								</nav>
							</nav>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Donors;
