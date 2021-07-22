// == Import npm
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

// Import components
import Connect from 'src/containers/Connect';
import AddWasherForm from 'src/containers/AddWasherForm';
import Header from '../Header';
import Nav from '../Nav';
import Footer from '../Footer';

// == Import
import Register from '../../pages/Register';
import Cgv from '../../pages/Cgv';
// Import style
import './styles.scss';
import Profile from '../../pages/Profile';
import Menu from '../Menu';

const App = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [pressedConnected, setPressedConnected] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleIsConnected = () => {
    setIsConnected(!isConnected);
  };

  const handlePressedConnected = () => {
    setPressedConnected(!pressedConnected);
  };

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="app">
      <Nav
        isConnected={isConnected}
        handlePressedConnected={handlePressedConnected}
        handleOpenMenu={handleOpenMenu}
      />
      <Switch>
        <Route exact path="/">
          <Header />
        </Route>
        <Route exact path="/cgv" component={Cgv} />
        <Route path="/register" component={Register} />
        <Route path="/addwasher" component={AddWasherForm} />
        <Route path="/profile" component={Profile} />
      </Switch>
      {pressedConnected
        && (
          <Connect
            pressedConnected={pressedConnected}
            handlePressedConnected={handlePressedConnected}
            handleIsConnected={handleIsConnected}
          />
        )}

      {openMenu && <Menu handleOpenMenu={handleOpenMenu} handleIsConnected={handleIsConnected} />}
      <Footer />
    </div>
  );
};
// == Export
export default App;
