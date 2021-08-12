import React from 'react';
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
										<a href='https://xgenious.com/laravel/weforyou'>
											Home
										</a>
									</li>
									<li>
										<a href='volunteer.html'>
											{' '}
											Our Volunteer
										</a>
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
