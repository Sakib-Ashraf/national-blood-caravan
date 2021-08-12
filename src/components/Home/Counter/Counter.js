import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faGrin, faTint, faTrophy } from '@fortawesome/free-solid-svg-icons';

const Counter = () => {
    return (
		<div className='coutnerup-area red-bg padding-80'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-3 col-md-6'>
						<div className='single-counterup-item'>
							<div className='icon'>
								<FontAwesomeIcon icon={faAddressBook} />
							</div>
							<div className='content'>
								<span className='count-num'>2050</span>
								<h4 className='title'>Happy Donors</h4>
							</div>
						</div>
					</div>
					<div className='col-lg-3 col-md-6'>
						<div className='single-counterup-item'>
							<div className='icon'>
								<FontAwesomeIcon icon={faTint} />
							</div>
							<div className='content'>
								<span className='count-num'>20</span>
								<h4 className='title'>Blood Group</h4>
							</div>
						</div>
					</div>
					<div className='col-lg-3 col-md-6'>
						<div className='single-counterup-item'>
							<div className='icon'>
								<FontAwesomeIcon icon={faGrin} />
							</div>
							<div className='content'>
								<span className='count-num'>203</span>
								<h4 className='title'>Blood Group</h4>
							</div>
						</div>
					</div>
					<div className='col-lg-3 col-md-6'>
						<div className='single-counterup-item'>
							<div className='icon'>
								<FontAwesomeIcon icon={faTrophy} />
							</div>
							<div className='content'>
								<span className='count-num'>20</span>
								<h4 className='title'>Total Awards</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Counter;