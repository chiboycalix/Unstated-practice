import React from 'react';
import { Provider } from 'unstated';
import './App.css';
import Home from './Views/Home';
import Users from './Views/Users';

function App() {
  return (
    <div className="App">
      <Provider>
        <Home />
        <Users />
      </Provider>
    </div>
  );
}

export default App;
