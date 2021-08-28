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
	disablerValue: '',
};

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = initialState;
		
	}
	componentWillUnmount() {
		this.setState(initialState);
	}

	componentDidMount() {
		this.setState({
			id: this.props.donorProfile.id,
			name: this.props.donorProfile.name,
			email: this.props.donorProfile.email,
			joined: this.props.donorProfile.joined,
			blood_group: this.props.donorProfile.blood_group,
			age: this.props.donorProfile.age,
			mobile: this.props.donorProfile.mobile,
			gender: this.props.donorProfile.gender,
			address: this.props.donorProfile.address,
			area: this.props.donorProfile.area,
			activation_date: this.props.donorProfile.activation_date,
			donated: this.props.donorProfile.donated,
			last_donate_date: this.props.donorProfile.last_donate_date,
			disablerValue: this.props.donorProfile.disablerValue,
		});
		console.log(this.props.dateConverter(this.state.activation_date));
	}

	AdderFunc = () => {
		let addDays = function (days) {
			const date = new Date();
			date.setDate(date.getDate() + days);
			return date;
		};
		return addDays(90);
	};

	difference_calc = () => {
		let date1 = new Date();
		let date2 = new Date(this.state.activation_date);

		// To calculate the time difference of two dates
		let Difference_In_Time = date2.getTime() - date1.getTime();

		// To calculate the no. of days between two dates
		let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

		let final = Math.ceil(Difference_In_Days);
		return final;
	};

	last_donate_date = () => {
		let date = new Date();
		let formattedTime =
			date.getFullYear() +
			'-0' +
			(date.getMonth() + 1) +
			'-' +
			date.getDate();
		return formattedTime;
	};

	executer = () => {
		this.setState({
			activation_date: this.props.dateConverter(this.AdderFunc()),
			disablerValue: true,
			last_donate_date: this.last_donate_date(),
		});
		console.log(this.state.activation_date);
		this.onUpdateProfile();
	};

	onUpdateProfile = () => {
		fetch(
			`http://localhost:3300/donors/profile/update/${this.props.donorProfile.id}`,
			{
				method: 'put',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					activation_date: this.state.activation_date,
					last_donate_date: this.state.last_donate_date,
					disablerValue: this.state.disablerValue,
				}),
			}
		)
			.then((response) => response.json())
			.then((profileData) => {
				if (profileData.id) {
					console.log(profileData);
					this.props.loadDonorProfile(profileData);
				}
			})
			.catch((err) => console.log(err));
	};

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
			last_donate_date,
			disablerValue,
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
										<li className='btn-wrapper'>
											<strong>
												<button
													style={{
														padding: '0.5rem 1rem',
													}}
													onClick={this.executer}
													className='boxed-btn btn'
													disabled={
														this.state.disablerValue
															? this.state
																	.disablerValue
															: disablerValue
													}
												>
													Donated Today
												</button>{' '}
											</strong>
											<span className='right'>
												{this.difference_calc() >= 0
													? this.difference_calc()
													: '00 '}{' '}
												Day remaining!
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
									<input
										type='hidden'
										name='_token'
										value='0FuC0bAIo7Kb9co0XcJC5BNiYMnAMR8bvWIKq1k4'
									/>{' '}
									<input
										type='hidden'
										name='user_id'
										value='5'
									/>
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
