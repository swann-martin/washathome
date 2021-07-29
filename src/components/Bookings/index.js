import React from 'react';
import Booking from '../Booking';

import './styles.scss';

const Bookings = () => (
  <div className="bookings">
    <h2 className="bookings-title">Mes reservations</h2>
    <div className="bookings-container">
      <Booking price='2' name='JeanAlfred' status='4'/>
    </div>
  </div>
);

export default Bookings;
