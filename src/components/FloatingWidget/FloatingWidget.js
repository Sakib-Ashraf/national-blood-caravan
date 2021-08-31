import React from 'react';
import { NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint } from '@fortawesome/free-solid-svg-icons';

const FloatingWidget = () => {
    return (
		<div className='request-for-blood'>
			<NavLink to='/blood-request' className='request-link'>
				<FontAwesomeIcon
					icon={faTint}
					style={{ marginRight: '10px' }}
				/>
				Request For Blood
			</NavLink>
		</div>
	);
};

export default FloatingWidget;