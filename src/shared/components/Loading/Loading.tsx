import { FC } from 'react';

import { DEFAULT_LOADING_DATA_TEST_ID } from '@shared/constants';

import type { ILoadingProps } from './helpers/types';

import { Spinner } from './Loading.styled';
import { CenteredContainer } from '@styles/global.styled';

const Loading: FC<ILoadingProps> = ({
  dataTestId = DEFAULT_LOADING_DATA_TEST_ID,
}) => {
  return (
    <CenteredContainer data-testid={dataTestId}>
      <Spinner />
    </CenteredContainer>
  );
};

export default Loading;
