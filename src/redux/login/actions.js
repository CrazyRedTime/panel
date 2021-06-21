import { LOG_IN_FAILURE, LOG_IN_START, LOG_IN_SUCCESS, LOG_OUT_FAILURE, LOG_OUT_START, LOG_OUT_SUCCESS } from "./actionTypes";
import api from "../../api/api";
import Cookies from "js-cookie";

export const logIn = (username, password) => async (dispatch) => {
  dispatch({
    type: LOG_IN_START
  })
  try {
    const response = await api.logIn(username, password);
    Cookies.set('accessToken', response.data.access_token);
    Cookies.set('refreshToken', response.data.refresh_token);
    dispatch({
      type: LOG_IN_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: LOG_IN_FAILURE
    })
  }
};

export const logOut = () => async (dispatch) => {
  dispatch({
    type: LOG_OUT_START
  })
  try {
    const response = await api.logOut();
    console.log(response);
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    dispatch({
      type: LOG_OUT_SUCCESS,
    })
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOG_OUT_FAILURE
    })
  }
};