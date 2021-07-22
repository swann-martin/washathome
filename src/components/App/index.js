// == Import npm
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// Import components
import Connect from 'src/containers/Connect';
import AddWasherForm from 'src/containers/AddWasherForm';
import Cards from 'src/containers/Cards';
import Nav from 'src/containers/Nav';
import Header from '../Header';
import Footer from '../Footer';

// == Import
import Register from '../../pages/Register';
import Cgv from '../../pages/Cgv';
// Import style
import './styles.scss';
import Profile from '../../pages/Profile';
import Menu from '../Menu';

const App = ({ isConnected, pressedConnected }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="app">
      <Nav
        isConnected={isConnected}
        handleOpenMenu={handleOpenMenu}
      />
      <Switch>
        <Route exact path="/">
          <Header />
          <Cards />
        </Route>
        <Route exact path="/cgv" component={Cgv} />
        <Route path="/register" component={Register} />
        <Route path="/addwasher" component={AddWasherForm} />
        <Route path="/profile" component={Profile} />
        <Route path="/searchresult" component={Cards} />
      </Switch>
      {pressedConnected && <Connect />}

      {openMenu && <Menu handleOpenMenu={handleOpenMenu} />}
      <Footer />
    </div>
  );
};

App.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  pressedConnected: PropTypes.bool.isRequired,
};
// == Export
export default App;
