import {
  INIT_APP,
} from 'src/actions/app';

import {
  loginSuccess, autoLoginFormSubmit,
} from 'src/actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case INIT_APP: {
      // Avant tout, j'ai besoin de dispatcher l'action
      // avec le pseudo et le token que j'ai au préalablement sauvegarder
      // dans les localStorages
      // Comme ça je serai connecté avant même d'aller chercher les recettes

      // On récupére les données potentiellement stockées
      // Elles seront stockée uniquement si on était connecté avant le refresh
      // Sinon y'aura rien dedans donc autant pas lancer la connexion si on était déjà pas connecté
      const token = localStorage.getItem('token');
      const mail = localStorage.getItem('mail');
      const password = localStorage.getItem('password');
      if (token && mail) {
        store.dispatch(autoLoginFormSubmit(mail, password));
        store.dispatch(loginSuccess(mail, token));
      }
      return next(action);
    }
    default:
      return next(action);
  }
};
