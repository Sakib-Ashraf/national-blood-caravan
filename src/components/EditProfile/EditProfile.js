import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import '../../containers/App.css';

class EditProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			mobile: '',
			birth_date: '',
			area: '',
			address: '',
		};
	}

	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	onUpdateProfile = () => {
		fetch(
			`http://63.250.35.238/api/donors/profile/edit/${this.props.loginProfile.id}`,
			{
				method: 'put',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: this.state.name,
					email: this.state.email,
					mobile: this.state.mobile,
					birth_date: this.state.birth_date,
					area: this.state.area,
					address: this.state.address,
				}),
			}
		)
			.then((response) => response.json())
			.then((profileData) => {
				if (profileData.id) {
					console.log(profileData);
					this.props.loadLoginProfile(profileData);
				}
			})
			.catch((err) => console.log(err));
	};

	render() {
		const { name, username, email, mobile, birth_date, area, address } =
			this.props.loginProfile;
		return (
			<div>
				<div className='breadcrumb-area'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='breadcrumb-inner'>
									<h2 className='page-title'>
										{' '}
										Edit Profile
									</h2>
									<ul className='page-list'>
										<li>
											<NavLink to='/'>Home</NavLink>
										</li>
										<li>
											<NavLink to='/user-edit-profile'>
												{' '}
												Edit Profile
											</NavLink>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='donor-dashboard-page-content padding-120'>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col-lg-8'>
								<div className='donor-content-area'>
									<h2 className='title'>Edit Profile</h2>
									<form onSubmit={this.onUpdateProfile}>
										<div className='form-group'>
											<label htmlFor='username'>
												Username
											</label>
											<input
												type='text'
												className='form-control'
												readOnly
												placeholder={username}
											/>
										</div>
										<div className='form-group'>
											<label htmlFor='name'>Name :</label>
											<input
												onChange={this.onChange}
												type='text'
												className='form-control'
												name='name'
												id='name'
												placeholder={name}
												defaultValue={name}
											/>
										</div>
										<div className='form-group'>
											<label htmlFor='email'>
												Email :
											</label>
											<input
											onChange={this.onChange}
												type='text'
												className='form-control'
												name='email'
												id='email'
												placeholder={email}
												defaultValue={email}
											/>
										</div>
										<div className='form-group'>
											<label htmlFor='mobile'>
												Contact No :
											</label>
											<input
											onChange={this.onChange}
												type='tel'
												className='form-control'
												name='mobile'
												id='mobile'
												placeholder={mobile}
												defaultValue={mobile}
											/>
										</div>
										<div className='form-group'>
											<label htmlFor='birth_date'>
												Date of Birth :
											</label>
											<input
											onChange={this.onChange}
												type='date'
												className='form-control'
												name='birth_date'
												id='birth_date'
												placeholder={birth_date}
												defaultValue={birth_date}
											/>
										</div>
										<div className='form-group'>
											<label htmlFor='area'>Area :</label>
											<input
											onChange={this.onChange}
												type='text'
												className='form-control'
												name='area'
												id='area'
												placeholder={area}
												defaultValue={area}
											/>
										</div>
										<div className='form-group'>
											<label htmlFor='address'>
												Address :
											</label>
											<input
											onChange={this.onChange}
												type='text'
												className='form-control'
												name='address'
												id='address'
												placeholder={address}
												defaultValue={address}
											/>
										</div>
										<div className='form-group'>
											<button
												type='submit'
												className='submit-btn'
											>
												Save Change
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default EditProfile;
