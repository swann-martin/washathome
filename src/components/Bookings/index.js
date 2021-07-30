import React from 'react';
import PropTypes from 'prop-types';
import Booking from '../Booking';

import './styles.scss';

const Bookings = ({ bringerBookings, washerBookings, isConnected }) => {
  console.log('washerBookings', washerBookings);
  return (
    <div className="bookings">
      <h2 className="bookings-title">Mes reservations</h2>
      {!isConnected
        ? <h3 className="bookings-title bookings-title--sub">Pour voir vos réservations, veuillez vous connecter</h3> : (
          <div className="bookings-container">

            <div className="bookings-container-left">
              {
                bringerBookings == []
                  ? (
                    <h3>Les machines que vous avez réservées</h3>
                    && bringerBookings.map((bringerBooking) => (
                      <Booking price="4" name="{bringerBooking.}" status="teststatus" />
                    ))) : <h3>Vous n'avez pas réservé de machine pour l'instant</h3>
              }

            </div>

            <div className="bookings-container-right">
              {
                (!washerBookings == []
                  ? washerBookings.map((booking) => (
                    <Booking link={`bookingDetail/${booking.resa.idResa}`} name={booking.bringer.bringer_pseudo} status={booking.resa.status_id, booking.resa.status_name} date={booking.resa.DataResa} />
                  ))
                  : <h4>Personne n'a réservé votre machine pour l'instant</h4>
                )
              }
            </div>

          </div>
        )}
    </div>
  );
};

Bookings.propTypes = {
  isConnected: PropTypes.bool,
  bringerBookings: PropTypes.arrayOf(
    PropTypes.shape({

    }),
  ),
  washerBookings: PropTypes.arrayOf(
    PropTypes.shape({

    }),
  ),
};

export default Bookings;
