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
  UPDATE_PASSWORD_FORM_SUBMIT,
  DELETE_USER_FORM_SUBMIT,
  deleteUserFormSubmitSuccess, deleteUserFormSubmitError,
  autoLoginFormSubmit,
} from 'src/actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    // créer un utilisateur grâce à un formulaire qui fournit les infos phone et email
    case REGISTER_USER_FORM_SUBMIT: {
      api.post('/signup', store.getState().user.register)
        .then((result) => {
          console.log('result.data du post Register User Form', result.data);
          store.dispatch(autoLoginFormSubmit());
        })
        .catch((err) => {
          console.error(err);
        });
      return next(action);
    }

    // Update des informations de l'utilisateur
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
      api.patch('/account', {
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
    case UPDATE_PASSWORD_FORM_SUBMIT: {
      const {
        password,
        passwordConfirm,
      } = store.getState().user.register;
      api.patch('/password', {
        password, passwordConfirm,
      })
        .then((result) => {
          console.log('result.data du post Modify Password Form', result.data);
        })
        .catch((err) => {
          console.error(err);
        });
      return next(action);
    }

    // Suprrimer le compte de l'utilisateur en utilisant le JWToken pour s'identifier
    case DELETE_USER_FORM_SUBMIT: {
      api.delete('/account')
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

    // PARTIE LOGIN

    case LOGIN_FORM_SUBMIT: {
      // On récupère les valeurs du state de redux
      // Ici on veut email et password se trouvant dans
      // le state du reducer user
      const { mail, password } = store.getState().user.inputs;
      api.post('/login', { mail, password })
        .then((result) => {
          const { token } = result.data;
          console.log(result.data.personal[0]);
          localStorage.setItem('mail', mail);
          localStorage.setItem('token', token);
          localStorage.setItem('password', password);
          store.dispatch(loginSuccess({
            user: result.data.personal[0].user,
            machine: result.data.personal[0].machine,
            token: result.data.token,
            isConnected: result.data.isConnected,
          }));
        })
        .catch((err) => {
          console.error(err);
        });
      return next(action);
    }

    // si la requête login de l'utilisateur fonctionné alors le token 
    // va dans le header pour authentifier les prochaines requêtes 
    case LOGIN_SUCCESS: {
      // Permet de créer un header par défaut à chaque requete axios
      // C'est à dire que la prochaine fois et toutes les autres fois
      // que axios fera une requete il aura le header Authorization
      // avec le token déjà renseigné
      api.defaults.headers.common.Authorization = `Bearer ${action.token}`;
      return next(action);
    }

    // se reconnecte automatiquement si l'utilisateur a un JWT enregistré en localStorage,
    // ça fait une requête pour récupérer les infos de l'utilisateur.
    case AUTO_LOGIN_FORM_SUBMIT: {
      // On récupère les valeurs du state de redux
      // Ici on veut email et password se trouvant dans
      // le state du reducer user
      api.get('/autologin')
        .then((result) => {
          console.log(result.data.personnal[0]);
          store.dispatch(loginSuccess({
            user: result.data.personal[0].user,
            machine: result.data.personal[0].machine,
            token: result.data.token,
            isConnected: result.data.isConnected,
          }));
        })
        .catch((err) => {
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
