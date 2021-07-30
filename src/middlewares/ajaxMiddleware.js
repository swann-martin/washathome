import api from 'src/api';
import {
  LOGIN_FORM_SUBMIT,
  AUTO_LOGIN_FORM_SUBMIT,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  loginSuccess,
  USER_LOGOUT,
  REGISTER_USER_FORM_SUBMIT,
  UPDATE_USER_FORM_SUBMIT,
  DELETE_USER_FORM_SUBMIT_SUCCESS,
  deleteUserFormSubmitSuccess, deleteUserFormSubmitError,
  autoLoginFormSubmit,
} from 'src/actions/user';

import { FETCH_MACHINES_BY_ZIP_CODE, setMachines, ADD_MACHINE_FORM_SUBMIT } from '../actions/machines';

import { BOOKINGS_FORM_SUBMIT } from '../actions/bookings';

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
          const { token } = result.data;
          console.log(result.data);
          localStorage.setItem('mail', mail);
          localStorage.setItem('token', token);
          localStorage.setItem('password', password);
          store.dispatch(loginSuccess(result.data));
        })
        .catch((err) => {
          console.error(err);
        });
      return next(action);
    }
    case AUTO_LOGIN_FORM_SUBMIT: {
      // On récupère les valeurs du state de redux
      // Ici on veut email et password se trouvant dans
      // le state du reducer user
      const token = localStorage.getItem('token');
      api.post('/autologin', { token })
        .then((result) => {
          const { token } = result.data;
          console.log(result.data);
          localStorage.setItem('token', token);
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

      api.post('/machine',
        {
          title,
          adress,
          zip_code,
          city,
          price,
          description,
          picture,
          capacity,
        })
        .then((result) => {
          console.log('result.data du post addwasher', result.data);
        })
        .catch((err) => {
          console.error(err);
        });
      return next(action);
    }
    case REGISTER_USER_FORM_SUBMIT: {
      api.post('/signup', store.getState().user.register)
        .then((result) => {
          console.log('result.data du post Register User Form', result.data);
          store.dispatch(registerInputsToUser());
          store.dispatch(loginSuccess(result.data));
          store.dispatch(autoLoginFormSubmit());
        })
        .catch((err) => {
          console.error(err);
        });
      return next(action);
    }
    case BOOKINGS_FORM_SUBMIT: {
      const { timeresa } = store.getState().bookings.inputs;
      const { id } = store.getState().user.id;
      api.post(`/reservation/${id}`, {
        timeresa,
      })
        .then((result) => {
          console.log('result.data du post bookings form submit from machineDetail', result.data);
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
        phone,
      } = store.getState().user.register;
      const { token } = store.getState().user.token;
      api.patch(`/account/${token}`, {
        lastname, firstname, pseudo, mail, password, passwordConfirm, phone,
      })
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
    case USER_LOGOUT: {
      // En cas de déconnexion, on supprime ce header par défaut
      delete api.defaults.headers.common.Authorization;
      // Si on se logout, il faut aussi supprimer les localStorages pour nettoyer
      localStorage.removeItem('mail');
      localStorage.removeItem('password');
      localStorage.removeItem('token');
      return next(action);
    }
    default:
      return next(action);
  }
};
