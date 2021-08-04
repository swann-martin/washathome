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
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })),
};

Option.defaultProps = {
  name: '',
  onChange: () => { },
  options: [],
};

export default Option;
