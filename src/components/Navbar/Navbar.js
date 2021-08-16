import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './logo3.png';

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
							<li className='menu-btn'>
								<NavLink to='/join-donor'>
									Join as Donor
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
