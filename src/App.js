import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import AppShell from './AppShell';
import Fighters from './pages/Fighters/Fighters';
import FourOFour from './pages/FourOFour';
import Home from './pages/Home';
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import {
  SessionContext,
  SessionProvider,
} from './context/SessionContext';

const UnauthenticatedRoutes = () => (
  <Switch>
    <Route path="/signin">
      <Signin />
    </Route>
    <Route path="/signup">
      <Signup />
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="*">
      <FourOFour />
    </Route>
  </Switch>
);

const AuthenticatedRoute = ({ children, ...rest }) => {
  const session = useContext(SessionContext);
  return (
    <Route
      {...rest}
      render={() =>
        session.user ? (
          <AppShell>{children}</AppShell>
        ) : (
          <Redirect to="/" />
        )
      }
    ></Route>
  );
};

const AppRoutes = () => {
  return (
    <>
      <Switch>
        <AuthenticatedRoute path="/fighters">
          <Fighters />
        </AuthenticatedRoute>
        <UnauthenticatedRoutes />
      </Switch>
    </>
  );
};

const App = () => {
  return (
    <>
      <Router>
        <SessionProvider>
          <AppRoutes />
        </SessionProvider>
      </Router>
    </>
  );
};

export default App;
