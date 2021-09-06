import authHeader from './auth-header';
import baseURL from './baseURL';

class UserService {
	getDonorProfile() {
		return baseURL.get('donors/profile/:id');
	}

	getUserProfile() {
		return baseURL.get('users/profile/:id', {
			headers: authHeader(),
		});
	}

	UpdateProfile() {
		return baseURL.put('donors/profile/update/:id', {
			headers: authHeader(),
		});
	}

	getAdminBoard() {
		return baseURL.get('admin', { headers: authHeader() });
	}
}

export default new UserService();
