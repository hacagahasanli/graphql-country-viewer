import { FC } from 'react';

import { DEFAULT_FALLBACK_DATA_TEST_ID } from '@shared/constants';

import type { IFallbackProps } from './helpers/types';

import { FallbackContainer, FallbackMessage } from './FallBack.styled';

const FallBack: FC<IFallbackProps> = ({
  info,
  error,
  dataTestId = DEFAULT_FALLBACK_DATA_TEST_ID,
}) => {
  return (
    <FallbackContainer data-testid={dataTestId}>
      <FallbackMessage>{error}</FallbackMessage>
      <FallbackMessage>{info}</FallbackMessage>
    </FallbackContainer>
  );
};

export default FallBack;
