import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://www.nationalbloodcaravan.com/api/';

class UserService {
	getDonorProfile() {
		return axios.get(API_URL + 'donors/profile/:id');
	}

	getUserProfile() {
		return axios.get(API_URL + 'users/profile/:id', {
			headers: authHeader(),
		});
	}

	UpdateProfile() {
		return axios.put(API_URL + 'donors/profile/update/:id', {
			headers: authHeader(),
		});
	}

	getAdminBoard() {
		return axios.get(API_URL + 'admin', { headers: authHeader() });
	}
}

export default new UserService();
