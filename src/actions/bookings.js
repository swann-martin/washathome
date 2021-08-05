export const BOOKING_INPUT_CHANGE = 'BOOKING_INPUT_CHANGE';
export const BOOKING_FORM_SUBMIT = 'BOOKING_FORM_SUBMIT';
export const GET_BOOKING_BY_ID = 'GET_BOOKING_BY_ID';
export const FETCH_BOOKINGS = 'FETCH_BOOKINGS';
export const FETCH_BOOKINGS_SUCCESS = 'FETCH_BOOKINGS_SUCCESS';
export const BOOKING_INPUT_OPTIONS_CHANGE = 'BOOKING_INPUT_OPTIONS_CHANGE';
export const UPDATE_BOOKING_STATUS = 'UPDATE_BOOKING_STATUS';
export const UPDATE_BOOKING_STATUS_SUCCESS = 'UPDATE_BOOKING_STATUS_SUCCESS';
export const CURRENT_MACHINE_UPDATE = 'CURRENT_MACHINE_UPDATE';
export const CURRENT_BOOKING_UPDATE = 'CURRENT_BOOKING_UPDATE';

export const currentMachineUpdate = (payload) => ({
  type: CURRENT_MACHINE_UPDATE,
  payload,
});

export const updateBookingStatus = (payload) => ({
  type: UPDATE_BOOKING_STATUS,
  payload,
});

export const updateBookingStatusSuccess = (payload) => ({
  type: UPDATE_BOOKING_STATUS_SUCCESS,
  payload,
});

export const bookingInputChange = (payload) => ({
  type: BOOKING_INPUT_CHANGE,
  payload,
});

export const bookingInputOptionsChange = (payload) => ({
  type: BOOKING_INPUT_OPTIONS_CHANGE,
  payload,
});

export const bookingFormSubmit = () => ({
  type: BOOKING_FORM_SUBMIT,
});

export const getBookingById = () => ({
  type: GET_BOOKING_BY_ID,
});

export const fetchBookings = () => ({
  type: FETCH_BOOKINGS,
});
export const fetchBookingsSuccess = (payload) => ({
  type: FETCH_BOOKINGS_SUCCESS,
  payload,
});

export const currentBookingUpdate = (payload) => ({
  type: CURRENT_BOOKING_UPDATE,
  payload,
});
