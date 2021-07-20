// == Import npm
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

// Import components 
import Header from '../Header';
import Nav from '../Nav';
import AddWasherForm from 'src/components/AddWasherForm';
// == Import
import Connect from '../Connect';
import Register from '../Register';

// Import style
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Nav />
    {/* <Header /> */}
    <AddWasherForm />
  </div>
);
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
        <Route path="/register" component={Register} />
      </Switch>
      {isConnected && <Connect isConnected={isConnected} handleIsConnected={handleIsConnected} />}

    </div>
  );
};
// == Export
export default App;
