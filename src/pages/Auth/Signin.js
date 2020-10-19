import React, { useState } from 'react';
import './Signin.scss';
import app from '../../Firebase/config';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = (event) => {
    event.preventDefault();
    console.log('event prevent default');
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // eslint-disable-next-line no-console
        console.log(
          `Error code: ${errorCode} \nError message: ${errorMessage}`
        );
      });
  };

  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  return (
    <div className="login__container">
      <form onSubmit={handleSignin}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Ex: myemail@gmail.com"
          onChange={handleEmailChange}
          onBlur={handleEmailChange}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="*********"
          onChange={handlePasswordChange}
          onBlur={handlePasswordChange}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
