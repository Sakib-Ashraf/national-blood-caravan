import React from 'react';
import '../../containers/App.css';

const Profile = () => {
	return (
		<section>
			<div class='breadcrumb-area'>
				<div class='container'>
					<div class='row'>
						<div class='col-lg-12'>
							<div class='breadcrumb-inner'>
								<h2 class='page-title'>Donor Details</h2>
								<ul class='page-list'>
									<li>
										<a href='https://nationalbloodcaravan.com/home'>
											Home
										</a>
									</li>
									<li>
										<a href='https://nationalbloodcaravan.com/profile'>
											Donor Details
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class='donor-dashboard-page-content padding-120'>
				<div class='container'>
					<div class='row'>
						<div class='col-lg-12'></div>
						<div class='col-lg-4'>
							<div class='donor-sidebar'>
								<div class='profile-img'>
									<img
										src='../../assets/uploads/donors/donor-pic-5.jpg'
										alt='James Long'
									/>
								</div>
								<div class='donor-info'>
									<h4 class='username'> James Long</h4>
									<div class='btn-wrapper'>
										<a
											href='#donor_contact'
											data-toggle='modal'
											data-target='#donor_contact'
											class='boxed-btn'
										>
											Contact
										</a>
									</div>
								</div>
							</div>
						</div>
						<div class='col-lg-8'>
							<div class='donor-content-area'>
								<h2 class='title'>Donor Profile</h2>
								<ul>
									<li>
										<strong>Birth Date: </strong>{' '}
										<span class='right'>1972-01-17</span>
									</li>
									<li>
										<strong>Blood Group: </strong>{' '}
										<span class='right'>O+</span>
									</li>
									<li>
										<strong>Total Blood Donate: </strong>{' '}
										<span class='right'>1 Times</span>
									</li>
									<li>
										<strong>Mobile: </strong>{' '}
										<span class='right'>949-860-7949</span>
									</li>
									<li>
										<strong>Gender: </strong>{' '}
										<span class='right'>Male</span>
									</li>
									<li>
										<strong>Address: </strong>{' '}
										<span class='right'>
											905 Hillcrest Lane Los Angeles, CA
											90017
										</span>
									</li>
									<li>
										<strong>Area: </strong>{' '}
										<span class='right'>New Mexico</span>
									</li>
									<li>
										<strong>Last Donate Date: </strong>{' '}
										<span class='right'>12/06/2019</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				class='modal fade'
				id='donor_contact'
				tabindex='-1'
				role='dialog'
				aria-hidden='true'
			>
				<div class='modal-dialog' role='document'>
					<div class='modal-content'>
						<div class='modal-header'>
							<h5 class='modal-title' id='exampleModalLabel'>
								Contact With Donor
							</h5>
							<button
								type='button'
								class='close'
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
							<div class='modal-body'>
								<input
									type='hidden'
									name='_token'
									value='0FuC0bAIo7Kb9co0XcJC5BNiYMnAMR8bvWIKq1k4'
								/>{' '}
								<input type='hidden' name='user_id' value='5' />
								<div class='form-group'>
									<label for='subject'>Subject</label>
									<input
										type='text'
										name='subject'
										id='subject'
										class='form-control'
										placeholder='Subject'
									/>
								</div>
								<div class='form-group'>
									<label for='email'>Email</label>
									<input
										type='text'
										name='email'
										id='email'
										class='form-control'
										placeholder='Email'
									/>
								</div>
								<div class='form-group'>
									<textarea
										name='message'
										id='message'
										class='form-control max-height-150'
										cols='30'
										rows='10'
										placeholder='Message'
									></textarea>
								</div>
							</div>
							<div class='modal-footer'>
								<button
									type='button'
									class='btn btn-secondary'
									data-dismiss='modal'
								>
									Close
								</button>
								<button type='submit' class='btn btn-primary'>
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
