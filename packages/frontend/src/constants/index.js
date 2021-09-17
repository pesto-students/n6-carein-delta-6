import * as React from 'react';

const server = {
	baseUrl: 'https://carein.vubalsoft.com/',
	prod: 'https://carein.vubalsoft.com/'
	// baseUrl: 'http://localhost:1337/',
	// prod: 'http://localhost:1337/'
};

class Api extends React.Component {
	getCurrentHost = () => {
		if (process.env.REACT_APP_URL === 'prod') {
			return server.prod;
		} else {
			return server.baseUrl;
		}
	};
}

export default Api;
