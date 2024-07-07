import { FC } from 'react';

import { DEFAULT_NOT_FOUND_DATA_TEST_ID } from '@shared/constants';

import { DEFAULT_NOT_FOUND_MESSAGE } from './helpers/consts';

import type { INotFoundProps } from './helpers/types';

import { NotFoundMessage } from './NotFound.styled';
import { CenteredContainer } from '@styles/global.styled';

const NotFound: FC<INotFoundProps> = ({
  dataTestId = DEFAULT_NOT_FOUND_DATA_TEST_ID,
  message = DEFAULT_NOT_FOUND_MESSAGE,
}) => {
  return (
    <CenteredContainer height='100%' data-testid={dataTestId}>
      <NotFoundMessage>{message}</NotFoundMessage>
    </CenteredContainer>
  );
};

export default NotFound;
