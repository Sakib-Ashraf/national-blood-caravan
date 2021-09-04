import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SearchBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			area: '',
			blood_group: '',
			gender: '',
		};
	}

	onSubmitSearch = () => {
		fetch(
			`http://www.nationalbloodcaravan.com/api/search/${this.state.area}/${this.state.blood_group}/${this.state.gender}`
		)
			.then((response) => response.json())
			.then((donors) => {
				if (donors[0].id) {
					console.log(donors);
					this.props.loadDonorData(donors);
				} else {
					console.log('no data found');
				}
			})
			.catch((err) => console.log(err, 'problem loading data'));
	}

	onAreaChange = (event) => {
		return this.setState({ area: event.target.value });
	};

	onBGChange = (event) => {
		return this.setState({ blood_group: event.target.value });
	};

	onGenderChange = (event) => {
		return this.setState({ gender: event.target.value });
	};

	render() {
		return (
			<div className='header-bottom-area'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-lg-10'>
							<div className='blood-search-warpper'>
								<div className='blood-search-form'>
									<ul className='fields-list'>
										<li>
											<div className='form-group'>
												<select
													className='form-control nice-select wide'
													name='area'
													onChange={this.onAreaChange}
												>
													<option value=''>
														District
													</option>
													<option value='Bagerhat'>
														Bagerhat
													</option>
													<option value='Bandarban'>
														Bandarban
													</option>
													<option value='Barguna'>
														Barguna
													</option>
													<option value='Barisal'>
														Barisal
													</option>
													<option value='Bhola'>
														Bhola
													</option>
													<option value='Bogura'>
														Bogura
													</option>
													<option value='Brahmanbaria'>
														Brahmanbaria
													</option>
													<option value='Chandpur'>
														Chandpur
													</option>
													<option value='Chapainawabganj'>
														Chapainawabganj
													</option>
													<option value='Chattogram'>
														Chattogram
													</option>
													<option value='Chuadanga1'>
														Chuadanga
													</option>
													<option value='Comilla'>
														Comilla
													</option>
													<option value='Coxsbazar'>
														Coxsbazar
													</option>
													<option value='Dhaka'>
														Dhaka
													</option>
													<option value='Dinajpur'>
														Dinajpur
													</option>
													<option value='Faridpur'>
														Faridpur
													</option>
													<option value='Feni'>
														Feni
													</option>
													<option value='Gaibandha'>
														Gaibandha
													</option>
													<option value='Gazipur'>
														Gazipur
													</option>
													<option value='Gopalganj'>
														Gopalganj
													</option>
													<option value='Habiganj'>
														Habiganj
													</option>
													<option value='Jamalpur'>
														Jamalpur
													</option>
													<option value='Jashore'>
														Jashore
													</option>
													<option value='Jhalakathi'>
														Jhalakathi
													</option>
													<option value='Jhenaidah'>
														Jhenaidah
													</option>
													<option value='Joypurhat'>
														Joypurhat
													</option>
													<option value='Khagrachhari'>
														Khagrachhari
													</option>
													<option value='Khulna'>
														Khulna
													</option>
													<option value='Kishoreganj'>
														Kishoreganj
													</option>
													<option value='Kurigram'>
														Kurigram
													</option>
													<option value='Kushtia'>
														Kushtia
													</option>
													<option value='Lakshmipur'>
														Lakshmipur
													</option>
													<option value='Lalmonirhat'>
														Lalmonirhat
													</option>
													<option value='Madaripur'>
														Madaripur
													</option>
													<option value='Magura'>
														Magura
													</option>
													<option value='Manikganj'>
														Manikganj
													</option>
													<option value='Meherpur'>
														Meherpur
													</option>
													<option value='Moulvibazar'>
														Moulvibazar
													</option>
													<option value='Munshiganj'>
														Munshiganj
													</option>
													<option value='Mymensingh'>
														Mymensingh
													</option>
													<option value='Naogaon'>
														Naogaon
													</option>
													<option value='Narail'>
														Narail
													</option>
													<option value='Narayanganj'>
														Narayanganj
													</option>
													<option value='Narsingdi'>
														Narsingdi
													</option>
													<option value='Natore'>
														Natore
													</option>
													<option value='Netrokona'>
														Netrokona
													</option>
													<option value='Nilphamari'>
														Nilphamari
													</option>
													<option value='Noakhali'>
														Noakhali
													</option>
													<option value='Pabna'>
														Pabna
													</option>
													<option value='Panchagarh'>
														Panchagarh
													</option>
													<option value='Patuakhali'>
														Patuakhali
													</option>
													<option value='Pirojpur'>
														Pirojpur
													</option>
													<option value='Rajbari'>
														Rajbari
													</option>
													<option value='Rajshahi'>
														Rajshahi
													</option>
													<option value='Rangamati'>
														Rangamati
													</option>
													<option value='Rangpur'>
														Rangpur
													</option>
													<option value='Satkhira'>
														Satkhira
													</option>
													<option value='Shariatpur'>
														Shariatpur
													</option>
													<option value='Sherpur'>
														Sherpur
													</option>
													<option value='Sirajganj'>
														Sirajganj
													</option>
													<option value='Sunamganj'>
														Sunamganj
													</option>
													<option value='Sylhet'>
														Sylhet
													</option>
													<option value='Tangail'>
														Tangail
													</option>
													<option value='Thakurgaon'>
														Thakurgaon
													</option>
												</select>
											</div>
										</li>
										<li>
											<div className='form-group '>
												<select
													className='form-control nice-select wide'
													name='blood_group'
													onChange={this.onBGChange}
												>
													<option value=''>
														Blood Group
													</option>
													<option value='O+'>
														O+
													</option>
													<option value='O-'>
														O-
													</option>
													<option value='B+'>
														B+
													</option>
													<option value='B-'>
														B-
													</option>
													<option value='A+'>
														A+
													</option>
													<option value='A-'>
														A-
													</option>
													<option value='AB+'>
														AB+
													</option>
													<option value='AB-'>
														AB-
													</option>
												</select>
											</div>
										</li>
										<li>
											<div className='form-group '>
												<select
													className='form-control nice-select wide'
													name='gender'
													onChange={
														this.onGenderChange
													}
												>
													<option value=''>
														Gender
													</option>
													<option value='Male'>
														Male
													</option>
													<option value='Female'>
														Female
													</option>
													<option value='Other'>
														Other
													</option>
												</select>
											</div>
										</li>
										<li style={{ marginLeft: '0px' }}>
											<NavLink to='/donors'>
												<input
													onClick={
														this.onSubmitSearch
													}
													type='submit'
													value='Search Donor'
													className='submit-btn'
												/>
											</NavLink>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SearchBox;
