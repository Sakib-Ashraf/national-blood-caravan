import axios from 'axios';

const API_URL = 'http://www.nationalbloodcaravan.com/api/';

class auth {
	constructor() {
		this.authenticated = false;
	}

	login(mobile, password) {
		this.authenticated = true;
		return axios
			.post(API_URL + 'login', {
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

	register(
		donor
	) {
		return axios
			.post(API_URL + 'join-donor', {
				donor
			})
			.then((response) => {
				console.log(response);
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
