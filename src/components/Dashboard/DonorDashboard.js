import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../containers/App.css';
import baseURL from '../Auth/baseURL';

class DonorDashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activation_date: '',
			last_donate_date: '',
			disablerValue: false,
		};
		this.converterLastDonateDate = this.props.dateConverter(this.props.loginProfile.last_donate_date);
		this.converterActivationDate = this.props.dateConverter(this.props.loginProfile.activation_date);
		this.difference_calc = this.difference_calc.bind(this);
		this.onUpdateProfile = this.onUpdateProfile.bind(this);
		
	}

	componentDidMount() {
		if (this.difference_calc() >= 0 && this.difference_calc() <= 90) {
			this.setState({
				disablerValue: true,
			});
		} else {
			this.setState({
				disablerValue: false,
			});
		}
	}

	

	

	difference_calc() {
		let date1 = new Date(this.converterLastDonateDate);
		let date2 = new Date(this.converterActivationDate);

		// To calculate the time difference of two dates
		let Difference_In_Time = date2.getTime() - date1.getTime();

		// To calculate the no. of days between two dates
		let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

		let final = Math.ceil(Difference_In_Days);
		return final;
	}


	onUpdateProfile(e) {
		e.preventDefault();
			baseURL
				.put(`donors/profile/update/${this.props.loginProfile.id}`)
				.then((profileData) => {
					if (profileData.data.id) {
						this.props.loadLoginProfile(profileData.data);
					}
				})
				.catch((err) => console.log(err));

	}

	render() {
		const {
			id,
			name,
			username,
			email,
			blood_group,
			age,
			mobile,
			gender,
			address,
			area,
			donated,
			joined,
			disablerValue,
		} = this.props.loginProfile;

		return (
			<div>
				<div className='breadcrumb-area'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='breadcrumb-inner'>
									<h2 className='page-title'>
										{' '}
										Donor Dashboard
									</h2>
									<ul className='page-list'>
										<li>
											<NavLink to='/'>Home</NavLink>
										</li>
										<li>
											<NavLink to='/donor-dashboard'>
												{' '}
												Donor Dashboard
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
						<div className='row justify-content-center'>
							<div className='col-lg-8'>
								<div className='donor-content-area'>
									<h2 className='title'>
										Profile Information
									</h2>
									<ul>
										<li>
											<strong>ID: </strong>{' '}
											<span className='right'>{id}</span>
										</li>
										<li>
											<strong>Name: </strong>{' '}
											<span className='right'>
												{name}
											</span>
										</li>
										<li>
											<strong>Username: </strong>{' '}
											<span className='right'>
												{username}
											</span>
										</li>
										<li>
											<strong>Email: </strong>{' '}
											<span className='right'>
												{email}
											</span>
										</li>
										<li>
											<strong>Mobile no: </strong>{' '}
											<span className='right'>
												{mobile}
											</span>
										</li>
										<li>
											<strong>Age: </strong>{' '}
											<span className='right'>{age}</span>
										</li>
										<li>
											<strong>Gender: </strong>{' '}
											<span className='right'>
												{gender}
											</span>
										</li>
										<li>
											<strong>Blood Group: </strong>{' '}
											<span className='right'>
												{blood_group}
											</span>
										</li>
										<li>
											<strong>Donated: </strong>{' '}
											<span className='right'>
												{donated}
												{' Times'}
											</span>
										</li>
										<li>
											<strong>Area: </strong>{' '}
											<span className='right'>
												{area}
											</span>
										</li>
										<li>
											<strong>Address: </strong>{' '}
											<span className='right'>
												{address}
											</span>
										</li>
										<li>
											<strong>Join Date: </strong>{' '}
											<span className='right'>
												{this.props.dateConverter(
													joined
												)}
											</span>
										</li>
										<li>
											<strong>Last Donate Date: </strong>{' '}
											<span className='right'>
												{this.props.dateConverter(
													this.converterLastDonateDate
												)}
											</span>
										</li>
										<li>
											<strong>
												Next Activation Date:{' '}
											</strong>{' '}
											<span className='right'>
												{this.difference_calc() >= 0 && this.difference_calc() <= 90 ?
													(this.props.dateConverter(
													this.converterActivationDate
												)) :  '00 '
												}
												
											</span>
										</li>
										<li>
											<strong>Account Status: </strong>{' '}
											<span className='right'>
												{this.state.disablerValue ? (
													<span
														style={{
															backgroundColor:
																'#fd7e14',
															color: '#fff',
															padding: '5px',
															borderRadius: '5px',
															marginLeft: '2rem',
															textAlign: 'center',
														}}
													>
														Paused for{' '}
														{this.difference_calc() >=
															0 && this.difference_calc() <= 90 ?
															this.difference_calc()
															: '00 '}{' '}
														Days
													</span>
												) : (
													<span
														style={{
															backgroundColor:
																'#009C55',
															color: '#fff',
															padding: '5px',
															borderRadius: '5px',
															marginLeft: '2rem',
															textAlign: 'center',
														}}
													>
														Active
													</span>
												)}
											</span>
										</li>
										<li className='btn-wrapper'>
											<strong>
												<button
													style={{
														padding: '0.5rem 1rem',
													}}
													onClick={
														this.onUpdateProfile
													}
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
			</div>
		);
	}
}

export default DonorDashboard;
