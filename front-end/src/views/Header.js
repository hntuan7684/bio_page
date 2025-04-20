import React from 'react';
import "../public/css/header.css";

import NavBar from '../components/partials/navbar';

export default function Header() {
  return (
    <header className='header-container'>
      <NavBar />
    </header>
  );
}
