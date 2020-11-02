import React, { createContext, useEffect, useState } from 'react';
import { firebaseAuth } from '../services/auth';
const SessionContext = createContext();
const { Provider } = SessionContext;

const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let isCancelled = false;
    firebaseAuth.onChange((user) => {
      if (user && !isCancelled) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => {
      isCancelled = true;
    };
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

export { SessionContext, SessionProvider };
