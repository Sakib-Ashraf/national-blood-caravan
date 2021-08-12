import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "./logo3.png";

const currentMenuItem = () => {
            const listItems = document.querySelectorAll('.current-menu-item');
            listItems.forEach((listItem) => {
                listItem.classList.remove('current-menu-item');
            });
        };
class Navbar extends Component {

    
    
    currentItemToggler(event) {
        currentMenuItem();
        event.target.parentElement.classList.add('current-menu-item');
    }


    render() {
        return (
			<nav className='navbar navbar-area navbar-expand-lg'>
				<div className='container nav-container'>
					<div className='responsive-mobile-menu'>
						<div className='logo-wrapper'>
							<NavLink to='/' className='logo'>
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
							<li className='current-menu-item'>
								<NavLink to='/'>Home</NavLink>
							</li>
							<li className=''>
								<NavLink
									to='/about'
									onClick={this.currentItemToggler}
								>
									About
								</NavLink>
							</li>
							<li className=''>
								<NavLink
									to='/volunteer'
									onClick={this.currentItemToggler}
								>
									Volunteer
								</NavLink>
							</li>
							<li className=''>
								<NavLink
									to='/donors'
									onClick={this.currentItemToggler}
								>
									Donors
								</NavLink>
							</li>
							<li className=''>
								<NavLink
									to='/blog'
									onClick={this.currentItemToggler}
								>
									Blog
								</NavLink>
							</li>
							<li className=''>
								<NavLink
									to='/contact'
									onClick={this.currentItemToggler}
								>
									Contact
								</NavLink>
							</li>
							<li className='menu-btn'>
								<NavLink
									to='/join-donor'
									onClick={currentMenuItem}
								>
									Join as Donor
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
    }
};

export default Navbar;