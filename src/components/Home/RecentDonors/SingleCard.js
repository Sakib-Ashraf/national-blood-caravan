import React from 'react';
import { NavLink } from 'react-router-dom';
import DP from './Donor.png';



const SingleCard = ({
	id,
	name,
	blood_group,
	donated,
	last_donate_date,
	dateConverter,
}) => {
	return (
		<div className='single-donors-item'>
			<div className='thumb'>
				<img style={{ maxWidth: '300px' }} src={DP} alt='dp' />
			</div>
			<div className='content'>
				<NavLink to={`/donors/profile/${id}/${name}`}>
					<h4 className='title'>{name}</h4>
				</NavLink>
				<span className='blood-group'>
					Blood Group: <strong>{blood_group}</strong>
				</span>
				<span className='total-donate'>
					Total Donate: <strong>{donated}</strong> Times
				</span>
				<span className='total-donate'>
					Last Donate Date: <strong>{dateConverter(last_donate_date)}</strong>
				</span>
			</div>
		</div>
	);
};

export default SingleCard;
