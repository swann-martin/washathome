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
      <div className="booking-content-top">
        <h4 className="booking-content-name">{name}</h4>
      </div>
      {
        statusId === 6 ? <p className="booking-content-status booking-content-status--red"> Status : {status} </p>
          :
          ((statusId < 5) ? <p className={statusId === 5 ? "booking-content-status--green" : "booking-content-status booking-content-status--purple"}>Status : {status} </p> :
            <p className={statusId === 1 ? "booking-content-status" : "booking-content-status"}>Status : {status} </p>)
      }

      {price ? <span className="booking-content-price">prix {price}€</span> : ''}
    </div>
  </Link >
);

Booking.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  status: PropTypes.string,
  link: PropTypes.string,
  statusId: PropTypes.number,
};

Booking.defaultProps = {
  id: '',
  name: '',
  price: '',
  status: '',
  link: '',
  statusId: 1,
};

export default Booking;
