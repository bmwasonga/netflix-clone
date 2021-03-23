import React from 'react';
import {
  Container,
  Base,
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

Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.TetxtSmall = function FormTextSmall({ children, ...restProps }) {
  return <TetxtSmall {...restProps}>{children}</TetxtSmall>;
};

Form.Link = function FormLink({ children, ...restProps }) {
  return <Link {...restProps}> {children}</Link>;
};

Form.Input = function FormIput({ children, ...restProps }) {
  return <Input {...restProps} />;
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};
export default Form;
