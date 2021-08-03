import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Booking = ({
  id, name, price, bookingInfos, status, link
}) => (
  <Link
    key={id}
    className="booking"
    exact
    to={link}
    bookingInfos={{

    }}
  >
    <div className="booking-content">
      <h4 className="booking-content-name">{name}</h4>
      <p className={status < 5 ? "booking-content-status booking-content-status--green" : "booking-content-status booking-content-status--red"}>Status : {status} {status < 5 ? "En cours" : "Terminée"}</p>
      {!price == '' ? <span className="booking-content-price">prix {price}€</span> : ''}
    </div>
  </Link>
);

export default Booking;
