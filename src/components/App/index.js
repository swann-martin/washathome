// == Import npm
import React, { useEffect } from 'react';
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
import MachineDetail from '../../containers/MachineDetail';

// == Import
import Register from '../../containers/Register';
import Cgu from '../../pages/Cgu';
import Team from '../../pages/Team';

// Import style
import './styles.scss';

const App = ({
  isConnected, pressedConnected, foundMachines, openMenu,
}) => {
  useEffect(() => { }, [foundMachines]);
  console.log('foundMachines', foundMachines)
  return (
    <div className="app">
      <Nav />
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
        <Route exact path="/machineDetail/:id" component={MachineDetail} />
      </Switch>
      {pressedConnected && <Connect />}

      {openMenu && <Menu />}
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
