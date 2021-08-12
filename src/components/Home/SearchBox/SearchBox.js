import React from 'react';

const SearchBox = () => {
    return (
		<div className='header-bottom-area'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-lg-10'>
						<div className='blood-search-warpper'>
							<form
								action='/search'
								className='blood-search-form'
								method='get'
							>
								<ul className='fields-list'>
									<li>
										<div className='form-group'>
											<select
												className='form-control nice-select wide'
												name='District'
											>
												<option value=''>
													District
												</option>
												<option value='1'>
													Bagerhat
												</option>
												<option value='2'>
													Bandarban
												</option>
												<option value='3'>
													Barguna
												</option>
												<option value='4'>
													Barisal
												</option>
												<option value='5'>Bhola</option>
												<option value='6'>
													Bogura
												</option>
												<option value='7'>
													Brahmanbaria
												</option>
												<option value='8'>
													Chandpur
												</option>
												<option value='9'>
													Chapainawabganj
												</option>
												<option value='10'>
													Chattogram
												</option>
												<option value='11'>
													Chuadanga
												</option>
												<option value='12'>
													Comilla
												</option>
												<option value='13'>
													Coxsbazar
												</option>
												<option value='14'>
													Dhaka
												</option>
												<option value='15'>
													Dinajpur
												</option>
												<option value='16'>
													Faridpur
												</option>
												<option value='17'>Feni</option>
												<option value='18'>
													Gaibandha
												</option>
												<option value='19'>
													Gazipur
												</option>
												<option value='20'>
													Gopalganj
												</option>
												<option value='21'>
													Habiganj
												</option>
												<option value='22'>
													Jamalpur
												</option>
												<option value='23'>
													Jashore
												</option>
												<option value='24'>
													Jhalakathi
												</option>
												<option value='25'>
													Jhenaidah
												</option>
												<option value='26'>
													Joypurhat
												</option>
												<option value='27'>
													Khagrachhari
												</option>
												<option value='28'>
													Khulna
												</option>
												<option value='29'>
													Kishoreganj
												</option>
												<option value='30'>
													Kurigram
												</option>
												<option value='31'>
													Kushtia
												</option>
												<option value='32'>
													Lakshmipur
												</option>
												<option value='33'>
													Lalmonirhat
												</option>
												<option value='34'>
													Madaripur
												</option>
												<option value='35'>
													Magura
												</option>
												<option value='36'>
													Manikganj
												</option>
												<option value='37'>
													Meherpur
												</option>
												<option value='38'>
													Moulvibazar
												</option>
												<option value='39'>
													Munshiganj
												</option>
												<option value='40'>
													Mymensingh
												</option>
												<option value='41'>
													Naogaon
												</option>
												<option value='42'>
													Narail
												</option>
												<option value='43'>
													Narayanganj
												</option>
												<option value='44'>
													Narsingdi
												</option>
												<option value='45'>
													Natore
												</option>
												<option value='46'>
													Netrokona
												</option>
												<option value='47'>
													Nilphamari
												</option>
												<option value='48'>
													Noakhali
												</option>
												<option value='49'>
													Pabna
												</option>
												<option value='50'>
													Panchagarh
												</option>
												<option value='51'>
													Patuakhali
												</option>
												<option value='52'>
													Pirojpur
												</option>
												<option value='53'>
													Rajbari
												</option>
												<option value='54'>
													Rajshahi
												</option>
												<option value='55'>
													Rangamati
												</option>
												<option value='56'>
													Rangpur
												</option>
												<option value='57'>
													Satkhira
												</option>
												<option value='58'>
													Shariatpur
												</option>
												<option value='59'>
													Sherpur
												</option>
												<option value='60'>
													Sirajganj
												</option>
												<option value='61'>
													Sunamganj
												</option>
												<option value='62'>
													Sylhet
												</option>
												<option value='63'>
													Tangail
												</option>
												<option value='64'>
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
											>
												<option value=''>
													Blood Group
												</option>
												<option value='o+'>O+</option>
												<option value='o-'>O-</option>
												<option value='b+'>B+</option>
												<option value='b-'>B-</option>
												<option value='a+'>A+</option>
												<option value='a-'>A-</option>
												<option value='ab+'>AB+</option>
												<option value='ab-'>AB-</option>
											</select>
										</div>
									</li>
									<li>
										<input
											type='submit'
											value='Search Donor'
											className='submit-btn'
										/>
									</li>
								</ul>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchBox;
