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
  FEEDS_COUNT_SUCCESS,
  FEEDS_COUNT_ERRORS,
} from "./types";
import Api from "../constants/index";

const api = new Api();

export const listFeed =
  (userData = 0, id = null) =>
  (dispatch) => {
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
        dispatch({
          type: FEEDS_GET_SUCCESS,
          payload: {
            _sstart: userData,
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
            data: [],
            _error: error.data,
          },
        });
      }
    );
  };

export const countFeed =
  (userData = 0, id = null) =>
  (dispatch) => {
    let postedBy = id ? `&postedBy=${id}` : "";

    let token = localStorage.jwtToken;
    let config = {
      method: "GET",
      url: `${api.getCurrentHost()}feeds/count`,
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
          type: FEEDS_COUNT_SUCCESS,
          payload: {
            data: success.data,
          },
        });
      },
      (error) => {
        console.log("fetch data error");

        dispatch({
          type: FEEDS_COUNT_ERRORS,
          payload: {
            data: 0,
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
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {};
  let comment = {
    comment: userData.comment,
    user: user,
    feed: userData.feed,
  };
  dispatch({
    type: COMMENT_ADD_SUCCESS,
    payload: {
      data: comment,
      _error: "",
    },
  });

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

export const addLikes = (feedId) => (dispatch) => {
  let token = localStorage.jwtToken;
  let user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {};
  let like = {
    feed: feedId,
    user: user.id,
  };
  dispatch({
    type: LIKES_ADD_SUCCESS,
    payload: {
      data: like,
      _error: "",
    },
  });
  let config = {
    method: "POST",
    url: api.getCurrentHost() + "feed-likes",
    data: like,
    headers: {
      Authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  axios(config).then(
    (success) => {
      console.log("fetch data success");
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
