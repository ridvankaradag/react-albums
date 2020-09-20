import React from 'react';
import logo from '../assets/logo.svg';

import appStyles from './index.module.css'

function App() {
  return (
    <div className={appStyles.app}>
      <header className={appStyles.header}>
        <img src={logo} className={appStyles.logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={appStyles.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
