import React from 'react';
import './app.scss';
import firelogo from './firebase.png';

const App = () => {
  return (
    <>
      <img src={firelogo} />
      <div className="purple">Hot module replacement is enabled</div>
    </>
  );
};

export default App;
