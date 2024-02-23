import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  initialState: false,
  name: "auth",
  reducers: {
    auth: (state, action) => {
        return state = action.payload;
    },
  },
});
export const { auth } = authSlice.actions;
export default authSlice.reducer;
