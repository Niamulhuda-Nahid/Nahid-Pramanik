import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",

  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
    // credentials: "include",

    prepareHeaders: (headers, { getState, endpoint }) => {
      const skipAuthEndpoints = [
        "userLogin",
        "verifyEmail",
        "userSignUp",
        "forgotPassword",
        "verifyOTPPassword",
        "verifyOtp",
        "resetPassword",
      ];

      if (skipAuthEndpoints.includes(endpoint)) {
        return headers;
      }

      const token = getState().auth.token;
      // console.log("Token in prepareHeaders:", token);

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  endpoints: () => ({}),
  tagTypes: ["auth", "projects"],
});
