import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Option = ({ options }) => (
  <div className="option">
    <select className="option-select">
      {
                    options.map((option) => (
                      <option key={option.title} value={option.title} className="option-select-option">{`${option.title} + ${option.price} €`}</option>
                    ))
                }

    </select>
  </div>
);

Option.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
};

export default Option;
