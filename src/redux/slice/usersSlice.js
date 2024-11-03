import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "chat",
  initialState: {
    users: [],
    isPending: false,
    error: null,
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
