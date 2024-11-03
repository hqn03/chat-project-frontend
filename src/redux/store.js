import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./slice/chatSlice";
import usersReducer from "./slice/usersSlice";
export const store = configureStore({
  reducer: {
    chat: chatReducer,
    users: usersReducer,
  },
});
