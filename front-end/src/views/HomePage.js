import React from "react";


import "../public/css/views/HomePage.css";

import Header from "./Header";
export default function HomePage() {
  return (
    <div className="HomePage">
      <Header />
      <div className="body-container">
        <div className="welcome-container">
          <div className="welcome-content">
            <h1>Welcome!</h1>
            <p>Explore my biography and discover more about my life and experiences. <br></br>This page provides detailed insights into who I am and what I’ve accomplished.</p>
          </div>
          <div className="search-container">
            <div class="input-box">
              <i class="uil uil-search"></i>
              <input type="text" placeholder="Search here..." />
              <button class="button">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
