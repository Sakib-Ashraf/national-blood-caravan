import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './logo3.png';
import auth from '../Auth/auth';

class Navbar extends Component {
	render() {
		return (
			<nav className='navbar navbar-area navbar-expand-lg'>
				<div className='container nav-container'>
					<div className='responsive-mobile-menu'>
						<div className='logo-wrapper'>
							<NavLink to='/' className='logo' exact>
								<img src={Logo} alt='site logo' />
							</NavLink>
						</div>
						<button
							className='navbar-toggler'
							type='button'
							data-toggle='collapse'
							data-target='#main_menu'
							aria-expanded='false'
							aria-label='Toggle navigation'
						>
							<span className='navbar-toggler-icon'></span>
						</button>
					</div>
					<div className='collapse navbar-collapse' id='main_menu'>
						<ul className='navbar-nav'>
							<li className=''>
								<NavLink
									to='/'
									activeStyle={{ color: '#E83530' }}
									exact
								>
									Home
								</NavLink>
							</li>
							<li className=''>
								<NavLink
									to='/about'
									activeStyle={{ color: '#E83530' }}
									exact
								>
									About
								</NavLink>
							</li>
							<li className=''>
								<NavLink
									to='/volunteer'
									activeStyle={{ color: '#E83530' }}
									exact
								>
									Volunteer
								</NavLink>
							</li>
							<li className=''>
								<NavLink
									to='/donors'
									activeStyle={{ color: '#E83530' }}
									exact
								>
									Donors
								</NavLink>
							</li>
							<li className=''>
								<NavLink
									to='/blog'
									activeStyle={{ color: '#E83530' }}
									exact
								>
									Blog
								</NavLink>
							</li>
							<li className=''>
								<NavLink
									to='/contact'
									activeStyle={{ color: '#E83530' }}
									exact
								>
									Contact
								</NavLink>
							</li>

							{auth.isAuthenticated()?(<li className='menu-item-has-children'>
								<NavLink to=''>
									Sakib_Ashraf
								</NavLink>
								<ul className='sub-menu'>
									<li>
										<NavLink to='/user-dashboard'>
											Dashboard
										</NavLink>
									</li>
									<li>
										<NavLink to='/user-edit-profile'>
											Edit Profile
										</NavLink>
									</li>
									<li>
										<NavLink to='/user-change-password'>
											Change Password
										</NavLink>
									</li>
									<li>
										<NavLink to='/join-donor'>
											Join As Donor
										</NavLink>
									</li>
									<li>
										<NavLink
											to='/'
											onClick={() => {
												auth.logout(() => {
													this.props.routerProps.history.push(
														'/'
													);
												});
											}}
										>
											Logout
										</NavLink>
									</li>
									<form
										id='logout-form'
										action='/logout'
										method='POST'
										style={{ display: 'none' }}
									>
										<input
											type='hidden'
											name='_token'
											value='sQwPxV15RmeuaCrE21fHEtoX47NZffqzxq3LXrsZ'
										/>{' '}
									</form>
								</ul>
							</li>)
							:(<li className='menu-btn'>
								<NavLink to='/join-donor'>
									Join as Donor
								</NavLink>
							</li>)}
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
