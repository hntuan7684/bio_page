import React, { useState } from "react"; // Để sử dụng useState
import { Link } from 'react-router-dom';

import "../../public/css/components/partials/navbar.css";
import logo from "../../public/icon/logo.png";
import language_icon from "../../public/icon/language_icon.png";
function NavBar() {
  const [language, setLanguage] = useState("EN"); // State để lưu trữ ngôn ngữ

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value); // Cập nhật ngôn ngữ khi thay đổi
  };

  return (
    <div className="navbar">
      <div className="logo-container">
        <Link href="/">
            <img src={logo} width={100}></img>
        </Link>
      </div>
      <nav >
        <ul>
          <li>
            <Link href="/" aria-label="Go to home page">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" aria-label="Go to about page">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" aria-label="Go to contact page">
              Contact
            </Link>
          </li>
          <li>
          <Link href="/login" aria-label="Go to login page">
              Log In
            </Link>
          </li>
          <li className="register-container">
            <Link href="/register" aria-label="Go to register page">
              Register
            </Link>
          </li>
          <img src={language_icon} alt="Language icon" width={22} />
          <li className="language-container">
            <select value={language} onChange={handleLanguageChange}>
              <option value="EN">EN</option>
              <option value="VN">VN</option>
            </select>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
