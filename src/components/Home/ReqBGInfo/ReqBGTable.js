import baseURL from '../../Auth/baseURL';
import { NavLink } from 'react-router-dom';

const ReqBGTable = ({
	id,
	name,
	email,
	blood_group,
	number_of_units,
	Illness,
	mobile,
	hospital_address,
	loadReqData,
}) => {
	const onClickProfile = () => {
		baseURL
			.get(`users/request/${id}`)
			.then((requested) => {
				if (requested.data.id) {
					loadReqData(requested.data);
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<tr>
			<th onClick={onClickProfile} scope='row'>
				<NavLink to={`users/request/${id}`}>{name}</NavLink>
			</th>
			

			<td>{email}</td>
			<td>{blood_group}</td>
			<td>{number_of_units}</td>
			<td>{Illness}</td>
			<td>{mobile}</td>
			<td>{hospital_address}</td>
		</tr>
	);
};

export default ReqBGTable;
