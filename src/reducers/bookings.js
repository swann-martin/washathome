import { BOOKING_INPUT_CHANGE, FETCH_BOOKINGS_SUCCESS } from 'src/actions/bookings';

export const initialState = {

  inputs: {
    washerId: 0,
    machineId: 1,
    temperature: 30,
    dispo: '',
    option1: 0,
    option2: 0,
    option3: 0,
  },
  washerBookings: [],
  bringerBookings: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case BOOKING_INPUT_CHANGE:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          ...action.payload,
        },
      };
    case FETCH_BOOKINGS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
