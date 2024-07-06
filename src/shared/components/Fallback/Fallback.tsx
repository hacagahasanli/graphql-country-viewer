import { FC } from 'react';

import { FallbackContainer, FallbackMessage } from './Fallback.styled';

import type { IFallbackProps } from './types';

const FallBack: FC<IFallbackProps> = ({ error, info }) => {
  return (
    <FallbackContainer>
      <FallbackMessage>{error}</FallbackMessage>
      <FallbackMessage>{info}</FallbackMessage>
    </FallbackContainer>
  );
};

export default FallBack;
