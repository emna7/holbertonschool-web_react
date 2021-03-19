import React from 'react';
//import logo from '../assets/holberton_logo.jpg';
import './Header.css';

function Header() {
  return (
    <div className="App-Header">
      <img
        src={logo}
	src='./assets/holberton_logo.jpg'
	alt='logo'
      />
      <h1>School dashboard</h1>
    </div>
  )
}

export default Header;
