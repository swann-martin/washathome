// == Import npm
import React, { useState } from 'react';
import Header from '../Header';
import Nav from '../Nav';
import Connect from '../Connect';
// == Import

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
      <Header />
      {isConnected && <Connect isConnected={isConnected} handleIsConnected={handleIsConnected} />}
    </div>
  );
};
// == Export
export default App;
