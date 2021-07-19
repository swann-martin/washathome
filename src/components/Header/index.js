import React from 'react';
import './style.scss';
import logo from 'src/assets/logoWash.png';

const Header = () => (
  <header className="header">
    <h2>Header</h2>
    <img className="header-logo" src={logo} alt="logo-Wash@Home" />
  </header>
);
export default Header;
