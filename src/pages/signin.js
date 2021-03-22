import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'; //
import { FirebaseContext } from '../context/firebase';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import * as ROUTES from '../contstants/routes';

function Signin() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  //check if input elements are valid, password and email. include regex if possible

  const isInvalid = password === '' || emailAddress === '';

  const handleSignin = (e) => {
    e.preventDefault();

    //firebase will work here
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        //push to browse page
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign in</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Enter Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />

            <Form.Input
              placeholder="Enter your password"
              type="password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />

            <Form.Submit disabled={isInvalid} type="submit">
              Sign in
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now!</Form.Link>
          </Form.Text>
          <Form.TetxtSmall>
            This page is protected by Google to ensure you're not a robot.
          </Form.TetxtSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}

export default Signin;
