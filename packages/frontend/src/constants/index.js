import * as React from 'react';

const server = {
	baseUrl: '',
	prod: ''
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
