// == Import npm
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

// Import components

import MachineDetail from 'src/components/MachineDetail';
import Header from '../Header';
import Nav from '../Nav';

import Footer from '../Footer';
// == Import
import Connect from '../Connect';
import Register from '../../pages/Register';
import Cgv from '../../pages/Cgv';
// Import style
import './styles.scss';


// == Composant
const App = () => {
  const [isConnected, setIsConnected] = useState(false);

  const handleIsConnected = () => {
    setIsConnected(!isConnected);
  };
  return (
    <div className="app">
      <Nav isConnected={isConnected} handleIsConnected={handleIsConnected} />
      <Switch>
        <Route exact path="/">
          <Header />
        </Route>
        <Route exact path="/cgv" component={Cgv} />
        <Route path="/register" component={Register} />
      </Switch>
      <MachineDetail />
      <Footer />
      {isConnected && <Connect isConnected={isConnected} handleIsConnected={handleIsConnected} />}

    </div>
  );
};
// == Export
export default App;
