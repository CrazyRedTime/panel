export const getIsLoggedIn = (state) => {
  return state.login.isLoggedIn;
}

export const getLoginError = (state) => {
  return state.login.loginError;
}

export const getLoginInProgress = (state) => {
  return state.login.isFetching;
};