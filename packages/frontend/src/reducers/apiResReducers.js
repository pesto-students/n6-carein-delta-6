import {
  EVENTS_GET_ERRORS,
  FEEDS_GET_SUCCESS,
  FEEDS_GET_ERRORS,
  EVENTS_GET_SUCCESS,
  FRIENDS_GET_SUCCESS,
  FRIENDS_N_GET_SUCCESS,
  FRIENDS_GET_ERRORS,
  FRIENDS_N_GET_ERRORS,
  FEEDS_ADD_ERROR,
  FEEDS_ADD_SUCCESS,
  PROFILE_GET_SUCCESS,
  PROFILE_GET_ERRORS,
} from "../actions/types";
const initialState = {
  feeds: {
    _start: 0,
    _limit: 10,
    data: [],
    _error: "",
  },
  events: {
    _start: 0,
    _limit: 10,
    data: [],
    _error: "",
  },
  friends: {
    data: {},
    _error: "",
  },
  friendsN: {
    data: {},
    _error: "",
  },
  posts: {
    data: {},
    _error: ""
  },
  profile: {
    data: {},
    _error: "",
  },
  comment: {
    data: {},
    _error:""
  }
};

export default function (state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case FEEDS_GET_SUCCESS:
      console.log("action FEEDS_GET_SUCCESS", action.payload);
      return {
        ...state,
        feeds: {
          _start: action.payload._start,
          _limit: action.payload._limit,
          data: action.payload.data,
          _error: "",
        },
      };
    case FEEDS_GET_ERRORS:
      console.log("reducer FEEDS_GET_ERRORS", action.payload);
      return {
        ...state,
        feeds: {
          _start: action.payload._start,
          _limit: action.payload._limit,
          data: action.payload.data,
          _error: action.payload._error,
        },
      };
    case FEEDS_ADD_SUCCESS:
      console.log("reducer FEEDS_ADD_SUCCESS",state, action.payload);
      return {
        ...state,
        feeds: {
          ...state.feeds,
          data: state.feeds.data.push(action.payload.data.request), 
          _error:""
        }
      };  
    case FEEDS_ADD_ERROR:
      console.log("reducer FEED_ADD_ERROR", FEEDS_ADD_ERROR);
      return {
        ...state,
        posts: {
          data: action.payload.data,
          _error:action.payload._error
        }
      }  
    case EVENTS_GET_SUCCESS:
      console.log("action EVENTS_GET_SUCCESS", action.payload);
      return {
        ...state,
        events: {
          _start: action.payload._start,
          _limit: action.payload._limit,
          data: action.payload.data,
          _error: "",
        },
      };
    case EVENTS_GET_ERRORS:
      console.log("reducer EVENTS_GET_ERRORS", action.payload);
      return {
        ...state,
        events: {
          _start: action.payload._start,
          _limit: action.payload._limit,
          data: action.payload.data,
          _error: action.payload._error,
        },
      };
    case FRIENDS_GET_SUCCESS:
      console.log("action FRIENDS_GET_SUCCESS", action.payload);
      return {
        ...state,
        friends: {
          data: action.payload.data,
          _error: "",
        },
      };
    case FRIENDS_GET_ERRORS:
      console.log("reducer FRIENDS_GET_ERRORS", action.payload);
      return {
        ...state,
        friends: {
          data: action.payload.data,
          _error: action.payload._error,
        },
      };
    case FRIENDS_N_GET_SUCCESS:
      console.log("action FRIENDS_N_GET_SUCCESS", action.payload);

      return {
        ...state,
        friendsN: {
          data: action.payload.data,
          _error: "",
        },
      };
    case FRIENDS_N_GET_ERRORS:
      console.log("reducer FRIENDS_N_GET_ERRORS", action.payload);
      return {
        ...state,
        friendsN: {
          data: action.payload.data,
          _error: action.payload._error,
        },
      };
    case PROFILE_GET_SUCCESS:
      console.log("action FRIENDS_N_GET_SUCCESS", action.payload);

      return {
        ...state,
        profile: {
          data: action.payload.data,
          _error: "",
        },
      };
    case PROFILE_GET_ERRORS:
      console.log("reducer FRIENDS_N_GET_ERRORS", action.payload);
      return {
        ...state,
        profile: {
          data: action.payload.data,
          _error: action.payload._error,
        },
      };
    default:
      return state;
  }
}
