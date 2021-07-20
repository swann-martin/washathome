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
import Profile from '../../pages/Profile';

const App = () => {
  const [isConnected, setIsConnected] = useState(true);
  const [pressedConnected, setPressedConnected] = useState(false);
  const [openProfile, setOpenProfile] = useState(true);

  const handleIsConnected = () => {
    setIsConnected(!isConnected);
  };

  const handlePressedConnected = () => {
    setPressedConnected(!pressedConnected);
  };

  const handleOpenProfile = () => {
    setOpenProfile(!openProfile);
  };
  return (
    <div className="app">
      <Nav
        isConnected={isConnected}
        handlePressedConnected={handlePressedConnected}
        handleOpenProfile={handleOpenProfile}
      />
      <Switch>
        <Route exact path="/">
          <Header />
        </Route>
        <Route exact path="/cgv" component={Cgv} />
        <Route path="/register" component={Register} />
        <Route path="/addwasher" component={AddWasherForm} />
      </Switch>
      {pressedConnected
        && (
          <Connect
            pressedConnected={pressedConnected}
            handlePressedConnected={handlePressedConnected}
            handleIsConnected={handleIsConnected}
          />
        )}

      {openProfile && <Profile handleOpenProfile={handleOpenProfile} />}
      <Footer />
    </div>
  );
};
// == Export
export default App;
