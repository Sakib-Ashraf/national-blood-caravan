import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import dp from './Donor.png';
// import Pagination from 'react-bootstrap/Pagination';

class DonorList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.id,
			name: this.props.name,
			blood_group: this.props.blood_group,
			mobile: this.props.mobile,
			gender: this.props.gender,
			area: this.props.area,
			donated: this.props.donated,
			last_donate_date: this.props.last_donate_date,
			dateConverter: this.props.dateConverter,
		};
	}


	onSubmitProfile = () => {
		fetch(
			`http://localhost:3300/donors/profile/${this.props.id}/${this.props.name}`
		)
			.then((response) => response.json())
			.then((donors) => {
				if (donors.id) {
					this.props.loadDonorProfile(donors);
				}
			})
			.catch((err) => console.log(err));
	};

	render() {
		const {
			id,
			name,
			blood_group,
			mobile,
			gender,
			area,
			donated,
			last_donate_date,
			dateConverter,
		} = this.state;

		return (
			<div className='col-lg-3 col-md-6'>
				<div className='single-donors-item margin-bottom-30'>
					<div className='thumb'>
						<img src={dp} alt='dp' />
					</div>
					<div className='content'>
						<NavLink to={`/donors/profile/${id}/${name}`}>
							{' '}
							<h4
								onClick={this.onSubmitProfile}
								className='title'
							>
								{name}
							</h4>
						</NavLink>
						<span className='blood-group'>
							Blood Group: <strong>{blood_group}</strong>
						</span>
						<span
							style={{
								fontSize: '14px',
								lineHeight: '24px',
								display: 'block',
								fontWeight: 600,
							}}
							className='gender'
						>
							Gender: <strong>{gender}</strong>
						</span>
						<span
							style={{
								fontSize: '14px',
								lineHeight: '24px',
								display: 'block',
								fontWeight: 600,
							}}
							className='area'
						>
							Area: <strong>{area}</strong>
						</span>
						<span
							style={{
								fontSize: '14px',
								lineHeight: '24px',
								display: 'block',
								fontWeight: 600,
							}}
							className='mobile'
						>
							Contact No: <strong>{mobile}</strong>
						</span>
						<span className='total-donate'>
							Total Donate: <strong>{donated}</strong> Times
						</span>
						<span
							style={{
								fontSize: '14px',
								lineHeight: '24px',
								display: 'block',
								fontWeight: 600,
							}}
							className='last_donate_date'
						>
							Last Donate:{' '}
							<strong>{dateConverter(last_donate_date)}</strong>
						</span>
					</div>
				</div>
			</div>
		);
	}
}

export default DonorList;
