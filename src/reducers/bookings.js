import { BOOKINGS_INPUT_CHANGE } from 'src/actions/bookings';

export const initialState = {

  inputs: {}
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case BOOKINGS_INPUT_CHANGE:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
export default reducer;
