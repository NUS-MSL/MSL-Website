import React from "react";
import { NavLink } from "react-router-dom";
import "../../../static/css/navbar/wide-viewport-navbar.css"; 
import logo from "../../../static/images/Msl-Logo.png"; 

function WideViewportNavbar() {
  return (
    <section id="wide-viewport-navbar-section">
      <nav id="wide-viewport-navbar">
        <div className="wide-viewport-navbar-logo-container">
          <NavLink to="/">
            <img src={logo} alt="Logo" id="wide-viewport-navbar-logo"/>
          </NavLink>
        </div>
        <ul className="wide-viewport-navbar-list">
          <li className="wide-viewport-navbar-item">
            <NavLink 
              to="/" 
              className={({isActive}) => isActive ? "wide-viewport-navbar-link-active": "wide-viewport-navbar-link"} 
              exact="true"
            >
              Home
            </NavLink>
          </li>
          <li className="wide-viewport-navbar-item">
            <NavLink 
              to="/about" 
              className={({isActive}) => isActive ? "wide-viewport-navbar-link-active": "wide-viewport-navbar-link"} 
            >
              About Us
            </NavLink>
          </li>
          <li className="wide-viewport-navbar-item">
            <NavLink 
              to="/events" 
              className={({isActive}) => isActive ? "wide-viewport-navbar-link-active": "wide-viewport-navbar-link"} 
            >
              Events
            </NavLink>
          </li>
          <li className="wide-viewport-navbar-item">
            <NavLink 
              to="/contact" 
              className={({isActive}) => isActive ? "wide-viewport-navbar-link-active": "wide-viewport-navbar-link"} 
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default WideViewportNavbar;
