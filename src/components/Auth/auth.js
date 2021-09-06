import baseURL from './baseURL';

class auth {
	constructor() {
		this.authenticated = false;
	}

	Donorlogin(mobile, password) {
		this.authenticated = true;
		return baseURL
			.post('donor-login', {
				mobile,
				password,
			})
			.then((response) => {
				if (response.data.accessToken) {
					localStorage.setItem('user', JSON.stringify(response.data));
				}

				return response.data;
			});
		// cb();
	}
	Userlogin(mobile, password) {
		this.authenticated = true;
		return baseURL
			.post('user-login', {
				mobile,
				password,
			})
			.then((response) => {
				if (response.data.accessToken) {
					localStorage.setItem('user', JSON.stringify(response.data));
				}

				return response.data;
			});
		// cb();
	}

	logout(cb) {
		this.authenticated = false;
		localStorage.removeItem('user');
		cb();
	}

	DonorRegister(
		donor
	) {
		return baseURL
			.post('join-donor', {
				donor,
			})
			.then((response) => {
				console.log(response);
				return response.data;
			});
	}

	UserRegister(
		user
	) {
		return baseURL
			.post('register', {
				user,
			})
			.then((response) => {
				return response.data;
			});
	}

	getCurrentUser() {
		return JSON.parse(localStorage.getItem('user'));
	}

	isAuthenticated() {
		return this.authenticated;
	}
}
export default new auth();
