import {LOG_IN_FAILURE, LOG_IN_START, LOG_IN_SUCCESS, LOG_OUT_START, LOG_OUT_SUCCESS} from './actionTypes'

const initialState = {
  isLoggedIn: false,
  isFetching: false,
  loginError: false,
  logoutError: false
};

const login = (state = initialState, {type, payload}) => {
  switch (type) {

    case LOG_IN_START:
      return {
        ...state,
        isLoggedIn: false,
        isFetching: true,
        loginError: false,
      }

    case LOG_IN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isFetching: false,
      };

    case LOG_IN_FAILURE:
      return {
        ...state,
        isFetching: false,
        loginError: true,
      }

    case LOG_OUT_START:
      return {
        ...state,
        isFetching: true,
      };

    case LOG_OUT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: false
      };
  
    default:
      return state;
  }
};

export default login;