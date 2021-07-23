import React from 'react';
import './style.scss';
import logo from 'src/assets/logoWash1.png';
import SearchBar from 'src/containers/SearchBar';

const Header = () => (
  <header className="header">
    <img className="header-logo" src={logo} alt="logo-Wash@Home" />
    <SearchBar />
  </header>
);
export default Header;
