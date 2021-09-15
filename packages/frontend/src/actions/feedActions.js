import axios from "axios";
import {
  FEEDS_GET_SUCCESS,
  FEEDS_GET_ERRORS,
  FEEDS_ADD_ERROR,
  FEEDS_ADD_SUCCESS,
  COMMENT_ADD_SUCCESS,
  COMMENT_ADD_ERROR,
  LIKES_ADD_ERROR,
  LIKES_ADD_SUCCESS,
} from "./types";
import Api from "../constants/index";
import { showLoader, hideLoader } from "../views/common/Loader";

const api = new Api();

export const listFeed =
  (userData = 0, id = null) =>
  (dispatch) => {
    showLoader();
    let postedBy = id ? `&postedBy=${id}` : "";

    let token = localStorage.jwtToken;
    let config = {
      method: "GET",
      url: `${api.getCurrentHost()}feeds?_start=${userData}&_limit=10&_sort=createdAt:DESC${postedBy}`,
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
        hideLoader();
        dispatch({
          type: FEEDS_GET_ERRORS,
          payload: {
            _start: userData,
            _limit: 10,
            data: [],
            _error: error.data,
          },
        });
      }
    );
  };

export const addFeeds = (userData) => (dispatch) => {
  let token = localStorage.jwtToken;

  let config = {
    method: "POST",
    url: api.getCurrentHost() + "feeds",
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
        type: FEEDS_ADD_SUCCESS,
        payload: {
          data: success.data,
          _error: "",
        },
      });
    },

    (error) => {
      console.log("fetch data error");
      dispatch({
        type: FEEDS_ADD_ERROR,
        payload: {
          _error: error.data,
        },
      });
    }
  );
};

export const addComment = (userData) => (dispatch) => {
  let token = localStorage.jwtToken;

  let config = {
    method: "POST",
    url: api.getCurrentHost() + "comments",
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
        type: COMMENT_ADD_SUCCESS,
        payload: {
          data: success.data,
          _error: "",
        },
      });
    },
    (error) => {
      console.log("fetch data error");
      dispatch({
        type: COMMENT_ADD_ERROR,
        payload: {
          _error: error.data,
        },
      });
    }
  );
};

export const addLikes = (userData) => (dispatch) => {
  let token = localStorage.jwtToken;

  let config = {
    method: "POST",
    url: api.getCurrentHost() + "feed-likes",
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
        type: LIKES_ADD_SUCCESS,
        payload: {
          data: success.data,
          _error: "",
        },
      });
    },
    (error) => {
      console.log("fetch data error");
      dispatch({
        type: LIKES_ADD_ERROR,
        payload: {
          _error: error.data,
        },
      });
    }
  );
};
