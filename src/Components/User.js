import React from "react";
import { useLocation, useNavigate } from "react-router-dom"

function User() {
  const location = useLocation();

  console.log("LOCAOSAJNAND", location);

  const navigate = useNavigate();

  const login = () => {
   /* localStorage.setItem("user", 1); */
   /*  localStorage.setItem('user', 'test')  */
   localStorage.setItem("user", JSON?.stringify(1));
    navigate('/home');
  };
  return (
    <div className="login">
      <h2>Welcome to login page! </h2>
      <p>Please login to continue</p>
      <button onClick={() => login()}> Login</button>
    </div>
  );
}

export default User;
