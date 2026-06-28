import { RouterProvider } from "react-router-dom";
import { useAuthAutoLogout } from "./hooks/useAuthAutoLogout";
import router from "./router/router";


const Root = () => {
  useAuthAutoLogout();

  return <RouterProvider router={router} />;
};

export default Root;