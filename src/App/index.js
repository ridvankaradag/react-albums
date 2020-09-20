import React from 'react';
import appStyles from './index.module.css'
import Routes from '../routes';

function App() {
  return (
    <div className={appStyles.app}>
      <Routes/>
    </div>
  );
}

export default App;
