import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
// import jwt from "jwt-decode";
import jwt from "jwt-simple";
import {
  GET_ERRORS,
  GET_SUCCESS,
  SET_CURRENT_USER,
  USER_LOADING,
} from "./types";
import Api from "../constants/index";

const api = new Api();

export const loginUser = (userData) => (dispatch) => {
  console.log(dispatch);
  console.log("req with", userData);
  axios
    .post(api.getCurrentHost() + "auth/local", userData)
    .then((res) => {
      console.log(res, "res is");
      //const { token } = res.data;
      const secret = "FxUum76z";
      const payload = {
        jwt: res.data.jwt,
      };
      // encode
      const token = jwt.encode(payload, secret);

      localStorage.setItem("jwtToken", res.data.jwt);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      window.open("/homepage", "_self");
      // const decoded = jwt_decode(token);

      // decode
      const decoded = jwt.decode(token, secret);
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => {
      console.log(err.response);
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      });
    });
};

// signup sending
export const signupUser = (userData) => (dispatch) => {
  let config = {
    method: "POST",
    url: api.getCurrentHost() + "auth/local/register",
    data: userData,
    // headers: {
    // 	Authorization: 'Bearer ' + userData.token,
    // 	Accept: 'application/json',
    // 	'Content-Type': 'application/json'
    // }
  };
  console.log("CONFIG", config);
  axios(config).then(
    (success) => {
      console.log("SUCCESS", success);
      dispatch({
        type: GET_SUCCESS,
        payload: success,
      });
    },
    (error) => {
      console.log(error.response.data.errorMessage);
      dispatch({
        type: GET_ERRORS,
        payload: error,
      });
    }
  );
};

// otp verify
export const verifyUser = (userData) => (dispatch) => {
  console.log("req with", userData);
  axios
    .post(api.getCurrentHost() + "api/v1/users/verifyotp", userData)
    .then((res) => {
      console.log(res, "res is");
      //const { token } = res.data;
      const secret = "FxUum76z";
      const currentTime = Date.now() / 1000;
      const payload = {
        id: res.data.id,
        email: res.data.email,
        user_type: res.data.user_type,
        token: res.data.token,
        name: res.data.name,
        expires: currentTime + 604800,
      };
      // encode
      const token = jwt.encode(payload, secret);

      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      // window.open('/dashboard', '_self');
      //const decoded = jwt_decode(token);

      // decode
      const decoded = jwt.decode(token, secret);
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => {
      console.log(err.response.data.errorMessage);
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      });
    });
};

export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};

export const logoutUser = (logoutData) => (dispatch) => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  let config = {
    method: "DELETE",
    url: api.getCurrentHost() + "api/v1/users/logout",
    data: logoutData,
    headers: {
      Authorization: "Bearer " + logoutData.token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  axios(config).then(
    (success) => {
      console.log("SUCCESSfully logout");
      dispatch({
        type: GET_SUCCESS,
        payload: success,
      });
    },
    (error) => {
      console.log("ERROR");
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data,
      });
    }
  );
};
