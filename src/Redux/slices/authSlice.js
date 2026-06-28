import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: null,
  accessTokenExpiresAt: null,
  refreshToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    storeUserInfo: (state, action) => {
      state.token = action.payload.token || "";
      state.user = action.payload.user || null;
      state.accessTokenExpiresAt = action.payload.accessTokenExpiresAt || null;
      state.refreshToken = action.payload.refreshToken || null;
    },
    updateUserInfo: (state, action) => {
      // use this after profile update
      state.user = action.payload;
    },
    removeUserInfo: (state) => {
      state.token = null;
      state.user = null;
      state.accessTokenExpiresAt = null;
      state.refreshToken = null;
    },
  },
});

export const { storeUserInfo, updateUserInfo, removeUserInfo } = authSlice.actions;
export default authSlice.reducer;
