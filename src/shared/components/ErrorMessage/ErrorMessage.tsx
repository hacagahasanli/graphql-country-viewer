import React from 'react';

import { DEFAULT_ERROR_MESSAGE_DATA_TEST_ID } from '@shared/constants';

import { DEFAULT_ERROR_MESSAGE } from './helpers/consts';

import type { IErrorProps } from './helpers/types';

import { CenteredContainer } from '@styles/global.styled';

import { ErrorMessage } from './ErrorMessage.styled';

const Error: React.FC<IErrorProps> = ({
  message = DEFAULT_ERROR_MESSAGE,
  dataTestId = DEFAULT_ERROR_MESSAGE_DATA_TEST_ID,
}) => {
  return (
    <CenteredContainer data-testid={dataTestId}>
      <ErrorMessage>{message}</ErrorMessage>
    </CenteredContainer>
  );
};

export default Error;
