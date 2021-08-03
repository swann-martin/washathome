import { BOOKING_INPUT_CHANGE, FETCH_BOOKINGS_SUCCESS, BOOKING_INPUT_OPTIONS_CHANGE } from 'src/actions/bookings';

export const initialState = {
  selectedMachine: {
    machine_id: null,
    user_id: null,
  },
  inputs: {
    washerId: 0,
    machineId: 1,
    temperature: 30,
    dispo: '',
    options: {
      option1: null,
      option2: null,
      option3: null,
    },
  },
  status: 1,
  washerBookings: [],
  bringerBookings: [],
  choices: [
    {
      id: 0,
      name: 'Options',
      price: 0,
    },
    {
      id: 1,
      name: 'lessive spéciale',
      price: 3,
    },
    {
      id: 2,
      name: 'lingette anti decoloration',
      price: 2,
    },
    {
      id: 3,
      name: 'séchage au sèche linge avec pliage',
      price: 5,
    },
    {
      id: 4,
      name: 'pliage du linge',
      price: 2,
    },
    {
      id: 5,
      name: 'repassage',
      price: 8,
    },
    {
      id: 6,
      name: 'séchage au sèche linge',
      price: 3,
    },
    {
      id: 7,
      name: 'séparation des couleurs',
      price: 5,
    },
  ],
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
    case BOOKING_INPUT_OPTIONS_CHANGE:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          options: {
            ...state.inputs.options,
            ...action.payload,
          },
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
