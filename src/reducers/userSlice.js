import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {},
  isAuth: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload;
      state.isAuth = true;
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.currentUser = {};
      state.isAuth = false;
    },
  },
});
export const { setUser, logout } = userSlice.actions;
export const selectCurrentUser = (state) => state.user.currentUser;
export const selectIsAuth = (state) => state.user.isAuth;
export default userSlice.reducer;
