import api from 'src/api';
import notify from 'src/notify';
import {
  BOOKING_FORM_SUBMIT,
  GET_BOOKING_BY_ID,
  FETCH_BOOKINGS,
  fetchBookingsSuccess,
  UPDATE_BOOKING_STATUS,
} from '../actions/bookings';

export default (store) => (next) => (action) => {
  switch (action.type) {
    // PARTIE BOOKINGS

    // Réserver une machine en identifiant le bringerWasher grâce à son JWT
    case BOOKING_FORM_SUBMIT: {
      api.post('/reservation/', {
        temperature: store.getState().bookings.inputs.temperature,
        dispo: store.getState().bookings.inputs.dispo,
        washerId: store.getState().bookings.currentMachine.washerId,
        machineId: store.getState().bookings.currentMachine.machineId,
        options: store.getState().bookings.options,
      })
        .then((result) => {
          notify.success(result.data.message);
          console.log('result.data du post bookings form submit from machineDetail', result.data);
        })
        .catch((err) => {
          console.error(err);
          notify.error(err.response.data.message);
        });
      return next(action);
    }
    case GET_BOOKING_BY_ID: {
      const { bookingId } = store.getState().booking.bookingId;
      api.get(`/reservation/${bookingId}`)
        .then((result) => {
          notify.success(result.data.message);
          console.log('result.data du post bookings form submit from machineDetail', result.data);
        })
        .catch((err) => {
          console.error(err);
          notify.error(err.response.data.message);
        });
      return next(action);
    }
    case UPDATE_BOOKING_STATUS: {
      const { bookingId, status_id } = action.payload;
      console.log(action.payload);
      api.get(`/reservation/${bookingId}/${status_id}`)
        .then((result) => {
          notify.success(result.data.message);
          console.log(`Booking {bookingId} updated to ${result.data.status_id}`);
        })
        .catch((err) => {
          console.error(err);
          notify.error(err.response.data.message);
        });
      return next(action);
    }
    case FETCH_BOOKINGS: {
      api.get('/reservation/')
        .then((result) => {
          notify.success(result.data.message);
          console.log('result.data du fetch des machines de l\'utilisateur', result.data);
          store.dispatch(fetchBookingsSuccess(result.data));
        })
        .catch((err) => {
          console.error(err);
          notify.error(err.response.data.message);
        });
      return next(action);
    }
    default:
      return next(action);
  }
};
