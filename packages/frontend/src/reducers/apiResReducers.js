import { GET_SUCCESS, GET_ERRORS } from '../actions/types';
const initialState = {};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_SUCCESS:
			console.log('action', action.payload);
			return action.payload;
		case GET_ERRORS:
			console.log('reducer GET_ERRORS', action.payload);
			return action.payload;
		default:
			return state;
	}
}
