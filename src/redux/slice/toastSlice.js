import { createSlice } from "@reduxjs/toolkit";

const initState = {
  show: false,
  message: null,
};

const authSlice = createSlice({
  name: "toast",
  initialState: initState,
  reducers: {},
});

export const {} = authSlice.actions;

export default authSlice.reducer;
