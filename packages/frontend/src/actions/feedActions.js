import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
// import jwt from "jwt-decode";
import jwt from "jwt-simple";
import {
  GET_ERRORS,
  GET_SUCCESS,
  SET_CURRENT_USER,
  USER_LOADING,
} from "./types";
import Api from "../constants/index";

const api = new Api();

export const listFeed = (userData) => (dispatch) => {
    let token = localStorage.jwtToken;
	let config = {
		method: 'GET',
		url: api.getCurrentHost() + 'feeds',
		data: userData,
		headers: {
			Authorization:"Bearer " +  token,
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	};
	axios(config).then(
		(success) => {
			console.log('fetch data success');
			dispatch({
				type: GET_SUCCESS,
				payload: success.data
			});
		},
		(error) => {
			console.log('fetch data error');
			dispatch({
				type: GET_ERRORS,
				payload: error
			});
		}
	);
};