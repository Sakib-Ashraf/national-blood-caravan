import React from 'react';
import { NavLink } from 'react-router-dom'
// import './News.css';
import BGrid2 from './blog-grid-2.jpg';
import BGrid3 from './blog-grid-3.jpg';
import BGrid4 from './blog-grid-4.jpg';


const News = () => {
    return (
		<section className='news-area padding-120'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-lg-8'>
						<div className='section-title margin-bottom-60'>
							<h2 className='title'>News Update</h2>
							<span className='separator'></span>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-4 col-md-6'>
						<div className='single-new-item'>
							<div className='thumb'>
								<img
									src={BGrid4}
									alt='Subjects to ecstatic children  up as built match gravida'
								/>
							</div>
							<div className='content'>
								<span className='posted_by'>
									Posted By Sharifur
								</span>
								<h4 className='title'>
									<NavLink to='/blog/4/subjects-to-ecstatic-children-up-as-built-match-gravida'>
										Subjects to ecstatic children up as
										built match gravida
									</NavLink>
								</h4>
								<div className='description'>
									<p className='p1'>
										Lorem ipsum gravida nibh vel velit
										auctor aliquetn sollicitudirem
										quibibendum auci elit cons equat ipsutis
										sem nibh id elit. Duis sed odio sit amet
										nibh vulputate cursus a sit amet mauris.
										Morbi accumsan ipsum velit. Nam nec
										tellus...
									</p>
								</div>
								<NavLink to='/blog/4/subjects-to-ecstatic-children-up-as-built-match-gravida'
									className='readmore'
								>
									Read More
								</NavLink>
							</div>
						</div>
					</div>
					<div className='col-lg-4 col-md-6'>
						<div className='single-new-item'>
							<div className='thumb'>
								<img
									src={BGrid3}
									alt='Nam nec tellus sed odio sit amet nibh vulputate cursus'
								/>
							</div>
							<div className='content'>
								<span className='posted_by'>
									Posted By Sharifur
								</span>
								<h4 className='title'>
									<NavLink to='/blog/3/nam-nec-tellus-sed-odio-sit-amet-nibh-vulputate-cursus'>
										Nam nec tellus sed odio sit amet nibh
										vulputate cursus
									</NavLink>
								</h4>
								<div className='description'>
									<p>
										Lorem ipsum gravida nibh vel velit
										auctor aliquetn sollicitudirem
										quibibendum auci elit cons equat ipsutis
										sem nibh id elit. Duis sed odio sit amet
										nibh vulputate cursus a sit amet mauris.
										Morbi accumsan ipsum velit. Nam nec
										tellus sed odio sit amet nibh vulputate
										cursus a...
									</p>
								</div>
								<NavLink to='/blog/3/nam-nec-tellus-sed-odio-sit-amet-nibh-vulputate-cursus'
									className='readmore'
								>
									Read More
								</NavLink>
							</div>
						</div>
					</div>
					<div className='col-lg-4 col-md-6'>
						<div className='single-new-item'>
							<div className='thumb'>
								<img
									src={BGrid2}
									alt='Dejection agreeable attention set led offending'
								/>
							</div>
							<div className='content'>
								<span className='posted_by'>
									Posted By Sharifur
								</span>
								<h4 className='title'>
									<NavLink to='/blog/2/dejection-agreeable-attention-set-led-offending'>
										Dejection agreeable attention set led
										offending
									</NavLink>
								</h4>
								<div className='description'>
									<p>
										Lorem ipsum gravida nibh vel velit
										auctor aliquetn sollicitudirem
										quibibendum auci elit cons equat ipsutis
										sem nibh id elit. Duis sed odio sit amet
										nibh vulputate cursus a sit amet mauris.
										Morbi accumsan ipsum velit. Nam nec
										tellus sed odio sit amet nibh vulputate
										cursus a...
									</p>
								</div>
								<NavLink to='/blog/2/dejection-agreeable-attention-set-led-offending'
									className='readmore'
								>
									Read More
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default News;