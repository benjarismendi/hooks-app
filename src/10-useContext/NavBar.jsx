import React from "react";
import { NavLink, Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark rounded-3">
      <div className="container-fluid">
        <Link to="/">useContext</Link>

        <div className="navbar-nav">
          <NavLink className={({isActive})=> {
            isActive ? 'nav-link active' : 'nav-link'
          }} to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
