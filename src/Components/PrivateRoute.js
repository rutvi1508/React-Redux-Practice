import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoutes() {
  /*  let userid = localStorage.getItem("user") == null ? false : true; */
  let userid =
    JSON?.parse(localStorage?.getItem("user")) == null ? false : true;
  console.log(userid, "userid");
  return <>{userid ? <Outlet /> : <Navigate to="/" />}</>;
}

export default PrivateRoutes;
