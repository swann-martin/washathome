import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

const Booking = ({
  id, name, price, status, link,
}) => (
  <Link
    key={id}
    className="booking"
    exact
    to={link}
  >
    <div className="booking-content">
      <h4 className="booking-content-name">{name}</h4>
      <p className={status < 5 ? "booking-content-status booking-content-status--green" : "booking-content-status booking-content-status--red"}>Status : {status} {status < 5 ? "En cours" : "Terminée"}</p>
      {!price == '' ? <span className="booking-content-price">prix {price}€</span> : ''}
    </div>
  </Link>
);

Booking.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  status: PropTypes.string,
  link: PropTypes.string,
};

Booking.defaultProps = {
  id: '',
  name: '',
  price: null,
  status: '',
  link: '',
};

export default Booking;
