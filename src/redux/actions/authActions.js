import { apiLogin, apiRegister } from "~/api";
import {
  loginError,
  loginSuccess,
  loginStart,
  logoutSuccess,
  registerStart,
  registerError,
  registerSuccess,
} from "~/redux/slice/authSlice";
export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const { data } = await apiLogin(user);
    await dispatch(loginSuccess(data));
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch(loginError(error));
  }
};

export const logout = (dispatch) => {
  dispatch(logoutSuccess());
  localStorage.clear("userInfo");
};

export const register = async (user, dispatch) => {
  dispatch(registerStart());
  try {
    const res = await apiRegister(user);
    console.log(res);
    dispatch(registerSuccess());
  } catch (error) {
    dispatch(registerError());
  }
};
