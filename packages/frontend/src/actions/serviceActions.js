import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
// import jwt from "jwt-decode";
import jwt from "jwt-simple";
import {
  SERVICES_GET_SUCCESS,
  SERVICES_GET_ERRORS,
  SERVICES_ADD_SUCCESS,
  SERVICES_ADD_ERRORS,
} from "./types";
import Api from "../constants/index";

const api = new Api();

export const listServices =
  (userData = 0) =>
  (dispatch) => {
    let token = localStorage.jwtToken;

    let config = {
      method: "GET",
      url: `${api.getCurrentHost()}services`,
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
          type: SERVICES_GET_SUCCESS,
          payload: {
            _start: userData,
            _limit: 10,
            data: success.data,
            _error: "",
          },
        });
      },
      (error) => {
        dispatch({
          type: SERVICES_GET_ERRORS,
          payload: {
            _start: userData,
            _limit: 10,
            data: {},
            _error: error.data,
          },
        });
      }
    );
  };

export const addService = (userData) => (dispatch) => {
  let token = localStorage.jwtToken;

  let config = {
    method: "POST",
    url: api.getCurrentHost() + "service-registrations",
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
        type: SERVICES_ADD_SUCCESS,
        payload: {
          data: success.data,
          _error: "",
        },
      });
    },

    (error) => {
      dispatch({
        type: SERVICES_ADD_ERRORS,
        payload: {
          _error: error.data,
        },
      });
    }
  );
};
