export const INPUT_CHANGE = 'INPUT_CHANGE';
export const LOGIN_FORM_SUBMIT = 'LOGIN_FORM_SUBMIT';
export const USER_LOGOUT = 'USER_LOGOUT';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const TOGGLE_CONNECTED = 'TOGGLE_CONNECTED';
export const REGISTER_USER_INPUT_CHANGE = 'REGISTER_USER_INPUT_CHANGE';
export const REGISTER_USER_FORM_SUBMIT = 'REGISTER_USER_FORM_SUBMIT';
export const DELETE_USER_FORM_SUBMIT = 'DELETE_USER_FORM_SUBMIT';
export const PROFILE_USER_INPUT_CHANGE = 'PROFILE_USER_INPUT_CHANGE';

export const inputChange = (payload) => ({
  type: INPUT_CHANGE,
  payload,
});

export const loginFormSubmit = () => ({
  type: LOGIN_FORM_SUBMIT,
});

export const userLogout = () => ({
  type: USER_LOGOUT,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginError = () => ({
  type: LOGIN_ERROR,
});

export const toggleConnected = () => ({
  type: TOGGLE_CONNECTED,
});

export const registerUserInputChange = (payload) => ({
  type: REGISTER_USER_INPUT_CHANGE,
  payload,
});

export const registerUserFormSubmit = () => ({
  type: REGISTER_USER_FORM_SUBMIT,
});

export const profileUserInputChange = (payload) => ({
  type: PROFILE_USER_INPUT_CHANGE,
  payload,
});

export const deleteUserFormSubmit = (payload) => ({
  type: DELETE_USER_FORM_SUBMIT,
  payload,
});
