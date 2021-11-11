module.exports = {
	url: 'baseurl',
	baseurl: process.env.APP_URL,
	sandbox: 'http://sandbox.hoistin.com',
	localurl: 'http://localhost:3333',
	ngrokurl: 'https://adb0a8eef83d.ngrok.io',
	contentType: 'application/json',
	endpoints: {
		users: '/api/v1/users/'
	}
};
