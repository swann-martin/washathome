import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/Field';
import './styles.scss';

const SearchBar = ({ changeField, search, handleSearchSubmit }) => (
  <form
    className="searchbar"
    onSubmit={(e) => {
      e.preventDefault();
      handleSearchSubmit();
    }}
  >
    <Field classn="searchbar-bar" value={search} name="search" onChange={changeField} placeholder="Entre ton code postal" />
    <button
      type="submit"
      className="searchbar-button"
    >
      <i className="fas fa-search-location" />
    </button>
  </form>
);

SearchBar.propTypes = {
  changeField: PropTypes.func,
  search: PropTypes.string,
  handleSearchSubmit: PropTypes.func,
};

SearchBar.defaultProps = {
  changeField: () => {},
  search: '',
  handleSearchSubmit: () => {},
};

export default SearchBar;
