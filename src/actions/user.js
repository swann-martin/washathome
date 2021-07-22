export const INPUT_CHANGE = 'INPUT_CHANGE';
export const LOGIN_FORM_SUBMIT = 'LOGIN_FORM_SUBMIT';
export const USER_LOGOUT = 'USER_LOGOUT';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

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
