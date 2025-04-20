import React from "react";
import "../../public/css/components/partials/navbar.css"; // Ensure the CSS path is correct
import logo from "../../public/img/logo.png"; // Correct image path for logo
import language_icon from "../../public/icon/language_icon.png"; // Correct image path for language icon


export default function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <div className="logo-container">
          <a href="/">
            <img src={logo} alt="Logo" className="logo" />
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
            <a href="/register">Sign Up</a>
          </div>

          <div className="language-container">
            <select>
              <option value="en">EN</option>
              <option value="vn">VN</option>
            </select>
            <img src={language_icon} alt="Language" className="language-icon" />
          </div>
        </div>
      </nav>
    </div>
  );
}
