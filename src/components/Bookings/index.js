import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import Booking from '../Booking';

import './styles.scss';

const Bookings = ({ bringerBookings, washerBookings, isConnected, getBookings, }) => {
  useEffect(() => {
    if (isConnected) { getBookings(); };
  }, []);
  return (
    !isConnected ? <Redirect to="/" /> :
      (
        <div className="bookings">
          <h2 className="bookings-title">Mes reservations</h2>
          <Link
            to="/"
            className="bookings-btn--close"
            title="retour à la page principale"
            onClick={() => {
              console.log('fermer le composant ');
            }}
          ><i className="fas fa-arrow-circle-left" />
          </Link>
          {!isConnected
            ? <h3 className="bookings-title bookings-title--sub">Pour voir vos réservations, veuillez vous connecter</h3> : (
              <div className="bookings-container">

                <div className="bookings-container-left">
                  <h2 className="bookings-container-left-title">J'ai réservé pour laver mon linge chez&nbsp;: </h2>
                  <div className="bookings-container-left-list">
                    {
                      bringerBookings.length > 0 ? (
                        bringerBookings.map((bringerBooking) => (
                          <Booking key={bringerBooking.resa.idResa} link={`bookingDetail/${bringerBooking.resa.idResa}`} price={bringerBooking.resa.price} name={bringerBooking.washer.pseudo} statusId={bringerBooking.resa.status_id} status={bringerBooking.resa.status_name} />
                        ))) : <h3>Vous n'avez pas réservé de machine pour l'instant</h3>
                    }

                  </div>
                </div>

                <div className="bookings-container-right">
                  <h2 className="bookings-container-right-title">J'ai lavé le linge de&nbsp;:</h2>
                  <div className="bookings-container-right-list">
                    {
                      (washerBookings.length > 0 ? washerBookings.map((booking) => (
                        <Booking key={booking.resa.idResa} link={`bookingDetail/${booking.resa.idResa}`} price={booking.resa.price} name={booking.bringer.pseudo} statusId={booking.resa.status_id} status={booking.resa.status_name} date={booking.resa.DataResa} />
                      ))
                        : <h3>Personne n'a réservé votre machine pour l'instant</h3>
                      )
                    }
                  </div>
                </div>

              </div>
            )}
        </div>
      )
  );
};

Bookings.propTypes = {
  bringerBookings: PropTypes.array,
  washerBookings: PropTypes.array,
  isConnected: PropTypes.bool,
  getBookings: PropTypes.func,
};

Bookings.defaultProps = {
  bringerBookings: [],
  washerBookings: [],
  isConnected: false,
  getBookings: () => { },
};

export default Bookings;
