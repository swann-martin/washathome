import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Field = ({
  onChange, name, value, placeholder,
}) => {
  const handleFieldChange = (evt) => {
    onChange(evt.target.value, name);
  };
  const inputId = `field-${name}`;
  return (
    <div className="field">
      <label className="field-label" htmlFor={inputId}>
        <input className="field-input" type="text" name={name} value={value} onChange={handleFieldChange} placeholder={placeholder} />
      </label>
    </div>
  );
};

Field.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

Field.defaultProps = {
  onChange: () => {},
  name: '',
  value: '',
  placeholder: '',
};
export default Field;
