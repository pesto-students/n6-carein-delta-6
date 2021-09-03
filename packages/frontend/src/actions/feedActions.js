import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
// import jwt from "jwt-decode";
import jwt from "jwt-simple";
import { FEEDS_GET_SUCCESS, FEEDS_GET_ERRORS } from "./types";
import Api from "../constants/index";

const api = new Api();

export const listFeed =
  (userData = 0) =>
  (dispatch) => {
    let token = localStorage.jwtToken;
    let config = {
      method: "GET",
      url: api.getCurrentHost() + "feeds?_st",
      url: `${api.getCurrentHost()}feeds?_start=${userData}&_limit=10&_sort=createdAt:DESC`,
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
          type: FEEDS_GET_SUCCESS,
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
          type: FEEDS_GET_ERRORS,
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
