import axios from "axios";
import {
  PROFILE_GET_SUCCESS,
  PROFILE_GET_ERRORS,
  PROFILE_CLEAR,
} from "./types";
import Api from "../constants/index";
import { showLoader, hideLoader } from "../views/common/Loader";

const api = new Api();

export const profileData =
  (id = null) =>
  (dispatch) => {
    showLoader();
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
        hideLoader();
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
        hideLoader();
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
