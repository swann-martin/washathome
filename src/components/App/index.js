// == Import npm
import React from 'react';
import Header from '../Header';
import Nav from '../Nav';
import Connect from '../Connect'
// == Import

import './styles.scss';

// == Composant
const App = () => {
  return (
    <div className="app">
      <Nav />
      <Header />
      <Connect />
    </div>
  );
}
// == Export
export default App;
