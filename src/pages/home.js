import React from 'react';

import { HeaderContainer } from '../containers/header';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { OptForm } from '../components';
import { Feature } from '../components';

import { JumbotronContainer } from '../containers/jumbotron';

function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, Tv and more.</Feature.Title>
          <Feature.SubTitle>watch anywhere. Cancell any time.</Feature.SubTitle>

          <OptForm>
            <OptForm.Input placeholder="Email Address..." />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Tetx>
              Ready to watch? Enter your email to create or restart your
              membership
            </OptForm.Tetx>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}

export default Home;
