import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { AiOutlineCloudServer } from "react-icons/ai";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsAuth } from "../../reducers/userSlice";

const Navbar = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <nav className="navbar df jcsb aic">
        <NavLink className="navbar__link df aic" to="/">
          <AiOutlineCloudServer className="navbar__logo" />
          <span className="navbar__logo navbar__logo_text">Cloud Disk</span>
        </NavLink>
        <div className="navbar__right">
          {!isAuth && (
            <NavLink className="navbar__link" to="/login">
              Login
            </NavLink>
          )}
          {!isAuth && (
            <NavLink className="navbar__link" to="/registration">
              Register
            </NavLink>
          )}
          {isAuth && (
            <span className="navbar__link" onClick={() => dispatch(logout())}>
              Log out
            </span>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
