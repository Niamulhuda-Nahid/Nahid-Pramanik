import useCurrentUser from "@/hooks/useCurrentUser";
import { useGetCurrentUserQuery } from "@/Redux/endpoints/authApi";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
// import Loader from "@/components/common/Loader";

export default function PrivateRouter({ children }) {
  const location = useLocation();
  const user = useCurrentUser();
//   const { data: currentUser, isLoading, isFetching } = useGetCurrentUserQuery();
//   const userFromApi = currentUser?.data;

//   if (isLoading || isFetching) {
//     return <div>loading</div>;
//   }

  if (user) {
    return children;
  }

  return <Navigate to="/admin" />;
}
