import {
  SET_CURRENT_USER,
  USER_ADD,
  USER_LOADING,
  USER_UPDATE,
  GET_SUCCESS,
  GET_ERRORS,
} from "../actions/types";
const isEmpty = require("is-empty");
const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
  error: null,
};
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case USER_ADD:
      return {
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case USER_UPDATE:
      return {
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_SUCCESS:
      return {
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case GET_ERRORS:
      return {
        isAuthenticated: !isEmpty(action.payload),
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
