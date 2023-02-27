import { Routes, Route, NavLink,Navigate, useNavigate, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import User from "./Components/User";
import Error from "./Components/Error";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  
  return (
    <div className="App">
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/aboutus">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

      <Routes>
      {/*  <Route path="/" element={<ProtectedRoutes />} />  */}
        <Route exact element={<PrivateRoute />}>
          <Route  path="/home" element={<Home />} />
          <Route  path="/aboutus" element={<AboutUs />} />
          <Route  path="/contact" element={<Contact />} />
        </Route>

        <Route path="/" element={<User />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
