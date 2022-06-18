import "./Navbar.scss";
import { Link } from "react-router-dom";
import { AiOutlineCloudServer } from "react-icons/ai";

import React from "react";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar df jcsb aic">
        <Link className="navbar__link df aic" to="/">
          <AiOutlineCloudServer className="navbar__logo" />
          <span className="navbar__logo navbar__logo_text">Cloud Disk</span>
        </Link>
        <div className="navbar__right">
          <Link className="navbar__link" to="/login">
            Login
          </Link>
          <Link className="navbar__link" to="/registration">
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
