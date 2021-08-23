import { setHeader } from './setHeader';
import config from './config';

export const APIService = {
	login,
	logout
};

const baseUrl =
	config.url === 'baseurl'
		? config.baseurl
		: config.url === 'localurl'
		? config.localurl
		: config.url === 'ngrokurl'
		? config.ngrokurl
		: config.url === 'sandbox'
		? config.sandbox
		: window.location.hostname;

function login(body) {
	const requestOptions = {
		method: 'POST',
		headers: setHeader(),
		body: JSON.stringify(body)
	};

	return fetch(baseUrl + config.endpoints.users + 'login', requestOptions)
		.then(_handleResponse)
		.then(async (data) => {
			if (data) {
				await localStorage.setItem('token', data.token);
			}
			return data;
		});
}

async function logout() {
	const requestOptions = {
		method: 'DELETE',
		headers: setHeader()
	};

	return fetch(baseUrl + config.endpoints.users + 'logout', requestOptions)
		.then(_handleResponse)
		.then(async (data) => {
			await localStorage.removeItem('token');
			return data;
		});
}

function _handleResponse(response) {
	return response.text().then((text) => {
		let data = text && JSON.parse(text);
		data.statusText = response.statusText;
		if (!response.ok) {
			if (response.status === 401) {
				logout();
				if (new URL(response.url).pathname !== '/api/v1/login') {
					window.location.reload(true);
				}
			}
			return Promise.reject(data);
		}

		return data;
	});
}
