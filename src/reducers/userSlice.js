import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {},
  isAuth: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
