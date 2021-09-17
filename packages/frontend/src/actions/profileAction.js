import axios from "axios";
import {
  PROFILE_GET_SUCCESS,
  PROFILE_GET_ERRORS,
  PROFILE_CLEAR,
} from "./types";
import Api from "../constants/index";

const api = new Api();

export const profileData =
  (id = null) =>
  (dispatch) => {
    dispatch({
      type: PROFILE_CLEAR,
      payload: {
        data: {},
        _error: "",
      },
    });
    let token = localStorage.jwtToken;
    let config = {
      method: "GET",
      url: `${api.getCurrentHost()}users/${id}`,
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
          type: PROFILE_GET_SUCCESS,
          payload: {
            data: success.data,
            _error: "",
          },
        });
      },
      (error) => {
        console.log("fetch data error");

        dispatch({
          type: PROFILE_GET_ERRORS,
          payload: {
            data: {},
            _error: error.data,
          },
        });
      }
    );
  };
