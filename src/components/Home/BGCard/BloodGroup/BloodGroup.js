import React, { Component } from 'react';
import '../../../../containers/App.css';
import DonorList from '../../../Donors/DonorList';
import { NavLink } from 'react-router-dom';

class BloodGroup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			blood_group: this.props.routerProps.match.params.bg,
			donors: [],
			data: true,
		};
	}

	componentDidMount() {
		fetch(`http://localhost:3300/donors/${this.state.blood_group}`)
			.then((response) => response.json())
			.then((donors) => {
				if (donors[0].id) {
					this.setState({ donors: donors });
				} else {
					this.setState({ data: false });
				}
			})
			.catch((err) => console.log(err));
	}

	render() {
		const { loadDonorProfile, dateConverter } = this.props;
		const { donors } = this.state;
		return (
			<>
				<div className='breadcrumb-area'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='breadcrumb-inner'>
									<h2 className='page-title'>
										{' '}
										{`All Available Donors In ${this.state.blood_group}`}
									</h2>
									<ul className='page-list'>
										<li>
											<NavLink to='/'>Home</NavLink>
										</li>
										<li>
											<NavLink
												to={`/donors/${this.state.blood_group}`}
											>
												{' '}
												{`All Available Donors In ${this.state.blood_group}`}
											</NavLink>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<section className='dedicated-team-area padding-120 '>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'></div>
							{!this.state.data ? (
								<div className='col-lg-12'>
									<h1
										className='alert-danger'
										style={{
											textAlign: 'center',
											lineHeight: '6rem',
										}}
									>
										{`Sorry!!! No Donor Data Found for ${this.state.blood_group}`}
									</h1>
								</div>
							) : (
								<>
									{Object.keys(donors).map((donor, i) => {
										return (
											<DonorList
												dateConverter={dateConverter}
												loadDonorProfile={
													loadDonorProfile
												}
												key={i}
												id={donors[i].id}
												name={donors[i].name}
												email={donors[i].email}
												blood_group={
													donors[i].blood_group
												}
												mobile={donors[i].mobile}
												gender={donors[i].gender}
												area={donors[i].area}
												donated={donors[i].donated}
												last_donate_date={
													donors[i].last_donate_date
												}
												joined={donors[i].joined}
											/>
										);
									})}
								</>
							)}
							<div className='col-lg-12'>
								<nav
									className='pagination-wrapper'
									aria-label='Page navigation '
								></nav>
							</div>
						</div>
					</div>
				</section>
			</>
		);
	}
};

export default BloodGroup;
