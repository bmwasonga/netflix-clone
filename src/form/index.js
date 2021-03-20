import React from 'react';
import {
  Container,
  Error,
  Title,
  Text,
  TetxtSmall,
  Link,
  Input,
  Submit,
} from './styles/form';

function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

export default Form;

Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
