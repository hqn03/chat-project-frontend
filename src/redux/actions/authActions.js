import { toast } from "react-toastify";
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
    toast.success("Dang nhap thanh cong");
  } catch (error) {
    dispatch(loginError());
    toast.error("Dang nhap that bai");
  }
};

export const logout = (dispatch) => {
  dispatch(logoutSuccess());
  localStorage.clear("userInfo");
};

export const register = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    const { data } = await apiRegister(user);
    dispatch(registerSuccess());
    toast.success(data?.message);
    navigate("/login");
  } catch (error) {
    dispatch(registerError());
    toast.error("Dang ky that bai");
  }
};
