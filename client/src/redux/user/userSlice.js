import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signOutStart: (state) => {
      state.loading = true;
    },
    signOutSucess: (state, action) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    signOutFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
export const { signOutFailure, signOutStart, signOutSucess } =
  userSlice.actions;
export default userSlice.reducer;
