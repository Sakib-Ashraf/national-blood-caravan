import React from 'react';
import '../../containers/App.css';

const Profile = () => {
	return (
		<section>
			<div className='breadcrumb-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='breadcrumb-inner'>
								<h2 className='page-title'>Donor Details</h2>
								<ul className='page-list'>
									<li>
										<a href='/'>
											Home
										</a>
									</li>
									<li>
										<a href='/profile'>
											Donor Details
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='donor-dashboard-page-content padding-120'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'></div>
						<div className='col-lg-4'>
							<div className='donor-sidebar'>
								<div className='profile-img'>
									<img
										src='../../assets/uploads/donors/donor-pic-5.jpg'
										alt='James Long'
									/>
								</div>
								<div className='donor-info'>
									<h4 className='username'> James Long</h4>
									<div className='btn-wrapper'>
										<a
											href='#donor_contact'
											data-toggle='modal'
											data-target='#donor_contact'
											className='boxed-btn'
										>
											Contact
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className='col-lg-8'>
							<div className='donor-content-area'>
								<h2 className='title'>Donor Profile</h2>
								<ul>
									<li>
										<strong>Birth Date: </strong>{' '}
										<span className='right'>1972-01-17</span>
									</li>
									<li>
										<strong>Blood Group: </strong>{' '}
										<span className='right'>O+</span>
									</li>
									<li>
										<strong>Total Blood Donate: </strong>{' '}
										<span className='right'>1 Times</span>
									</li>
									<li>
										<strong>Mobile: </strong>{' '}
										<span className='right'>949-860-7949</span>
									</li>
									<li>
										<strong>Gender: </strong>{' '}
										<span className='right'>Male</span>
									</li>
									<li>
										<strong>Address: </strong>{' '}
										<span className='right'>
											905 Hillcrest Lane Los Angeles, CA
											90017
										</span>
									</li>
									<li>
										<strong>Area: </strong>{' '}
										<span className='right'>New Mexico</span>
									</li>
									<li>
										<strong>Last Donate Date: </strong>{' '}
										<span className='right'>12/06/2019</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className='modal fade'
				id='donor_contact'
				tabIndex-1
				role='dialog'
				aria-hidden
			>
				<div className='modal-dialog' role='document'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='exampleModalLabel'>
								Contact With Donor
							</h5>
							<button
								type='button'
								className='close'
								data-dismiss='modal'
								aria-label='Close'
							>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
						<form
							action='https://nationalbloodcaravan.com/donor-contact'
							method='post'
						>
							<div className='modal-body'>
								<input
									type='hidden'
									name='_token'
									value='0FuC0bAIo7Kb9co0XcJC5BNiYMnAMR8bvWIKq1k4'
								/>{' '}
								<input type='hidden' name='user_id' value='5' />
								<div className='form-group'>
									<label htmlFor='subject'>Subject</label>
									<input
										type='text'
										name='subject'
										id='subject'
										className='form-control'
										placeholder='Subject'
									/>
								</div>
								<div className='form-group'>
									<label htmlFor='email'>Email</label>
									<input
										type='text'
										name='email'
										id='email'
										className='form-control'
										placeholder='Email'
									/>
								</div>
								<div className='form-group'>
									<textarea
										name='message'
										id='message'
										className='form-control max-height-150'
										cols-30
										rows-10
										placeholder='Message'
									></textarea>
								</div>
							</div>
							<div className='modal-footer'>
								<button
									type='button'
									className='btn btn-secondary'
									data-dismiss='modal'
								>
									Close
								</button>
								<button type='submit' className='btn btn-primary'>
									Send Mail
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Profile;
