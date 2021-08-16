import React from 'react';
import TP from './testimonial.png';
import OwlCarousel from 'react-owl-carousel';
import {options1} from '../../../containers/OwlCarouselOptions';

const Testimonial = () => {
    return (
		<div className='testimonial-area padding-120'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-lg-8'>
						<div className='section-title margin-bottom-60'>
							<h2 className='title'>What People Say&#039;s</h2>
							<span className='separator'></span>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-12'>
						<OwlCarousel
							className='testimonial-carousel owl-carousel'
							{...options1}
						>
							<div className='single-testimonial-item'>
								<div className='thumb'>
									<img src={TP} alt='Javier Jeffery' />
								</div>
								<div className='content'>
									<p>
										So we me unknown as improve hastily
										sitting forming. Especially favourable
										compliment but thoroughly unreserved saw
										she themselves.
									</p>
									<div className='author-meta'>
										<div className='ratings'>
											<i className='fas fa-star'></i>
											<i className='fas fa-star'></i>
											<i className='fas fa-star'></i>
											<i className='fas fa-star'></i>
											<i className='fas fa-star'></i>
										</div>
										<h4 className='title'>
											Javier Jeffery
										</h4>
										<span className='designation'>
											Founder
										</span>
									</div>
								</div>
							</div>
							<div className='single-testimonial-item'>
								<div className='thumb'>
									<img src={TP} alt='David Barnes' />
								</div>
								<div className='content'>
									<p>
										So we me unknown as improve hastily
										sitting forming. Especially favourable
										compliment but thoroughly unreserved saw
										she themselves.
									</p>
									<div className='author-meta'>
										<div className='ratings'>
											<i className='fas fa-star'></i>
											<i className='fas fa-star'></i>
											<i className='fas fa-star'></i>
											<i className='fas fa-star'></i>
											<i className='fas fa-star'></i>
										</div>
										<h4 className='title'>David Barnes</h4>
										<span className='designation'>CEO</span>
									</div>
								</div>
							</div>
							<div className='single-testimonial-item'>
								<div className='thumb'>
									<img src={TP} alt='Victor Ryan' />
								</div>
								<div className='content'>
									<p>
										So we me unknown as improve hastily
										sitting forming. Especially favourable
										compliment but thoroughly unreserved saw
										she themselves.
									</p>
									<div className='author-meta'>
										<div className='ratings'>
											<i className='fas fa-star'></i>
											<i className='fas fa-star'></i>
											<i className='fas fa-star'></i>
											<i className='fas fa-star'></i>
											<i className='fas fa-star'></i>
										</div>
										<h4 className='title'>Victor Ryan</h4>
										<span className='designation'>
											Founder
										</span>
									</div>
								</div>
							</div>
						</OwlCarousel>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;