import React from 'react';

import './styles.scss';

const SearchBar = () => (
  <form className="searchbar">
    <input className="searchbar-bar" type="search" placeholder="Entre ton code postal..." />
    <input className="search-button" type="submit" value="Rechercher" />
  </form>
);

export default SearchBar;
