import React from 'react';

import { CenteredContainer } from '@styles/global.styled';

import { Spinner } from './Loading.styled';

const Loading: React.FC = () => {
  return (
    <CenteredContainer>
      <Spinner />
    </CenteredContainer>
  );
};

export default Loading;
