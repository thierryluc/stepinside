import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="StepInside Logo" className="logo" />
      </div>
      <div className="navbar-right">
        <span className="location">CAPE TOWN, WESTERN CAPE</span>
        <div className="price-tag">R5 193 000.00</div>
      </div>
    </nav>
  );
}

export default Navbar;
