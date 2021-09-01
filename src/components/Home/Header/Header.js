import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderImg from './header-right-image-54545.png';
import './Header.css';


const Header = () => {
    return (
		<header className='header-area'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-lg-6'>
						<div className='left-content-area'>
							<h1 className='title'>Donate Blood To Save Life</h1>
							<p>
								BloodBank is a responsive blood bank and donor
								Content Management System (CMS). Agents can
								register and manage donors easily
							</p>
							<div className='btn-wrapper'>
								<NavLink to='/join-donor' className='boxed-btn'>
									Join Now
								</NavLink>
								<NavLink
									to='/contact'
									className='boxed-btn blank'
								>
									Contact Us
								</NavLink>
							</div>
						</div>
					</div>
					<div className='col-lg-6'>
						<div className='right-content-area'>
							<div className='img-wrapper'>
								<img
									src={HeaderImg}
									alt='Donate Blood To Save Life'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;