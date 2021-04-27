import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/iips_logo2.png";

const Navbar = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const logout = () => {
    localStorage.clear("token");
  };
  console.log(localStorage.getItem("token"));
  console.log(token);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} className="logo" />
            <strong>IIPS SPACE</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/uploadNotes"
                >
                  Upload Notes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/about"
                  activeClassName="active"
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>

              {!localStorage.getItem("token") ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/login"
                    >
                      Login
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/register"
                    >
                      Register
                    </NavLink>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <NavLink
                    onClick={logout}
                    className="nav-link"
                    activeClassName="active"
                    to="/register"
                  >
                    Logout
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
