// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';

// Import components
import PasswordChangeForm from 'src/containers/PasswordChangeForm';
import Connect from 'src/containers/Connect';
import Cards from 'src/containers/Cards';
import Loader from 'react-loader-spinner';
import Nav from 'src/containers/Nav';
import AddWasherForm from '../../containers/AddWasherForm';
import MyMachines from '../../containers/MyMachines';
import Profile from '../../containers/Profile';
import Menu from '../../containers/Menu';
import Header from '../Header';
import Footer from '../Footer';
import MachineDetail from '../../containers/MachineDetail';
import Bookings from '../../containers/Bookings';
import BookingDetail from '../../containers/BookingDetail';
import ErrorPage from '../../pages/ErrorPage';

// == Import
import Register from '../../containers/Register';
import Cgu from '../../pages/Cgu';
import Team from '../../pages/Team';
// Import style
import './styles.scss';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const App = ({
  pressedConnected,
  foundMachines,
  openMenu,
  loading,
}) => (

  <div className="app">
    <Nav />
    <ToastContainer />
    {loading && <Loader type="Puff" color="#246e89" height={60} width={60} className="loader" />}
    <Switch>
      <Route exact path="/">
        <Header foundMachines={foundMachines} />
        {foundMachines.length > 0 && <Cards />}
      </Route>
      <Route path="/changePassword" component={PasswordChangeForm} />
      <Route path="/cgu" component={Cgu} />
      <Route path="/register" component={Register} />
      <Route path="/addwasher" component={AddWasherForm} />
      <Route path="/profile" component={Profile} />
      <Route path="/bookings" component={Bookings} />
      <Route exact path="/bookingDetail/:id" component={BookingDetail} />
      <Route path="/searchresult" component={Cards} />
      <Route path="/team" component={Team} />
      <Route exact path="/machineDetail/:id" component={MachineDetail} />
      <Route exact path="/MyMachines" component={MyMachines} />
      <Route exact path="" component={ErrorPage} />
    </Switch>
    {pressedConnected && <Connect />}
    {openMenu && <Menu />}
    <Footer />
  </div>
);

App.propTypes = {
  foundMachines: PropTypes.array,
  pressedConnected: PropTypes.bool.isRequired,
  openMenu: PropTypes.bool.isRequired,

};

App.defaultProps = {
  foundMachines: [],
};

export default App;
