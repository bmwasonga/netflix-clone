import React, { useState, useContext } from 'react';

import { FooterContainer } from '../containers/footer';
import { useContent } from '../hooks';

function Browse() {
  const { series } = useContent('series');
  console.log(series);

  return (
    <>
      <FooterContainer />
    </>
  );
}

export default Browse;
