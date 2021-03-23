import React from 'react';
import { FooterContainer } from '../containers/footer';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';

function Browse() {
  const { series } = useContent('series');
  const { films } = useContent('films');

  const slides = selectionFilter({ series, films });
  return (
    <>
      <FooterContainer />
    </>
  );
}

export default Browse;
