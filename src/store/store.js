import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userSlice";
import fileReducer from "../reducers/fileSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    file: fileReducer,
  },
});
