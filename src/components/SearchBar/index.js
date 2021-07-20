import React from 'react';

import './styles.scss';

const SearchBar = () => (
  <form
    className="searchbar"
  >
    <input
      className="searchbar-bar"
      type="search"
      placeholder="Entre ton code postal..."
    />
    <button
      type="submit"
      className="searchbar-button"
    >
      <i className="fas fa-search-location" />
    </button>
  </form>
);

export default SearchBar;
