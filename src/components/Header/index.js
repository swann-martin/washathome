import React from 'react';
import './style.scss';
import logo from 'src/assets/logoWash.png';
import Card from 'src/components/Card';
import SearchBar from 'src/components/SearchBar';

const Header = () => (
  <header className="header">
    <img className="header-logo" src={logo} alt="logo-Wash@Home" />
    <SearchBar />
    <Card />

  </header>
);
export default Header;
