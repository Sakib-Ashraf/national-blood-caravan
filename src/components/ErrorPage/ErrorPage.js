import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../containers/App.css';


const ErrorPage = () => {
    return (
		<section>
			<div
				className='breadcrumb-area'
			>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='breadcrumb-inner'>
								<h2 className='page-title'> 404</h2>
								<ul className='page-list'>
									<li>
										<NavLink to='/'>
											Home
										</NavLink>
									</li>
									<li>
										<NavLink to='*'> 404</NavLink>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='error-page-content padding-120'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-lg-8'>
							<div className='error-area'>
								<h1 className='title'>404</h1>
								<p>
									It looks like nothing was found at this
									location.
								</p>
								<div className='btn-wrapper'>
									<NavLink
										to='/'
										className='boxed-btn'
									>
										Back To Home
									</NavLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ErrorPage;