// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import history from './utils/history';
// == Import : local
// Composants
import App from 'src/containers/App';
import { Provider } from 'react-redux';
import store from './store';
import { Suspense } from 'react';

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <Provider store={store}>
    <Router history={history}>
      <Suspense fallback="Loading">
        <App />
      </Suspense>
    </Router>
  </Provider>
);
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
