import api from 'src/api';
import {
  LOGIN_FORM_SUBMIT,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  loginSuccess,
  REGISTER_USER_FORM_SUBMIT,
  UPDATE_USER_FORM_SUBMIT,
  DELETE_USER_FORM_SUBMIT_SUCCESS,
} from 'src/actions/user';
import { FETCH_MACHINES_BY_ZIP_CODE, setMachines, ADD_MACHINE_FORM_SUBMIT } from '../actions/machines';
import { deleteUserFormSubmit, deleteUserFormSubmitSuccess, deleteUserFormSubmitError } from '../actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_MACHINES_BY_ZIP_CODE: {
      const { search } = store.getState().machines.inputs;
      api.get(`/search/${search}`)
        .then((result) => {
          store.dispatch(setMachines(result.data));
        })
        .catch((err) => {
          console.log('error pas de machine', err);
        });
      return next(action);
    }
    case LOGIN_FORM_SUBMIT: {
      // On récupère les valeurs du state de redux
      // Ici on veut email et password se trouvant dans
      // le state du reducer user
      const { mail, password } = store.getState().user.inputs;
      api.post('/login', { mail, password })
        .then((result) => {
          console.log('res data', result.data);
          store.dispatch(loginSuccess(result.data));
        })
        .catch((err) => {
          console.error(err);
        });
      return next(action);
    }
    case LOGIN_SUCCESS: {
      // Permet de créer un header par défaut à chaque requete axios
      // C'est à dire que la prochaine fois et toutes les autres fois
      // que axios fera une requete il aura le header Authorization
      // avec le token déjà renseigné
      api.defaults.headers.common.Authorization = `Bearer ${action.token}`;
      return next(action);
    }
    case ADD_MACHINE_FORM_SUBMIT: {
      const {
        title,
        adress,
        zip_code,
        city, price,
        description,
        picture,
        capacity,
      } = store.getState().machines.inputs;

      api.post('/machine', { title, adress, zip_code, city, price, description, picture, capacity })
        .then((result) => {
          console.log('result.data du post addwasher', result.data);
        })
        .catch((err) => {
          console.error(err);
        });
      return next(action);
    }
    case REGISTER_USER_FORM_SUBMIT: {
      const {
        lastname,
        firstname,
        pseudo,
        mail,
        password,
        passwordConfirm,
        phone } = store.getState().user.register;
      api.post('/signup', { lastname, firstname, pseudo, mail, password, passwordConfirm, phone })
        .then((result) => {
          console.log('result.data du post Register User Form', result.data);
        })
        .catch((err) => {
          console.error(err);
        });
      return next(action);
    }
    case UPDATE_USER_FORM_SUBMIT: {
      const {
        lastname,
        firstname,
        pseudo,
        mail,
        password,
        passwordConfirm,
        phone } = store.getState().user.register;
      const { token } = store.getState().user.token;
      api.patch(`/account/${token}`, { lastname, firstname, pseudo, mail, password, passwordConfirm, phone })
        .then((result) => {
          console.log('result.data du post Modify User Form', result.data);
        })
        .catch((err) => {
          console.error(err);
        });
      return next(action);
    }
    case DELETE_USER_FORM_SUBMIT_SUCCESS: {
      const { token } = store.getState().user.token;
      api.delete(`/account/${token}`)
        .then((result) => {
          console.log('result.data du delete user', result.data);
          store.dispatch(deleteUserFormSubmitSuccess());
        })
        .catch((err) => {
          store.dispatch(deleteUserFormSubmitError());
          console.error(err);
        });
      return next(action);
    }
    default:
      return next(action);
  }
};
