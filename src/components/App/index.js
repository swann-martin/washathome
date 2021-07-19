// == Import npm
import React from 'react';
import Header from '../Header';
import Nav from '../Nav';
// == Import

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <h1>Composant : App</h1>
    <p>test</p>
    <Nav />
    <Header />
  </div>
);

// == Export
export default App;
