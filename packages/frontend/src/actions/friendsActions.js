import axios from "axios";
import { FRIENDS_GET_SUCCESS, FRIENDS_GET_ERRORS } from "./types";
import Api from "../constants/index";

const api = new Api();

export const listFriend = () => (dispatch) => {
  let token = localStorage.jwtToken;
  let config = {
    method: "GET",
    url: `${api.getCurrentHost()}friend-requests`,
    headers: {
      Authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  axios(config).then(
    (success) => {
      dispatch({
        type: FRIENDS_GET_SUCCESS,
        payload: {
          data: success.data,
          _error: "",
        },
      });
    },
    (error) => {
      dispatch({
        type: FRIENDS_GET_ERRORS,
        payload: {
          data: {},
          _error: error.data,
        },
      });
    }
  );
};
