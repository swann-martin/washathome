import api from 'src/api';
import {
  LOGIN_FORM_SUBMIT,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  loginSuccess,
} from 'src/actions/user';
import { FETCH_MACHINES_BY_ZIP_CODE, setMachines, ADD_MACHINE_FORM_SUBMIT } from '../actions/machines';

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
    }
      break;
    default:
      return next(action);
  }
};
