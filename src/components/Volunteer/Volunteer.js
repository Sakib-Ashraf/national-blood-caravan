import React from 'react';
import { NavLink } from 'react-router-dom';
import Volunteers from '../Home/Volunteers/Volunteers';
import '../../containers/App.css';

const Volunteer = () => {
	return (
		<div>
			<div className='breadcrumb-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='breadcrumb-inner'>
								<h2 className='page-title'> Our Volunteer</h2>
								<ul className='page-list'>
									<li>
										<NavLink to='/'>
											Home
										</NavLink>
									</li>
									<li>
										<NavLink to='/volunteer'>
											{' '}
											Our Volunteer
										</NavLink>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
            </div>
            <Volunteers/>
		</div>
	);
};

export default Volunteer;
