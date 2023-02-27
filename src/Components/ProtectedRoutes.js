import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  /* const user = localStorage.getItem("user");  */
  const user = JSON?.parse(localStorage?.getItem("user")) ;
  console.log(user, "user");
  if (user) {
    return true;
  } else {
    return false;
  }
};

const ProtectedRoutes = () => {
  const auth = useAuth();

  return auth ? <Navigate to="/user" /> : <Outlet />;
};

export default ProtectedRoutes;
