import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Logo from './logo3.webp';
import './Navigation.css';
import auth from '../Auth/auth';

class Navigation extends Component {
	render() {
		const { id, name, blood_group } = this.props.loginProfile;
		return (
			<Navbar
				collapseOnSelect
				expand='lg'
				className='navbar navbar-area navbar-expand-lg'
			>
				<div className='container nav-container'>
					<Navbar.Brand className='logo-wrapper'>
						<NavLink to='/' className='logo' exact>
							<img src={Logo} alt='site logo' />
						</NavLink>
					</Navbar.Brand>
					<Navbar.Toggle
						aria-controls='responsive-navbar-nav'
					/>
					<Navbar.Collapse
						className='collapse navbar-collapse'
						id='main_menu responsive-navbar-nav'
					>
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

							{auth.isAuthenticated() ? (
								<li className='menu-item-has-children'>
									<NavLink
										to={
											blood_group
												? `/donor-dashboard/${id}/${name}`
												: `/user-dashboard/${id}/${name}`
										}
									>
										{name}
									</NavLink>
									<ul className='sub-menu'>
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
										{blood_group ? (
											<li>
												<NavLink to='/register'>
													Join As User
												</NavLink>
											</li>
										) : (
											<li>
												<NavLink to='/join-donor'>
													Join As Donor
												</NavLink>
											</li>
										)}
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
									</ul>
								</li>
							) : (
								<li className='menu-btn'>
									<NavLink to='/join-donor'>
										Join as Donor
									</NavLink>
								</li>
							)}
						</ul>
					</Navbar.Collapse>
				</div>
			</Navbar>
		);
	}
}

export default Navigation;
