import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div>Logo</div>

      <div className="navbar-button-wrapper">
        <button className="navbar-button">Cart</button>
        <button className="navbar-button">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
