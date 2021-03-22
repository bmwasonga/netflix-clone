import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import * as ROUTES from './contstants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/route.helper';
import useAuthListenter from './hooks/use-auth-listener';
import { Home, Browse, Signin, Signup } from './pages';

export default function App() {
  const { user } = useAuthListenter();

  return (
    <Router>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_IN}
        exact
      >
        <Signin />
      </IsUserRedirect>

      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_UP}
        exact
      >
        <Signup />
      </IsUserRedirect>

      <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
        <Browse />
      </ProtectedRoute>

      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.HOME}
        exact
      >
        <Home />
      </IsUserRedirect>
    </Router>
  );
}
