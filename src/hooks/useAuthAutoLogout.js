import { baseApi } from "@/Redux/api";
import { removeUserInfo } from "@/Redux/slices/authSlice";
import { persistor } from "@/Redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useAuthAutoLogout = () => {
  const dispatch = useDispatch();

  const expiresAt = useSelector(
    (state) => state.auth.accessTokenExpiresAt
  );

  // console.log("useAuthAutoLogout - expiresAt:", expiresAt);

  const isValid = Date.now() < expiresAt;
  // console.log("useAuthAutoLogout - isValid:", isValid); 

//   console.log(expiresAt - Date.now())

  useEffect(() => {
    if (!expiresAt) return;

    const logout = async () => {
      dispatch(removeUserInfo());

      // clear api cache
      dispatch(baseApi.util.resetApiState());

       // clear persisted localStorage
      await persistor.purge();

      // SAFE redirect (no router dependency)
      window.location.href = "/";
    };

    const now = Date.now();

    // already expired → logout immediately
    if (now >= expiresAt) {
      logout();
      return;
    }

    // schedule logout
    const timeout = setTimeout(() => {
      logout();
    }, expiresAt - now);

    return () => clearTimeout(timeout);
  }, [expiresAt, dispatch]);
};