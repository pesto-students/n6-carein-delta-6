import {
  EVENTS_GET_ERRORS,
  FEEDS_GET_SUCCESS,
  FEEDS_GET_ERRORS,
  COMMENT_ADD_ERROR,
  COMMENT_ADD_SUCCESS,
  LIKES_ADD_SUCCESS,
  LIKES_ADD_ERROR,
  EVENTS_GET_SUCCESS,
  FRIENDS_GET_SUCCESS,
  FRIENDS_N_GET_SUCCESS,
  FRIENDS_GET_ERRORS,
  FRIENDS_N_GET_ERRORS,
  FEEDS_ADD_ERROR,
  FEEDS_ADD_SUCCESS,
  PROFILE_GET_SUCCESS,
  PROFILE_GET_ERRORS,
  SERVICES_GET_ERRORS,
  SERVICES_GET_SUCCESS,
  PROFILE_CLEAR,
  SERVICEDETAIL_GET_SUCCESS,
  SERVICEDETAIL_GET_ERRORS,
  SEARCH_GET_SUCCESS,
  SEARCH_GET_ERRORS,
  FEEDS_COUNT_SUCCESS,
  FEEDS_COUNT_ERRORS,
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
  services: {
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
    _error: "",
  },
  profile: {
    data: {},
    _error: "",
  },
  serviceDetails: {
    data: [],
    _error: "",
  },
  search: {
    data: [],
    _error: "",
  },

  comment: {
    data: {},
    _error: "",
  },

  addService: {
    data: [],
    _error: "",
  },

  likes: {
    data: {},
    _error: "",
  },
  feedCount: {
    data: 0,
  },
};

export default function apiResReducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case FEEDS_GET_SUCCESS:
      console.log("action FEEDS_GET_SUCCESS", action.payload);
      if (action.payload._start == 0) {
        return {
          ...state,
          feeds: {
            _start: action.payload._start,
            _limit: action.payload._limit,
            data: action.payload.data,
            _error: "",
          },
        };
      } else {
        return {
          ...state,
          feeds: {
            _start: action.payload._start,
            _limit: action.payload._limit,
            data: [...state.feeds.data, ...action.payload.data],
            _error: "",
          },
        };
      }

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
    case FEEDS_COUNT_SUCCESS:
      console.log("action FEEDS_COUNT_SUCCESS", action.payload);
      return {
        ...state,
        feedCount: {
          data: action.payload.data,
        },
      };
    case FEEDS_COUNT_ERRORS:
      console.log("reducer FEEDS_COUNT_ERRORS", action.payload);
      return {
        ...state,
        feedCount: {
          data: action.payload.data,
        },
      };
    case FEEDS_ADD_SUCCESS:
      console.log("reducer FEEDS_ADD_SUCCESS", state, action.payload);
      let newState = [action.payload.data.request].concat(state.feeds.data);
      return {
        ...state,
        feeds: {
          _error: "",
          ...state.feeds,
          data: newState,
        },
      };
    case FEEDS_ADD_ERROR:
      console.log("reducer FEED_ADD_ERROR", FEEDS_ADD_ERROR);
      return {
        ...state,
        posts: {
          data: action.payload.data,
          _error: action.payload._error,
        },
      };
    case COMMENT_ADD_SUCCESS:
      console.log("reducer COMMENT_ADD_SUCCESS", action.payload);
      let feedIndex = state.feeds.data.findIndex((e) => {
        return e.id == action.payload.data.feed;
      });
      let newStateComment = [].concat(state.feeds.data[feedIndex].comments, [
        action.payload.data,
      ]);
      state.feeds.data[feedIndex].comments = newStateComment;
      console.log(state.feeds.data[feedIndex]);
      return {
        ...state,
        feeds: {
          _error: "",
          ...state.feeds,
          data: state.feeds.data,
        },
      };
    case COMMENT_ADD_ERROR:
      console.log("reducer COMMENT_ADD_ERROR", COMMENT_ADD_ERROR);
      return {
        ...state,
        comment: {
          _error: action.payload._error,
        },
      };
    case LIKES_ADD_ERROR:
      console.log("reducer LIKEs_ADD_ERROR", LIKES_ADD_ERROR);
      return {
        ...state,
        likes: {
          _error: action.payload._error,
        },
      };
    case LIKES_ADD_SUCCESS:
      console.log("reducer COMMENT_ADD_ERROR", LIKES_ADD_SUCCESS);
      let feedLikeIndex = state.feeds.data.findIndex((e) => {
        return e.id == action.payload.data.feed;
      });

      let newStateLikes = [action.payload.data].concat(
        state.feeds.data[feedLikeIndex].likes
      );
      state.feeds.data[feedLikeIndex].likes = newStateLikes;
      console.log(state.feeds.data[feedLikeIndex]);
      return {
        ...state,
        feeds: {
          _error: "",
          ...state.feeds,
          data: state.feeds.data,
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
    case PROFILE_CLEAR:
      console.log("action PROFILE_CLEAR", action.payload);

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
    case SERVICES_GET_SUCCESS:
      console.log("action SERVICES_GET_SUCCESS", action.payload);
      return {
        ...state,
        services: {
          _start: action.payload._start,
          _limit: action.payload._limit,
          data: action.payload.data,
          _error: "",
        },
      };
    case SERVICES_GET_ERRORS:
      console.log("reducer SERVICES_GET_ERRORS", action.payload);
      return {
        ...state,
        services: {
          _start: action.payload._start,
          _limit: action.payload._limit,
          data: action.payload.data,
          _error: action.payload._error,
        },
      };

    case SERVICEDETAIL_GET_SUCCESS:
      console.log("action SERVICEDETAIL_GET_SUCCESS", action.payload);

      return {
        ...state,
        serviceDetails: {
          data: action.payload.data,
          _error: "",
        },
      };
    case SERVICEDETAIL_GET_ERRORS:
      console.log("reducer SERVICEDETAIL_GET_ERRORS", action.payload);
      return {
        ...state,
        serviceDetails: {
          data: action.payload.data,
          _error: action.payload._error,
        },
      };

    case SEARCH_GET_SUCCESS:
      console.log("action SEARCH_GET_SUCCESS", action.payload);
      return {
        ...state,
        search: {
          data: action.payload.data,
          _error: "",
        },
      };
    case SEARCH_GET_ERRORS:
      console.log("reducer SEARCH_GET_ERRORS", action.payload);
      return {
        ...state,
        search: {
          data: action.payload.data,
          _error: action.payload._error,
        },
      };

    default:
      return state;
  }
}
