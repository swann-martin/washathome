import {
  INPUT_CHANGE,
  LOGIN_FORM_SUBMIT,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  USER_LOGOUT,
  TOGGLE_CONNECTED,
  REGISTER_USER_INPUT_CHANGE,
  PROFILE_USER_INPUT_CHANGE,
  DELETE_USER_FORM_SUBMIT_SUCCESS,
  TOGGLE_MENU,
  CHANGE_PASSWORD_INPUT_CHANGE,
  MACHINE_INPUT_CHANGE,
} from '../actions/user';

export const initialState = {
  loading: true,
  isConnected: false,
  pressedConnected: false,
  openMenu: false,
  inputs: {
    mail: '',
    password: '',
  },
  user: {
    lastname: '',
    firstname: '',
    pseudo: '',
    mail: '',
    password: '',
    passwordConfirm: '',
    phone: '',
    avatar: '',
    cgu: false,
  },
  register: {
    lastname: '',
    firstname: '',
    pseudo: '',
    mail: '',
    password: '',
    passwordConfirm: '',
    phone: '',
    avatar: '',
    cgu: false,
  },
  machine: [
    {
      id: 2,
      name: "la machine de Gigi",
      address: "11 avenue Crampel",
      zip_code: "31400",
      city: "toulouse",
      latitude: 43.58437,
      longitude: 1.452135,
    },
  ],
  passwordChange: {
    password: '',
    passwordConfirm: '',
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
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isConnected: false,

      };
    case TOGGLE_MENU:
      return {
        ...state,
        openMenu: !state.openMenu,
      };
    case USER_LOGOUT:
      return {
        ...state,
        isConnected: false,
        inputs: '',
        user: '',
        token: '',
        openMenu: false,
      };
    case TOGGLE_CONNECTED:
      return {
        ...state,
        pressedConnected: !state.pressedConnected,
      };
    case REGISTER_USER_INPUT_CHANGE:
      return {
        ...state,
        register: {
          ...state.register,
          ...action.payload,
        },
      };
    case PROFILE_USER_INPUT_CHANGE:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case DELETE_USER_FORM_SUBMIT_SUCCESS:
      return {
        ...state,
        user: '',
        token: '',
        isConnected: false,
      };
    case CHANGE_PASSWORD_INPUT_CHANGE:
      return {
        ...state,
        passwordChange: {
          ...state.passwordChange,
          ...action.payload,
        },
      };
    case MACHINE_INPUT_CHANGE:
      return {
        ...state,
        machine: [0: {
          ...state,
          ...action.payload,
        },],
      };
    default:
      return state;
  }
};

export default reducer;
