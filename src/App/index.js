import React from 'react';
import appStyles from './index.module.css'
import PhotoUpload from '../components/PhotoUpload';

function App() {
  return (
    <div className={appStyles.app}>
      <PhotoUpload/>
    </div>
  );
}

export default App;
