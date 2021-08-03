import React from 'react';
import PropTypes from 'prop-types';
import Option from 'src/components/Option';
import './styles.scss';

const Options = ({ option1, option2, option3, options, onChange }) => (
  <div className="options">
    <h4 className="options-title">Options disponibles</h4>
    <Option name="option1" value={option1} onChange={onChange} options={options} />
    <Option name="option2" value={option2} onChange={onChange} options={options} />
    <Option name="option3" value={option3} onChange={onChange} options={options} />
  </div>
);

Options.propTypes = {
  option1: PropTypes.string,
  option2: PropTypes.string,
  option3: PropTypes.string,
};

Options.defaultProps = {
  option1: 'option1',
  option2: 'option2',
  option3: 'option3',
};

export default Options;
