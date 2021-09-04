import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import '../../containers/App.css';

class ChangePassword extends Component {
	constructor(props) {
		super(props);
		this.state = {
			OldPassword: '',
			NewPassword: '',
		};
	}

	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	onChangePassword = () => {
		fetch(
			`https://www.nationalbloodcaravan.com/donors/profile/change-password/${this.props.loginProfile.id}`,
			{
				method: 'put',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					OldPassword: this.state.OldPassword,
					NewPassword: this.state.NewPassword,
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
		return (
			<div>
				<div className='breadcrumb-area'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='breadcrumb-inner'>
									<h2 className='page-title'>
										{' '}
										Change Password
									</h2>
									<ul className='page-list'>
										<li>
											<NavLink to='/'>Home</NavLink>
										</li>
										<li>
											<NavLink to='/user-change-password'>
												{' '}
												Change Password
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
									<h2 className='title'>Change Password</h2>
									<form onSubmit={this.onChangePassword}>
										<div className='form-group'>
											<label htmlFor='password'>
												Old Password
											</label>
											<input
												onChange={this.onChange}
												type='password'
												name='OldPassword'
												placeholder='Old Password'
												className='form-control'
												required
												aria-required='true'
												autoComplete='off'
											/>
										</div>
										<div className='form-group'>
											<label htmlFor='password'>
												New Password
											</label>
											<input
												onChange={this.onChange}
												type='password'
												name='NewPassword'
												placeholder='New Password'
												className='form-control'
												required
												aria-required='true'
											/>
										</div>
										<div className='form-group'>
											<button
												type='submit'
												className='submit-btn'
											>
												Change Password
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

export default ChangePassword;
