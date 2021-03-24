import React, { useContext, useEffect, useState } from 'react';
import { Header, Loading } from '../components/index';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import * as ROUTES from '../contstants/routes';
import logo from '../logo.svg';

function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    console.log('profile', profile);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1">
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="NETFLIX" />
          <Header.Link> Seies</Header.Link>
          <Header.Link> Movies</Header.Link>
        </Header.Frame>

        <Header.Feature>
          <Header.Text>This is a joke</Header.Text>
          <Header.TextSmall>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Header.TextSmall>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}

export default BrowseContainer;
