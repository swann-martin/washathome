import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/Field';
import './styles.scss';

const SearchBar = ({ changeField, search }) => (
  <form
    className="searchbar"
  >
    <Field classn="searchbar-bar" value={search} name="search" onChange={changeField} placeholder="test entre ton code postal" />
    {/* <input
      className="searchbar-bar"
      type="search"
      placeholder="Entre ton code postal..."
    /> */}
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
};

SearchBar.defaultProps = {
  changeField: () => {},
  search: '',
};

export default SearchBar;
