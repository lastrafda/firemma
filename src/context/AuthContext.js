import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/config';

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged(setUser);
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
