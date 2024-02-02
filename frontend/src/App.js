// App.js

import React, { useState } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import "./App.css"

const App = () => {
  const [token, setToken] = useState('');

  return (
    <div className='App'>
      <h1>Hacker News Clone</h1>
      {token ? (
        <Dashboard token={token} />
      ) : (
        <>
          <Signup />
          <Login setToken={setToken} />
        </>
      )}
    </div>
  );
};

export default App;
