import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Booking from '../Booking';

import './styles.scss';
import { Redirect } from 'react-router';

const Bookings = ({ bringerBookings, washerBookings, isConnected, getBookings, }) => {
  useEffect(() => {
    getBookings();
  }, []);
  console.log('washerBookings', washerBookings);
  return (
    !isConnected ? <Redirect to="/" /> :
      (
        <div className="bookings">
          <h2 className="bookings-title">Mes reservations</h2>
          {!isConnected
            ? <h3 className="bookings-title bookings-title--sub">Pour voir vos réservations, veuillez vous connecter</h3> : (
              <div className="bookings-container">

                <div className="bookings-container-left">
                  <h2>En tant que bringer, j'ai réservé une machine pour lavé mon linge chez : </h2>
                  {
                    bringerBookings.length > 0 ? (
                      bringerBookings.map((bringerBooking) => (
                        <Booking link={`bookingDetail/${bringerBooking.resa.idResa}`} price="4" name={bringerBooking.washer.pseudo} status={bringerBooking.resa.status_id, bringerBooking.resa.status_name} />
                      ))) : <h3>Vous n'avez pas réservé de machine pour l'instant</h3>
                  }

                </div>

                <div className="bookings-container-right">
                  <h2>En tant que washer, j'ai fait une machine washerBookings</h2>
                  {
                    (washerBookings.length > 0 ? washerBookings.map((booking) => (
                      <Booking link={`bookingDetail/${booking.resa.idResa}`} name={booking.bringer.pseudo} status={booking.resa.status_id, booking.resa.status_name} date={booking.resa.DataResa} />
                    ))
                      : <h4>Personne n'a réservé votre machine pour l'instant</h4>
                    )
                  }
                </div>

              </div>
            )}
        </div>
      )
  );
};

export default Bookings;
