import axios from "axios";
import { SERVICEDETAIL_GET_SUCCESS, SERVICEDETAIL_GET_ERRORS } from "./types";
import Api from "../constants/index";

const api = new Api();

export const serviceData =
  (id = null) =>
  (dispatch) => {
    let token = localStorage.jwtToken;
    let config = {
      method: "GET",
      url: `${api.getCurrentHost()}services/${id}`,
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    axios(config).then(
      (success) => {
        dispatch({
          type: SERVICEDETAIL_GET_SUCCESS,
          payload: {
            data: success.data,
            _error: "",
          },
        });
      },
      (error) => {
        dispatch({
          type: SERVICEDETAIL_GET_ERRORS,
          payload: {
            data: {},
            _error: error.data,
          },
        });
      }
    );
  };
