// == Import npm
import React from 'react';
import Header from '../Header';
import Nav from '../Nav';
import AddWasherForm from 'src/components/AddWasherForm';
// == Import

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Nav />
    <Header />
    <AddWasherForm />
  </div>
);

// == Export
export default App;
