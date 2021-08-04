export const INPUT_CHANGE = 'INPUT_CHANGE';
export const LOGIN_FORM_SUBMIT = 'LOGIN_FORM_SUBMIT';
export const AUTO_LOGIN_FORM_SUBMIT = 'AUTO_LOGIN_FORM_SUBMIT';
export const USER_LOGOUT = 'USER_LOGOUT';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const TOGGLE_CONNECTED = 'TOGGLE_CONNECTED';
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const REGISTER_USER_INPUT_CHANGE = 'REGISTER_USER_INPUT_CHANGE';
export const REGISTER_USER_FORM_SUBMIT = 'REGISTER_USER_FORM_SUBMIT';

export const UPDATE_USER_FORM_SUBMIT = 'UPDATE_USER_FORM_SUBMIT';
export const UPDATE_USER_FORM_SUBMIT_SUCCESS = 'UPDATE_USER_FORM_SUBMIT_SUCCESS';
export const UPDATE_USER_FORM_SUBMIT_ERROR = 'UPDATE_USER_FORM_SUBMIT_ERROR';
export const CHANGE_PASSWORD_INPUT_CHANGE = 'CHANGE_PASSWORD_INPUT_CHANGE';
export const UPDATE_PASSWORD_FORM_SUBMIT = 'UPDATE_PASSWORD_FORM_SUBMIT';

export const DELETE_USER_FORM_SUBMIT = 'DELETE_USER_FORM_SUBMIT';
export const DELETE_USER_FORM_SUBMIT_SUCCESS = 'DELETE_USER_FORM_SUBMIT_SUCCESS';
export const DELETE_USER_FORM_SUBMIT_ERROR = 'DELETE_USER_FORM_SUBMIT_ERROR';

export const PROFILE_USER_INPUT_CHANGE = 'PROFILE_USER_INPUT_CHANGE';

export const inputChange = (payload) => ({
  type: INPUT_CHANGE,
  payload,
});

export const loginFormSubmit = () => ({
  type: LOGIN_FORM_SUBMIT,
});

export const autoLoginFormSubmit = () => ({
  type: AUTO_LOGIN_FORM_SUBMIT,
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

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
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

export const deleteUserFormSubmitSuccess = () => ({
  type: DELETE_USER_FORM_SUBMIT_SUCCESS,
});
export const deleteUserFormSubmitError = () => ({
  type: DELETE_USER_FORM_SUBMIT_ERROR,
});

export const updateUserFormSubmit = (payload) => ({
  type: UPDATE_USER_FORM_SUBMIT,
  payload,
});
export const updateUserFormSubmitSuccess = (payload) => ({
  type: UPDATE_USER_FORM_SUBMIT_SUCCESS,
  payload,
});
export const updateUserFormSubmitError = (payload) => ({
  type: UPDATE_USER_FORM_SUBMIT_ERROR,
  payload,
});

export const changePasswordInputChange = (payload) => ({
  type: CHANGE_PASSWORD_INPUT_CHANGE,
  payload,
});

export const updatePasswordFormSubmit = () => ({
  type: UPDATE_PASSWORD_FORM_SUBMIT,
});
