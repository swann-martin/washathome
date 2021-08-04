import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Option = ({ options, onChange, name }) => (
  <div className="option">
    <select className="option-select" name={name} onChange={onChange}>
      {
        options.map((option) => (
          <option key={option.id} value={option.id} className="option-select-option">{`${option.name} + ${option.price} €`}</option>
        ))
                }

    </select>
  </div>
);

Option.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
};

export default Option;
