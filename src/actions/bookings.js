export const BOOKING_INPUT_CHANGE = 'BOOKING_INPUT_CHANGE';
export const BOOKING_FORM_SUBMIT = 'BOOKING_FORM_SUBMIT';
export const GET_BOOKING_BY_ID = 'GET_BOOKING_BY_ID';
export const BOOKING_UPDATE = 'BOOKING_UPDATE';
export const BOOKING_CANCEL = 'BOOKING_CANCEL';

export const bookingInputChange = (payload) => ({
  type: BOOKING_INPUT_CHANGE,
  payload,
});

export const bookingFormSubmit = () => ({
  type: BOOKING_FORM_SUBMIT,
});

export const getBookingById = () => ({
  type: GET_BOOKING_BY_ID,
});

export const bookingUpdate = () => ({
  type: BOOKING_UPDATE,
});

export const bookingCancel = () => ({
  type: BOOKING_CANCEL,
});
