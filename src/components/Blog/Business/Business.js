import React from 'react';
import { NavLink } from 'react-router-dom';
import bg1 from '../blog-grid-1.jpg';
import bg2 from '../blog-grid-2.jpg';
import bg3 from '../blog-grid-3.jpg';
import bg4 from '../blog-grid-4.jpg';
import '../../containers/App.css';

const Business = () => {
	return (
		<div>
			<div className='breadcrumb-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='breadcrumb-inner'>
								<h2 className='page-title'>
									{' '}
									Category: Business
								</h2>
								<ul className='page-list'>
									<li>
										<NavLink to='/'>Home</NavLink>
									</li>
									<li>
										<NavLink to='/catagory/business'>
											{' '}
											Category: Business
										</NavLink>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<section className='blog-content-area padding-120 '>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-8'>
							<div className='row'>
								<div className='col-lg-12'>
									<div className='alert alert-danger'>
										No Post Available In Business Category
									</div>
								</div>
							</div>
							<div className='col-lg-12'>
								<nav
									className='pagination-wrapper'
									aria-label='Page navigation '
								></nav>
							</div>
						</div>
						<div className='col-lg-4'>
							<div className='widget-area'>
								<div className='widget widget_search'>
									<form
										action='/blog/search'
										method='get'
										className='search-form'
									>
										<div className='form-group'>
											<input
												type='text'
												className='form-control'
												name='search'
												placeholder='Search'
											/>
										</div>
										<button
											className='submit-btn'
											type='submit'
										>
											<i className='fa fa-search'></i>
										</button>
									</form>
								</div>
								<div className='widget widget_nav_menu'>
									<h3 className='widget-title'>Category</h3>
									<ul>
										<li>
											<NavLink to='../5/industry'>
												Industry
											</NavLink>
										</li>
										<li>
											<NavLink to='../3/consulting'>
												Consulting
											</NavLink>
										</li>
										<li>
											<NavLink to='../2/finance'>
												Finance
											</NavLink>
										</li>
										<li>
											<NavLink to='business'>
												Business
											</NavLink>
										</li>
									</ul>
								</div>
								<div className='widget widget_recent_posts'>
									<h4 className='widget-title'>
										Recent Post
									</h4>
									<ul className='recent_post_item'>
										<li className='single-recent-post-item'>
											<div className='thumb'>
												<img
													src={bg4}
													alt='Subjects to ecstatic children  up as built match gravida'
												/>
											</div>
											<div className='content'>
												<h4 className='title'>
													<NavLink to='../../4/subjects-to-ecstatic-children-up-as-built-match-gravida'>
														Subjects to ecstatic
														children up as built
														match gravida
													</NavLink>
												</h4>
												<span className='time'>
													<i className='fa fa-calendar'></i>{' '}
													1 year ago
												</span>
											</div>
										</li>
										<li className='single-recent-post-item'>
											<div className='thumb'>
												<img
													src={bg3}
													alt='Nam nec tellus sed odio sit amet nibh vulputate cursus'
												/>
											</div>
											<div className='content'>
												<h4 className='title'>
													<NavLink to='../../3/nam-nec-tellus-sed-odio-sit-amet-nibh-vulputate-cursus'>
														Nam nec tellus sed odio
														sit amet nibh vulputate
														cursus
													</NavLink>
												</h4>
												<span className='time'>
													<i className='fa fa-calendar'></i>{' '}
													1 year ago
												</span>
											</div>
										</li>
										<li className='single-recent-post-item'>
											<div className='thumb'>
												<img
													src={bg2}
													alt='Dejection agreeable attention set led offending'
												/>
											</div>
											<div className='content'>
												<h4 className='title'>
													<NavLink to='../../2/dejection-agreeable-attention-set-led-offending'>
														Dejection agreeable
														attention set led
														offending
													</NavLink>
												</h4>
												<span className='time'>
													<i className='fa fa-calendar'></i>{' '}
													1 year ago
												</span>
											</div>
										</li>
										<li className='single-recent-post-item'>
											<div className='thumb'>
												<img
													src={bg1}
													alt='In show dull give need so held her gay style wrote'
												/>
											</div>
											<div className='content'>
												<h4 className='title'>
													<NavLink to='../../1/in-show-dull-give-need-so-held-her-gay-style-wrote'>
														In show dull give need
														so held her gay style
														wrote
													</NavLink>
												</h4>
												<span className='time'>
													<i className='fa fa-calendar'></i>{' '}
													1 year ago
												</span>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Business;
