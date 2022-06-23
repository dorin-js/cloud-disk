import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  files: [],
  currentDir: null,
};
const fileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {
    setFiles: (state, action) => {
      state.files = action.payload;
    },
    setCurrentDir: (state, action) => {
      state.currentDir = action.payload;
    },
  },
});

export const { setFiles, setCurrentDir } = fileSlice.actions;

export default fileSlice.reducer;
