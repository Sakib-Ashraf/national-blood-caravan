import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../containers/App.css';
import dp from './Donor.png';


const initialState = {
	id: '',
	name: '',
	email: '',
	joined: '',
	blood_group: '',
	age: '',
	mobile: '',
	gender: '',
	address: '',
	area: '',
	activation_date: '',
	donated: '',
	last_donate_date: '',
};


class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = initialState;
	}

	componentWillUnmount() {
		this.setState(initialState);
	}

	

	render() {
		const {
			name,
			email,
			joined,
			blood_group,
			age,
			mobile,
			gender,
			address,
			area,
			donated,
			last_donate_date
		} = this.props.donorProfile;
		return (
			<section>
				<div className='breadcrumb-area'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='breadcrumb-inner'>
									<h2 className='page-title'>
										Donor Details
									</h2>
									<ul className='page-list'>
										<li>
											<NavLink to='/'>Home</NavLink>
										</li>
										<li>
											<NavLink to='/donors/profile/:id/:name'>
												Donor Details
											</NavLink>
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
										<img src={dp} alt={name} />
									</div>
									<div className='donor-info'>
										<h4 className='username'> {name}</h4>
										<div className='btn-wrapper'>
											<a
												href='/donor_contact'
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
											<strong>Age: </strong>{' '}
											<span className='right'>{age}</span>
										</li>
										<li>
											<strong>Blood Group: </strong>{' '}
											<span className='right'>
												{blood_group}
											</span>
										</li>
										<li>
											<strong>
												Total Blood Donate:{' '}
											</strong>{' '}
											<span className='right'>
												{this.state.donated
													? this.state.donated
													: donated}{' '}
												Times
											</span>
										</li>
										<li>
											<strong>Mobile: </strong>{' '}
											<span className='right'>
												{mobile}
											</span>
										</li>
										<li>
											<strong>Email: </strong>{' '}
											<span className='right'>
												{email}
											</span>
										</li>
										<li>
											<strong>Gender: </strong>{' '}
											<span className='right'>
												{gender}
											</span>
										</li>
										<li>
											<strong>Address: </strong>{' '}
											<span className='right'>
												{address}
											</span>
										</li>
										<li>
											<strong>Area: </strong>{' '}
											<span className='right'>
												{area}
											</span>
										</li>
										<li>
											<strong>Last Donate Date: </strong>{' '}
											<span className='right'>
												{this.props.dateConverter(
													this.state.last_donate_date
														? this.state
																.last_donate_date
														: last_donate_date
												)}
											</span>
										</li>
										<li>
											<strong>Joining Date: </strong>{' '}
											<span className='right'>
												{this.props.dateConverter(
													joined
												)}
											</span>
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
					tab-index='1'
					role='dialog'
					aria-hidden
				>
					<div className='modal-dialog' role='document'>
						<div className='modal-content'>
							<div className='modal-header'>
								<h5
									className='modal-title'
									id='exampleModalLabel'
								>
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
							<form action='/donor-contact' method='post'>
								<div className='modal-body'>
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
											cols='30'
											rows='10'
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
									<button
										type='submit'
										className='btn boxed-btn btn-primary'
									>
										Send Mail
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Profile;
