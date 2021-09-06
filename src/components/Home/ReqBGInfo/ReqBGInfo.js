import React, { Component } from 'react';
import ReqBGTable from './ReqBGTable';
import baseURL from '../../Auth/baseURL';

class ReqBGInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			requestedBlood: [],
		};
	}

	componentDidMount() {
		baseURL.get('reqbginfo')
			.then((response) => {
				if (response.data) {
					this.setState({ requestedBlood: response.data });
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
															id={
																this.state
																	.requestedBlood[
																	i
																].id
															}
															name={
																this.state
																	.requestedBlood[
																	i
																].name
															}
															email={
																this.state
																	.requestedBlood[
																	i
																].email
															}
															blood_group={
																this.state
																	.requestedBlood[
																	i
																].blood_group
															}
															mobile={
																this.state
																	.requestedBlood[
																	i
																].mobile
															}
															number_of_units={
																this.state
																	.requestedBlood[
																	i
																]
																	.number_of_units
															}
															Illness={
																this.state
																	.requestedBlood[
																	i
																].illness
															}
															hospital_address={
																this.state
																	.requestedBlood[
																	i
																]
																	.hospital_address
															}
															loadReqData={
																this.props
																	.loadReqData
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
