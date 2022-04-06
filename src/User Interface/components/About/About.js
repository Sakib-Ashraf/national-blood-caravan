import React from 'react';
import { NavLink } from 'react-router-dom';
import aboutUsImg from './about-us-image-917787.webp';
import whyDonateImg from './why-donate-image-666440.webp';
import Volunteers from '../Home/Volunteers/Volunteers';
import Counter from '../Home/Counter/Counter';
import Testimonial from '../Home/Testimonial/Testimonial';
import '../../containers/App.css';
import './About.css';


const About = () => {
	return (
		<>
			<div className='breadcrumb-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='breadcrumb-inner'>
								<h2 className='page-title'>About us</h2>
								<ul className='page-list'>
									<li>
										<NavLink to='/'>
											Home
										</NavLink>
									</li>
									<li>
										<NavLink to='/about'>About us</NavLink>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='about-us-content padding-120'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-6'>
							<div className='left-content-area'>
								<p>
									<span className='span1'>
										Few Words About who we are and what we
										do
									</span>
								</p>
								<p className='span1p'>
									Lorem ipsum dolorsit amet consectetur
									adipisicing elit. A atque aliquam pariatur
									accusantium nostrum eos sapiente sequi culpa
									perspiciatis consequuntur, sint error.
									Mollitia placeat in dolor illo tenetur
									nostrum. Repellat.
								</p>
								<p className='span1p'>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. A atque aliquam pariatur
									accusantium nostrum eos sapiente sequi culpa
									perspiciatis consequuntur, sint error.
									Mollitia placeat in dolor illo tenetur
									nostrum. Repellat.
								</p>
								<p>
									<br />
								</p>
							</div>
						</div>
						<div className='col-lg-6'>
							<div className='right-content-area'>
								<div className='img-wrapper'>
									<img
										className='img'
										src={aboutUsImg}
										alt=''
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className='why-donate-blood-area gray-bg padding-120'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-lg-8'>
							<div className='section-title margin-bottom-60'>
								<h2 className='title'>Why You Should Donate</h2>
								<span className='separator'></span>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-5'>
							<div className='img-wrapper'>
								<img
									className='img'
									src={whyDonateImg}
									alt=''
								/>
							</div>
						</div>
						<div className='col-lg-6'>
							<div className='right-content-area'>
								<div>
									<h4 className='title'>
										<span className='span'>
											Donating blood regularly is
											benefical to prevent and reduce
											heart attacks and liver ailment. The
											risk of heart and liver related
											problem is caused by the iron
											overload in the body.
										</span>
									</h4>
									<h4 className='title'>
										2. Lower the risk of cancer
									</h4>
									<p className='title'>
										<span className='span'>
											Cancer is the most feared and deadly
											disease. Blood donation help in
											lowering the risk of cancer by
											donating blood regularly the iron
											level in the blood is bananced and
											the risk of cancer.
										</span>
									</p>
									<h4 className='title'>
										3. Speeds up healing process
									</h4>
									<p className='title'>
										<span className='span'>
											The body tries to adjust to the loss
											of blood the cells we donate blood
											these adjustments also help in
											accelerating the wound healing
											process.
										</span>
										<br />
									</p>
									<p className='title'>
										<br />
									</p>
									<p className='title'>
										<br />
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Volunteers></Volunteers>
			<Counter></Counter>
			<Testimonial></Testimonial>
		</>
	);
};

export default About;
