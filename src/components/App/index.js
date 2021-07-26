// == Import npm
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// Import components
import Connect from 'src/containers/Connect';
import Cards from 'src/containers/Cards';
import Nav from 'src/containers/Nav';
import AddWasherForm from '../../containers/AddWasherForm';
import Profile from '../../containers/Profile';
import Menu from '../../containers/Menu';
import Header from '../Header';
import Footer from '../Footer';

// == Import
import Register from '../../containers/Register';
import Cgu from '../../pages/Cgu';
import Team from '../../pages/Team';

// Import style
import './styles.scss';

const App = ({ isConnected, pressedConnected, foundMachines }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => { }, [foundMachines]);

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
        <Route exact path="/cgu" component={Cgu} />
        <Route path="/register" component={Register} />
        <Route path="/addwasher" component={AddWasherForm} />
        <Route path="/profile" component={Profile} />
        <Route path="/searchresult" component={Cards} />
        <Route path="/team" component={Team} />
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
