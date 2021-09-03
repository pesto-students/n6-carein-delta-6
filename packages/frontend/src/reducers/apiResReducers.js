import {
  EVENTS_GET_ERRORS,
  FEEDS_GET_SUCCESS,
  FEEDS_GET_ERRORS,
  EVENTS_GET_SUCCESS,
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
};

export default function (state = initialState, action) {
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
          data: [...state.events.data, ...action.payload.data],
          _error: action.payload._error,
        },
      };
    default:
      return state;
  }
}
