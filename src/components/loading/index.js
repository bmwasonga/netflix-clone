import React from 'react';
import { LockBody, ReleaseBody, Spinner, Picture } from './styles/styles';

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} alt="user-picture" />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
