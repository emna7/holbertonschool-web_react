import React from 'react';
import './App.css';
import logo from '../assets/holberton_logo.jpg';
import { getFooterCopy, getFullYear } from '../utils/utils';

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <p>
          Login to access the full dashboard
        </p>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" />
        <button>OK</button>
      </div>
    </div>
  );
}

export default App;
