import React from 'react';

import type { ErrorProps } from './types';

import { CenteredContainer } from '@styles/global.styled';

import { ErrorMessage } from './ErrorMessage.styled';

const Error: React.FC<ErrorProps> = ({ message = 'An error occurred.' }) => {
  return (
    <CenteredContainer>
      <ErrorMessage>{message}</ErrorMessage>
    </CenteredContainer>
  );
};

export default Error;
