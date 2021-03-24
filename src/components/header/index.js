import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Background,
  Container,
  Logo,
  ButtonLink,
  Feature,
  Text,
  TetxtSmall,
  Link,
} from './styles/Header';

function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}> {children}</Text>;
};

Header.Link = function HeaderLink({ children, ...restProps }) {
  return <Link {...restProps}> {children}</Link>;
};

Header.TextSmall = function HeaderTextSmall({ children, ...restProps }) {
  return <TetxtSmall {...restProps}> {children}</TetxtSmall>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

export default Header;
