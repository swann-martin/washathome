import React from 'react';
import PropTypes from 'prop-types';
import Booking from '../Booking';

import './styles.scss';

const Bookings = ({ bringerBookings, washerBookings }) => {
  console.log('washerBookings', washerBookings);
  return (
    <div className="bookings">
      <h2 className="bookings-title">Mes reservations</h2>
      <div className="bookings-container">
        <Booking price='2' name='JeanAlfred' status='4' />
        {
          bringerBookings &&
          bringerBookings.map((bringerBooking) => (
            <Booking price='4' name='test' status='teststatus' />
          ))
        }

        {
          washerBookings &&
          washerBookings.map((booking) => (
            <Booking price='4' name={booking.bringer.bringer_pseudo} status={booking.resa.status_id, booking.resa.status_name} date={booking.resa.DataResa} />
          ))
        }
      </div>
    </div>
  );
}

Bookings.propTypes = {
  bringerBookings: PropTypes.arrayOf(
    PropTypes.shape({

    }),
  ),
  washerBookings: PropTypes.arrayOf(
    PropTypes.shape({

    }),
  )
};

export default Bookings;
