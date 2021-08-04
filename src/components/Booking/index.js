import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

const Booking = ({
  id,
  name,
  price,
  status,
  statusId,
  link,
}) => (
  <Link
    key={id}
    className="booking"
    to={link}
  >
    <div className="booking-content">
      <h4 className="booking-content-name">{name}</h4>
      <p className={statusId < 4 ? "booking-content-status booking-content-status booking-content-status booking-content-status--green" : "booking-content-status booking-content-status--red"}>Status : {status} </p>
      {price ? <span className="booking-content-price">prix {price}€</span> : ''}
    </div>
  </Link>
);

Booking.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  status: PropTypes.string,
  link: PropTypes.string,
};

Booking.defaultProps = {
  id: '',
  name: '',
  price: '',
  status: '',
  link: '',
};

export default Booking;
