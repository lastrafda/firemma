import React from 'react';
import './app.scss';
import firelogo from './firebase.png';
import * as firebase from 'firebase/app';

firebase.initializeApp({
  apiKey: process.env.FIRE_API_KEY,
  authDomain: process.env.FIRE_AUTH_DOMAIN,
  databaseURL: process.env.FIRE_DB_URL,
  projectId: process.env.FIRE_PROJECT_ID,
  storageBucket: process.env.FIRE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIRE_MESSAGING_SENDER_ID,
  appId: process.env.FIRE_APP_ID,
  measurementId: process.env.FIRE_MEASUREMENT_ID,
});

const App = () => {
  return (
    <>
      <img src={firelogo} alt="logo de firebase" />
      <div className="purple">Hot module replacement is enabled</div>
      <pre>NODE_ENV={process.env.NODE_ENV}</pre>
    </>
  );
};

export default App;
