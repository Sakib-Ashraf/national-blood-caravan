import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../containers/App.css';
import dp from './Donor.png';


class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			time: {},
			seconds: 7776000,
			clicks: 0,
			LastDonateDate: '',
			disablerValue: false,
		};
		this.timer = 0;
		this.startTimer = this.startTimer.bind(this);
		this.countDown = this.countDown.bind(this);
	}

	secondsToTime(secs) {
		let day = Math.floor(secs / 86400);
		let hours = Math.floor(secs / 324000);

		let divisor_for_minutes = secs % 3600;
		let minutes = Math.floor(divisor_for_minutes / 60);

		let divisor_for_seconds = divisor_for_minutes % 60;
		let seconds = Math.ceil(divisor_for_seconds);

		let obj = {
			days: day,
			hours: hours,
			minutes: minutes,
			seconds: seconds,
		};
		return obj;
	}

	componentDidMount() {
		let timeLeftVar = this.secondsToTime(this.state.seconds);
		this.setState({ time: timeLeftVar });
	}

	startTimer() {
		if (this.timer === 0 && this.state.seconds > 0) {
			this.timer = setInterval(this.countDown, 1000);
		}
	}

	countDown() {
		// Remove one second, set state so a re-render happens.
		let seconds = this.state.seconds - 1;
		this.setState({
			time: this.secondsToTime(seconds),
			seconds: seconds,
		});

		// Check if we're at zero.
		if (seconds === 0) {
			clearInterval(this.timer);
			this.setState({
				disablerValue: false
			});
		}
	}

	IncrementDonateTimes() {
		this.setState({
			clicks: this.state.clicks + 1,
		});
	}

	Convert = () => {
		let date = new Date();
		const days = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		];
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];
		let formattedTime =
			' at ' +
			days[date.getDay()] +
			', ' +
			months[date.getMonth()] +
			' ' +
			date.getDate() +
			', ' +
			date.getFullYear();
		return formattedTime;
	};

	executer = () => {
		this.setState({
			disablerValue: true,
			LastDonateDate: this.Convert()
		});
		this.startTimer();
		this.IncrementDonateTimes();
	}

	render() {
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
											<NavLink to='/profile'>
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
										<img src={dp} alt='James Long' />
									</div>
									<div className='donor-info'>
										<h4 className='username'>
											{' '}
											James Long
										</h4>
										<div className='btn-wrapper'>
											<NavLink
												to='/donor_contact'
												data-toggle='modal'
												data-target='#donor_contact'
												className='boxed-btn'
											>
												Contact
											</NavLink>
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
											<span className='right'>
												1972-01-17
											</span>
										</li>
										<li>
											<strong>Blood Group: </strong>{' '}
											<span className='right'>O+</span>
										</li>
										<li>
											<strong>
												Total Blood Donate:{' '}
											</strong>{' '}
											<span className='right'>
												{this.state.clicks} Times
											</span>
										</li>
										<li>
											<strong>Mobile: </strong>{' '}
											<span className='right'>
												949-860-7949
											</span>
										</li>
										<li>
											<strong>Gender: </strong>{' '}
											<span className='right'>Male</span>
										</li>
										<li>
											<strong>Address: </strong>{' '}
											<span className='right'>
												905 Hillcrest Lane Los Angeles,
												CA 90017
											</span>
										</li>
										<li>
											<strong>Area: </strong>{' '}
											<span className='right'>
												New Mexico
											</span>
										</li>
										<li>
											<strong>Last Donate Date: </strong>{' '}
											<span className='right'>
												{this.state.LastDonateDate}
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
													disabled={this.state.disablerValue}
												>
													Donated Today
												</button>{' '}
											</strong>
											<span className='right'>
												{this.state.time.days + ' '} Day{' '}
												{this.state.time.hours + ' '}{' '}
												Hour{' '}
												{this.state.time.minutes + ' '}{' '}
												Hinute{' '}
												{this.state.time.seconds + ' '}{' '}
												Second remaining!
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
