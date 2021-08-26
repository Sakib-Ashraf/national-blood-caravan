import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../containers/App.css';
import SearchBox from '../Home/SearchBox/SearchBox';
import DonorList from './DonorList';

class Donors extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loadDonorData: this.props.loadDonorData,
			loadDonorProfile: this.props.loadDonorProfile,
			dateConverter: this.props.dateConverter,
			donors: this.props.donors,
		};
	}


	// componentDidMount() {
	// 	fetch(`http://localhost:3300/donors`)
	// 		.then((response) => response.json())
	// 		.then((donors) => {
	// 			if (donors[0].id) {
	// 				this.setState({ donors: donors });
	// 			}
	// 		})
	// 		.catch((err) => console.log(err));
	// }

	render() {
		const { loadDonorData, loadDonorProfile, donors, dateConverter } =
			this.state;
		return (
			<div>
				<div className='breadcrumb-area'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='breadcrumb-inner'>
									<h2 className='page-title'>Donors</h2>
									<ul className='page-list'>
										<li>
											<NavLink to='/'>Home</NavLink>
										</li>
										<li>
											<NavLink to='/donor'>
												Donors
											</NavLink>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<SearchBox loadDonorData={loadDonorData} />

				{/* <!-- our dedicated team area start  --> */}
				<section className='dedicated-team-area padding-120 '>
					<div className='container'>
						<h1>Loading Data...</h1>
						<div className='row'>
							{console.log(donors)}
							{!donors ? (
								<div className='col-lg-12'>
									<h1
										className='alert-danger'
										style={{
											textAlign: 'center',
											lineHeight: '6rem',
										}}
									>
										Sorry! No Donor Data Found!
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
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Donors;
