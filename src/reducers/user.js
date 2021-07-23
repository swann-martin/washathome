import { INPUT_CHANGE, LOGIN_FORM_SUBMIT, LOGIN_SUCCESS, LOGIN_ERROR, USER_LOGOUT, TOGGLE_CONNECTED } from '../actions/user';

export const initialState = {
  isConnected: false,
  pressedConnected: false,
  openMenu: false,
  inputs: {
    mail: '',
    password: '',

  },
  user: {
    lastname: 'mon petit nom',
    firstname: '',
    mail: '',
    password: '',
    phone: '',
    avatar: 'https://randomuser.me/api/portraits/women/60.jpg',
  },
  token: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          ...action.payload,
        },
      };
    case LOGIN_FORM_SUBMIT:
      return {
        ...state,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        pressedConnected: false,
        isConnected: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isConnected: false,

      };
    case USER_LOGOUT:
      return {
        ...state,
        isConnected: false,
      };
    case TOGGLE_CONNECTED:
      return {
        ...state,
        pressedConnected: !state.pressedConnected,
      };
    default:
      return state;
  }
};

export default reducer;
