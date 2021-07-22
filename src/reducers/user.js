import { LOGIN_INPUT_CHANGE, LOGIN_FORM_SUBMIT, LOGIN_SUCCESS, LOGIN_ERROR, USER_LOGOUT } from '../actions/user';

export const initialState = {
  isConnected: true,
  pressedConnected: false,
  openMenu: false,
  inputs: {
    mail: '',
    password: '',
  },
  avatar: 'https://randomuser.me/api/portraits/women/60.jpg',

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_INPUT_CHANGE:
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
        logged: false,
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
    default:
      return state;
  }
};

export default reducer;
