// == Import npm
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

// Import components 
import Header from '../Header';
import Nav from '../Nav';
import Footer from '../Footer';

// == Import
import Connect from '../Connect';
import AddWasherForm from '../AddWasherForm';
import Register from '../../pages/Register';
import Cgv from '../../pages/Cgv';
// Import style
import './styles.scss';

const App = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [pressedConnected, setPressedConnected] = useState(false);


  const handlePressedConnected = () => {
    setPressedConnected(!pressedConnected);
  };
  return (
    <div className="app">
      <Nav isConnected={isConnected} handlePressedConnected={handlePressedConnected} />
      <Switch>
        <Route exact path="/">
          <Header />
        </Route>
        <Route exact path="/cgv" component={Cgv} />
        <Route path="/register" component={Register} />
        <Route path="/addwasher" component={AddWasherForm} />
      </Switch>
      {pressedConnected && <Connect pressedConnected={pressedConnected} handlePressedConnected={handlePressedConnected} />}
      <Footer />

    </div>
  );
};
// == Export
export default App;
