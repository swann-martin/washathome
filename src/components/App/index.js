// == Import npm
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

// Import components 
import Header from '../Header';
import Nav from '../Nav';
import Connect from '../Connect';
import Register from '../Register';

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
        <Route path="/register" component={Register} />
      </Switch>
      {isConnected && <Connect isConnected={isConnected} handleIsConnected={handleIsConnected} />}

    </div>
  );
};
// == Export
export default App;
