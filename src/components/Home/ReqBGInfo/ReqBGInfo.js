import React, { Component } from 'react';
import ReqBGTable from './ReqBGTable';

class ReqBGInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			requestedBlood: [],
		};
	}

	componentDidMount() {
		fetch('http://localhost:3300/reqbginfo')
			.then((response) => response.json())
			.then((response) => {
				if (response) {
					this.setState({ requestedBlood: response });
				}
			})
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<div className='recently-requested-area padding-bottom-90'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-lg-8'>
							<div className='section-title margin-bottom-60'>
								<h2 className='title'>
									Recent Request For Blood
								</h2>
								<span className='separator'></span>
							</div>
						</div>
					</div>
					{!this.state.requestedBlood.length ? (
						<h1>Loading Data...</h1>
					) : (
						<div className='row'>
							{this.state.requestedBlood[0].id === undefined ? (
								<div className='col-lg-12'>
									<h1
										className='alert-danger'
										style={{
											textAlign: 'center',
											lineHeight: '6rem',
										}}
									>
										Sorry! No Data Found!
									</h1>
								</div>
							) : (
								<div className='recent-requested-blood-table'>
									<table className='table'>
										<thead>
											<tr>
												<th scope='col'>Name</th>
												<th scope='col'>Email</th>
												<th scope='col'>Blood Group</th>
												<th scope='col'>
													Number Of Units
												</th>
												<th scope='col'>Illness</th>
												<th scope='col'>
													Contact Number
												</th>
												<th scope='col'>
													Hospital Address
												</th>
											</tr>
										</thead>
										<tbody>
											{this.state.requestedBlood.map(
												(data, i) => {
													return (
														<ReqBGTable
															key={i}
															name={data.name}
															email={data.email}
															blood_group={
																data.blood_group
															}
															mobile={data.mobile}
															number_of_units={
																data.number_of_units
															}
															Illness={
																data.illness
															}
															hospital_address={
																data.hospital_address
															}
														/>
													);
												}
											)}
										</tbody>
									</table>
								</div>
							)}
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default ReqBGInfo;
