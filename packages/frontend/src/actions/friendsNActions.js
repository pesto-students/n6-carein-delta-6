import axios from "axios";
import { FRIENDS_N_GET_SUCCESS, FRIENDS_N_GET_ERRORS } from "./types";
import Api from "../constants/index";
import { showLoader, hideLoader } from "../views/common/Loader";

const api = new Api();

export const listNFriend = () => (dispatch) => {
  showLoader();
  let token = localStorage.jwtToken;
  let config = {
    method: "GET",
    url: `${api.getCurrentHost()}friend-nearby`,
    headers: {
      Authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  axios(config).then(
    (success) => {
      hideLoader();
      console.log("fetch data success FRIENDS_N_GET_SUCCESS");
      dispatch({
        type: FRIENDS_N_GET_SUCCESS,
        payload: {
          data: success.data,
          _error: "",
        },
      });
    },
    (error) => {
      hideLoader();
      console.log("fetch data error");
      dispatch({
        type: FRIENDS_N_GET_ERRORS,
        payload: {
          data: {},
          _error: error.data,
        },
      });
    }
  );
};
