import api from 'src/api';
import {
  BOOKING_FORM_SUBMIT, BOOKING_UPDATE, BOOKING_CANCEL, GET_BOOKING_BY_ID, FETCH_BOOKINGS, fetchBookingsSuccess,
} from '../actions/bookings';

export default (store) => (next) => (action) => {
  switch (action.type) {
    // PARTIE BOOKINGS

    // Réserver une machine en identifiant le bringerWasher grâce à son JWT
    case BOOKING_FORM_SUBMIT: {
      api.post('/reservation/', store.getState().bookings.inputs)
        .then((result) => {
          console.log('result.data du post bookings form submit from machineDetail', result.data);
        })
        .catch((err) => {
          console.error(err);
        });
      return next(action);
    }
    // Récupérer une machine en identifiant le bringerWasher grâce à son JWT et l'id de la réservation
    case GET_BOOKING_BY_ID: {
      const { bookingId } = store.getState().booking.bookingId;
      api.get(`/reservation/${bookingId}`)
        .then((result) => {
          console.log('result.data du post bookings form submit from machineDetail', result.data);
        })
        .catch((err) => {
          console.error(err);
        });
      return next(action);
    }
    // Modifier une machine en identifiant le bringerWasher grâce à son JWT et l'identifiant de la résa
    case BOOKING_UPDATE: {
      const { bookingId } = store.getState().bookings.bookingId;
      api.patch(`/reservation/${bookingId}`, store.getState().bookings.inputs)
        .then((result) => {
          console.log('result.data du patch to modify a booking', result.data);
        })
        .catch((err) => {
          console.error(err);
        });
      return next(action);
    }
    case BOOKING_CANCEL: {
      const { bookingId } = store.getState().bookings.bookingId;
      const { statusCancellation } = store.getState().bookings.bookingStatus;
      api.post(`/reservation/${bookingId}/${statusCancellation}`, store.getState().bookings.inputs)
        .then((result) => {
          console.log('result.data du form submit to modify the form', result.data);
        })
        .catch((err) => {
          console.error(err);
        });
      return next(action);
    }
    case FETCH_BOOKINGS: {
      api.get('/reservation/')
        .then((result) => {
          console.log('result.data du fetch des machines de l\'utilisateur', result.data);
          store.dispatch(fetchBookingsSuccess(result.data));
        })
        .catch((err) => {
          console.error(err);
        });
      return next(action);
    }
    default:
      return next(action);
  }
};
