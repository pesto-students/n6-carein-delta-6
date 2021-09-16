import axios from 'axios';
import { GET_ERRORS, GET_SUCCESS, SEARCH_GET_SUCCESS, SEARCH_GET_ERRORS } from './types';
import Api from '../constants/index';

const api = new Api();

export const listUsers = (userData) => (dispatch) => {
  console.log("HEREEEEEE", userData.token);
  let config = {
    method: "GET",
    url: api.getCurrentHost() + "api/v1/users/list",
    data: userData,
    headers: {
      Authorization: "Bearer " + userData.token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  axios(config).then(
    (success) => {
      console.log("fetch data success");
      dispatch({
        type: GET_SUCCESS,
        payload: success,
      });
    },
    (error) => {
      console.log("fetch data error");
      dispatch({
        type: GET_ERRORS,
        payload: error,
      });
    }
  );
};

export const addUsers = (userData) => (dispatch) => {
  let config = {
    method: "POST",
    url: api.getCurrentHost() + "api/v1/users/create",
    data: userData,
    headers: {
      Authorization: "Bearer " + userData.token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  axios(config).then(
    (success) => {
      dispatch({
        type: GET_SUCCESS,
        payload: success,
      });
    },
    (error) => {
      dispatch({
        type: GET_ERRORS,
        payload: error,
      });
    }
  );
};

export const userSkills = (userData, token) => (dispatch) => {
  let config = {
    method: "POST",
    url: api.getCurrentHost() + "api/v1/userskills/create",
    data: userData,
    headers: {
      Authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  axios(config).then(
    (success) => {
      dispatch({
        type: GET_SUCCESS,
        payload: success,
      });
    },
    (error) => {
      console.log(error.response, "gfgd");
      dispatch({
        type: GET_ERRORS,
        payload: error,
      });
    }
  );
};

export const searchUsers = (userData) => (dispatch) => {
	let config = {
		method: 'GET',
		url: api.getCurrentHost() + "users?q=" + search_parameters,
		data: userData,
		headers: {
			Authorization: 'Bearer ' + userData.token,
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	};
	axios(config).then(
		(success) => {
			console.log('fetch data success');
			dispatch({
				type: SEARCH_GET_SUCCESS,
				payload: success
			});
		},
		(error) => {
			console.log('fetch data error');
			dispatch({
				type: SEARCH_GET_ERRORS,
				payload: error
			});
		}
	);
};

