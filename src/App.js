import React, { useEffect } from 'react';
import './app.scss';
import firelogo from './firebase.png';

const App = () => {
  useEffect(
    () => console.log('NODE_ENV from webpack', process.env.NODE_ENV),
    []
  );
  return (
    <>
      <img src={firelogo} />
      <div className="purple">Hot module replacement is enabled</div>
    </>
  );
};

export default App;
