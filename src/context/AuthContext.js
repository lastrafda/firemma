import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/config';

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        // eslint-disable-next-line no-console
        console.log('se aburrió el usuario y se marchó');
      }
    });
  }, []);

  return (
    <Provider
      value={{
        user,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
