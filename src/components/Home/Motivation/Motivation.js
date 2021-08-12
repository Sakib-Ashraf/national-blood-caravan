import React from 'react';
import './Motivation.css';
import HealthBenifitImg1 from './health-benefit-one-39566.png';
import HealthBenifitImg2 from './health-benefit-two-76075.png';

const Motivation = () => {
    return (
		<section className='benefit-of-donation-area  gray-bg padding-top-120 padding-bottom-60'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-12'>
						<div className='single-benefit-item'>
							<div className='left-content-area'>
								<h3 className='Motivetitle'>
									The Health Benefits of Donating Blood
								</h3>
								<p>
									<span>
										A blood transfusion can be a life saving
										treatment for patients with cancer,
										patients undergoing surgery, children
										with severe anaemia, women who have
										complications
									</span>
									<br />
								</p>
								<ul className='benifit-list'>
									<li>Reduce harmful iron stores.</li>
									<li className='li'>
										Preserve card ovascular health.
									</li>
									<li className='li'>
										Reduce the risk cancer.
									</li>
									<li className='li'>
										Give you a sense of pride.
									</li>
									<li className='li'>Free blood analysis.</li>
								</ul>
							</div>
							<div className='right-content-area'>
								<div className='img-wrapper'>
									<img src={HealthBenifitImg1} alt='' />
								</div>
							</div>
						</div>
						<div className='single-benefit-item'>
							<div className='left-content-area'>
								<h3 className='title'>
									Recovery and Time Between Donations.
								</h3>
								<p>
									<span>
										A blood transfusion can be a life saving
										treatment for patients with cancer,
										patients undergoing surgery, children
										with severe anaemia, women who have
										complications
									</span>
									<span>
										<br />
									</span>
								</p>
								<p>
									<span>
										You must wait at least eight weeks (56
										days) between donations of whole blood
										and 16 weeks (112 days) betwen power Red
										donations Platelet apheresis donor may
										give every 7 days up to 24 times per
										year after a donation. Most peoples
										haemoglobin levels are back to normal
										after 6 to 12 weeks.
									</span>
								</p>
							</div>
							<div className='right-content-area'>
								<div className='img-wrapper'>
									<img src={HealthBenifitImg2} alt='' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Motivation;