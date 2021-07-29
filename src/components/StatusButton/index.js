import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const StatusButton = ({ onClick, value, name }) => (
  <button type="button" value={value} onClick={onClick}>{name}</button>
);
StatusButton.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.number,
  name: PropTypes.string,
};

StatusButton.defaultProps = {
  onClick: () => { },
  value: null,
  name: '',
};

export default StatusButton;
