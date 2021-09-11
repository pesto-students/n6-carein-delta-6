import axios from "axios";
import { EVENTS_GET_SUCCESS, EVENTS_GET_ERRORS } from "./types";
import Api from "../constants/index";
const api = new Api();

export const listEvents =
  (userData = 0) =>
  (dispatch) => {
    let token = localStorage.jwtToken;

    let config = {
      method: "GET",
      url: api.getCurrentHost() + "events",
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
          type: EVENTS_GET_SUCCESS,
          payload: {
            _start: userData,
            _limit: 10,
            data: success.data,
            _error: "",
          },
        });
      },
      (error) => {
        console.log("fetch data error");
        dispatch({
          type: EVENTS_GET_ERRORS,
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

