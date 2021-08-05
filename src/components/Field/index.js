import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Field = ({
  onChange, name, value, placeholder, type, classn,
}) => {
  const handleFieldChange = (evt) => {
    onChange(evt.target.value, name);
  };
  const inputId = `field-${name}`;
  return (
    <div className="field">
      <label className="field-label" htmlFor={inputId}>
        <input
          className={classn}
          type={type}
          name={name}
          value={value}
          onChange={handleFieldChange}
          placeholder={placeholder}
        />
      </label>
    </div>
  );
};

Field.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  placeholder: PropTypes.string,
  type: PropTypes.string,
  classn: PropTypes.string,
};

Field.defaultProps = {
  onChange: () => {},
  name: '',
  value: '',
  placeholder: '',
  type: 'text',
  classn: 'field-input',
};
export default Field;
