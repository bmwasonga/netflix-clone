import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../contstants/routes';
import logo from '../logo.svg';

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="NETFLIX" />
        <Header.ButtonLink to={ROUTES.SIGN_IN}> Sign in</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
