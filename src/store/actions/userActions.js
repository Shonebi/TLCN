import actionTypes from "./actionTypes";

export const userLoginSuccess = () => ({
  type: actionTypes.USER_LOGIN_SUCCESS,
});

export const UserLoginFail = () => ({
  type: actionTypes.USER_LOGIN_FAIL,
});
export const processLogout = () => ({
  type: actionTypes.PROCESS_LOGOUT,
});
