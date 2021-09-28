import React from 'react';
import { NavLink } from 'react-router-dom';
import dp from './Donor.webp';
import baseURL from '../Auth/baseURL';
// import Pagination from 'react-bootstrap/Pagination';

const DonorList = (props) => {


	const onClickProfile = () => {
		baseURL.get(
			`donors/profile/${props.id}`
		)
			.then((donors) => {
				if (donors.data.id) {
					props.loadDonorProfile(donors.data);
				}
			})
			.catch((err) => console.log(err));
	};


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
		} = props;

		return (
			<div className='col-lg-3 col-md-6'>
				<div className='single-donors-item margin-bottom-30'>
					<div className='thumb'>
						<img style={{maxWidth: '210px'}} src={dp} alt='dp' />
					</div>
					<div className='content'>
						<NavLink to={`/donors/profile/${id}/${name}`}>
							{' '}
							<h4
								onClick={onClickProfile}
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
							Contact No:{gender === 'Female'? <strong> Contact With Volunteer </strong>:<strong>{mobile}</strong>}
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


export default DonorList;
