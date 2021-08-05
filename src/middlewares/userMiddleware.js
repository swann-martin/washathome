import api from 'src/api';
import notify from 'src/notify';
import {
  LOGIN_FORM_SUBMIT,
  AUTO_LOGIN_FORM_SUBMIT,
  LOGIN_SUCCESS,
  loginSuccess,
  USER_LOGOUT,
  REGISTER_USER_FORM_SUBMIT,
  UPDATE_USER_FORM_SUBMIT,
  UPDATE_PASSWORD_FORM_SUBMIT,
  DELETE_USER_FORM_SUBMIT,
  deleteUserFormSubmitSuccess, deleteUserFormSubmitError,
} from 'src/actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    // créer un utilisateur grâce à un formulaire qui fournit les infos phone et email
    case REGISTER_USER_FORM_SUBMIT: {
      const {
        lastname,
        firstname,
        pseudo,
        mail,
        password,
        passwordConfirm,
        phone,
        avatar,
      } = store.getState().user.register;
      api.post('/signup', {
        lastname,
        firstname,
        pseudo,
        mail,
        password,
        passwordConfirm,
        phone,
        avatar,
      })
        .then((result) => {
          console.log('result.data du post Register User Form', result.data);
          notify.success(result.data.message);
        })
        .catch((err) => {
          console.log(err.response.data.message);
          notify.error(err.response.data.message);
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
        phone,
      } = store.getState().user.user;
      const avatar = new FormData();
      avatar.append('avatar', store.getState().user.user.avatar);
      api.patch('/account', {
        lastname, firstname, pseudo, mail, phone, avatar,
      })
        .then((result) => {
          const { token } = result.data.token;
          localStorage.setItem('token', token);
          console.log('result.data du post Modify User Form', result.data);
          notify.success(result.data.message);
        })
        .catch((err) => {
          notify.error(err.response.data.message);
        });
      return next(action);
    }
    case UPDATE_PASSWORD_FORM_SUBMIT: {
      const { password, passwordConfirm } = store.getState().user.passwordChange;
      api.patch('/password', {
        password,
        passwordConfirm,
      })
        .then((result) => {
          console.log('result.data du post Modify Password Form', result.data);
          notify.success(result.data.message);
        })
        .catch((err) => {
          console.error(err);
          console.log(err.response.data.message);
          notify.error(err.response.data.message);
        });
      return next(action);
    }

    // Suprrimer le compte de l'utilisateur en utilisant le JWToken pour s'identifier
    case DELETE_USER_FORM_SUBMIT: {
      api.delete('/account')
        .then((result) => {
          console.log('result.data du delete user', result.data);
          store.dispatch(deleteUserFormSubmitSuccess());
          notify.success(result.data.message);
        })
        .catch((err) => {
          store.dispatch(deleteUserFormSubmitError());
          console.log(err.response.data.message);
          notify.error(err.response.data.message);
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
          console.log(result.data.personnal);
          localStorage.setItem('token', token);
          store.dispatch(loginSuccess({
            user: result.data.personal[0].user,
            machine: [result.data.personal[0].machine],
            token: result.data.token,
            isConnected: result.data.isConnected,
          }));
        })
        .catch((err) => {
          notify.error(err.response.data.message);
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
      const token = localStorage.getItem('token');
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      console.log(api.defaults.headers.common.Authorization);
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
          store.dispatch(loginSuccess({
            user: result.data.personal[0].user,
            machine: result.data.personal[0].machine,
            token: result.data.token,
            isConnected: result.data.isConnected,
          }));
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
      return next(action);
    }
    case USER_LOGOUT: {
      // En cas de déconnexion, on supprime ce header par défaut
      delete api.defaults.headers.common.Authorization;
      // Si on se logout, il faut aussi supprimer les localStorages pour nettoyer
      localStorage.removeItem('token');
      return next(action);
    }
    default:
      return next(action);
  }
};
