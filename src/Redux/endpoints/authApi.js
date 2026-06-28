import { baseApi } from "../api";
import { removeUserInfo, storeUserInfo, updateUserInfo } from "../slices/authSlice";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // login endpoint
    userLogin: build.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const expiresAt = Date.now() + 24 * 60 * 60 * 1000;

          dispatch(
            storeUserInfo({
              token: data.token || "",
              user: data.data || null,
              accessTokenExpiresAt: expiresAt,
            }),
          );
        } catch (error) {
          console.log("Error storing user info:", error);
        }
      },
    }),

    // signup endpoint
    userSignUp: build.mutation({
      query: (data) => ({
        url: "/register/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),

    // verify email endpoint
    verifyEmail: build.mutation({
      query: (data) => ({
        url: "/verify-email",
        method: "POST",
        body: data,
      }),
    }),

    // resend OTP endpoint
    resendOTP: build.mutation({
      query: (data) => ({
        url: `/resend-otp/`,
        method: "POST",
        body: data,
      }),
    }),

    // forgot password endpoint
    forgotPassword: build.mutation({
      query: (data) => ({
        url: "/forgot-password/",
        method: "POST",
        body: data,
      }),
    }),

    // verify OTP endpoint
    verifyOtp: build.mutation({
      query: (data) => ({
        url: `/verify-otp/`,
        method: "POST",
        body: data,
      }),
    }),

    // reset password endpoint
    resetPassword: build.mutation({
      query: (data) => ({
        url: `/set-new-password/`,
        method: "POST",
        body: data,
      }),
    }),

    // change password endpoint
    changePassword: build.mutation({
      query: (data) => ({
        url: `/change-password/`,
        method: "PUT",
        body: data,
      }),
    }),

    // logout endpoint
    userLogout: build.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["auth"],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;

          // clear redux auth
          dispatch(removeUserInfo());

          // clear RTK Query cache
          dispatch(baseApi.util.resetApiState());
        } catch (error) {
          console.log("Error during logout:", error);
        }
      },
    }),

    // delete account endpoint
    userDeleteAccount: build.mutation({
      query: (params) => ({
        url: `/delete-profile?password=${params.password}`,
        method: "DELETE",
      }),
      invalidatesTags: ["auth"],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(removeUserInfo());
        } catch (error) {
          console.log("Error during account deletion:", error);
        }
      },
    }),

    // get current user endpoint
    getCurrentUser: build.query({
      query: () => ({
        url: "/owner-profile/",
        method: "GET",
      }),
      providesTags: ["auth"],
    }),

    // update profile endpoint
    updateProfile: build.mutation({
      query: (data) => ({
        url: "/profile/update/",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["auth"],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(updateUserInfo(data.user));
        } catch (error) {
          console.log("Error updating user info:", error);
        }
      },
    }),
  }),
});

export const {
  useUserLoginMutation,
  useUserSignUpMutation,
  useVerifyEmailMutation,
  useForgotPasswordMutation,
  useVerifyOtpMutation,
  useResendOTPMutation,
  useResetPasswordMutation,
  useChangePasswordMutation,
  useUserLogoutMutation,
  useUserDeleteAccountMutation,
  useGetCurrentUserQuery,
  useUpdateProfileMutation,
} = authApi;
