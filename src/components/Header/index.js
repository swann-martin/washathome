import React from 'react';
import './style.scss';

import SearchBar from 'src/components/SearchBar';

const Header = () => (
  <header className="header">
    <h2>Header</h2>
    <SearchBar />
  </header>
);
export default Header;
