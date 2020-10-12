import React from 'react';
import './app.scss';
import firelogo from './firebase.png';

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
