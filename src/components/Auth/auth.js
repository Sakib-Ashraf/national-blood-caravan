import axios from 'axios';

const API_URL = 'http://localhost:3300/';

class auth {
	constructor() {
		this.authenticated = false;
	}

	login(cb) {
		this.authenticated = true;
		cb();
	}

	logout(cb) {
		this.authenticated = false;
		localStorage.removeItem('user');
		cb();
	}

	register(username, email, password) {
		return axios.post(API_URL + 'signup', {
			username,
			email,
			password,
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
