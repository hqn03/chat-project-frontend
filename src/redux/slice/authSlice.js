import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import { _currentUser } from "~/_fakeData";
import { logout } from "../actions/authActions";

const initState = {
  user: JSON.parse(localStorage.getItem("userInfo")) || null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    loginError: (state) => {
      console.log("loi login");
      state.loading = false;
    },
    logoutSuccess: (state) => {
      state.user = null;
    },
    registerStart: (state) => {
      state.loading = true;
    },
    registerSuccess: (state) => {
      state.loading = false;
    },
    registerError: (state) => {
      state.loading = false;
    },
  },
});

export const {
  loginStart,
  loginError,
  loginSuccess,
  logoutSuccess,
  registerStart,
  registerSuccess,
  registerError,
} = authSlice.actions;

export default authSlice.reducer;
