import React, { useState } from 'react';
import './Signin.scss';
import { firebaseAuth } from '../../services/auth';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = (event) => {
    event.preventDefault();
    firebaseAuth.signIn(email, password);
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
      <button type="button" onClick={() => firebaseAuth.signOut()}>
        Sing out
      </button>
    </div>
  );
};

export default Login;
