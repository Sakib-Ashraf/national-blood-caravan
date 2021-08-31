const ReqBGTable = ({
	name,
	email,
	blood_group,
	number_of_units,
	Illness,
	mobile,
	hospital_address,
}) => {
	return (
		<tr>
			<th scope='row'>{name}</th>
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
