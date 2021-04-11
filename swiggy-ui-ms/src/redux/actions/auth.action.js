import { AuthConstants } from '../constants';

export const AlertActions = {
	login,
	loginSuccess,
	loginFailure,
	logout
};

function login(message) {
	return {
		type: AuthConstants.LOGIN_REQUEST
	};
}

function logout(message) {
	return {
		type: AuthConstants.LOGOUT
	};
}
function loginSuccess(data) {
	return {
		type: AuthConstants.LOGIN_SUCCESS,
		data: data
	};
}
function loginSuccess(message) {
	return {
		type: AuthConstants.LOGIN_FAILURE,
		message
	};
}