// == Import npm
import React from 'react';
import Header from '../Header';
import Nav from '../Nav';
// == Import

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Nav />
    <Header />
  </div>
);

// == Export
export default App;
