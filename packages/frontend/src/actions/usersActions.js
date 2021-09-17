import axios from "axios";
import {
  GET_ERRORS,
  GET_SUCCESS,
  SEARCH_GET_SUCCESS,
  SEARCH_GET_ERRORS,
} from "./types";
import Api from "../constants/index";
import setAuthToken from "../utils/setAuthToken";
import jwt from "jwt-simple";
const api = new Api();
 
export const addUsers = (userData) => (dispatch) => {
  let config = {
    method: "POST",
    url: api.getCurrentHost() + "auth/local/register",
    data: userData,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  axios(config).then(
    (success) => {
      const secret = "FxUum76z";
      const payload = {
        jwt: success.data.jwt,
      };
      const token = jwt.encode(payload, secret);
      // localStorage.setItem("jwtToken", success.data.jwt);
      // localStorage.setItem("user", JSON.stringify(success.data.user));
      window.open("/", "_self");
      const decoded = jwt.decode(token, secret);
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
 
export const searchUsers = (userData) => (dispatch) => {
  let token = localStorage.jwtToken;
  let config = {
    method: "GET",
    url: api.getCurrentHost() + "users?_q=" + userData,
    data: userData,
    headers: {
      Authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  axios(config).then(
    (success) => {
      console.log("fetch data success");
      dispatch({
        type: SEARCH_GET_SUCCESS,
        payload: success,
      });
    },
    (error) => {
      console.log("fetch data error");
      dispatch({
        type: SEARCH_GET_ERRORS,
        payload: error,
      });
    }
  );
};
