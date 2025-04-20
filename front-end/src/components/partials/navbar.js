import React from "react";
import "../../public/css/components/partials/navbar.css";

import logo from "../../public/icon/logo.png";
import language_icon from "../../public/icon/language_icon.png";
function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <div className="logo-container">
          <a href="/">
            <img src={logo} alt="Logo" width={100} />
          </a>
        </div>
        <div></div>

        <div className="tab-container">
          <ul className="navbar-tab">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>

          <div className="register-container">
            <div>Sign Up</div>
          </div>

          <div className="language-container">
            <select>
              <option value="en">EN</option>
              <option value="vn">VN</option>
            </select>
            <img src={language_icon} alt="Language" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
