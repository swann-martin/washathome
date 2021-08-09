import {
  INPUT_CHANGE,
  LOGIN_FORM_SUBMIT,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  USER_LOGOUT,
  TOGGLE_CONNECTED,
  REGISTER_USER_INPUT_CHANGE,
  PROFILE_USER_INPUT_CHANGE,
  REGISTER_USER_FORM_SUBMIT_SUCCES,
  DELETE_USER_FORM_SUBMIT_SUCCESS,
  TOGGLE_MENU,
  CHANGE_PASSWORD_INPUT_CHANGE,
} from '../actions/user';

import { MACHINE_INPUT_CHANGE, ADD_MACHINE_FORM_SUBMIT_SUCCESS, DELETE_MACHINE_SUCCESS, UPDATE_MACHINE} from '../actions/machines';

export const initialState = {
  loading: false,
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
      id: 0,
      capacity: 6,
      name: 'le machine de Gigi',
      description: 'Travail rapide et soigné du linge, machine neuve et derniere génération Samsung',
      zip_code: '31400',
      city: 'Toulouse',
      address: '11 avenue Crampel',
      latitude: 43.58437,
      longitude: 1.452135,
      picture: 'https://tse2.mm.bing.net/th?id=OIP.nKGE3vTrx5wKcqgOKxU9UwHaFj&pid=Api&P=0&w=231&h=174',
      price: 24,
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
        inputs: {
          mail: '',
          password: '',
        },
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
    case REGISTER_USER_FORM_SUBMIT_SUCCES:
      return {
        ...state,
        pressedConnected: true,
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
        machine: [{
          ...state.machine[0],
          ...action.payload,
        }],
      };
    case ADD_MACHINE_FORM_SUBMIT_SUCCESS:
      return {
        ...state,
        machine: [{
          ...state.machine[0],
          ...action.payload,
        }],
      };
    case DELETE_MACHINE_SUCCESS:
      return {
        ...state,
        machine: [{}],
      };
    case UPDATE_MACHINE:
      return {
        ...state,
        machine: [{
          ...state.machine[0],
          ...action.payload,
        }],
      };
    default:
      return state;
  }
};

export default reducer;
