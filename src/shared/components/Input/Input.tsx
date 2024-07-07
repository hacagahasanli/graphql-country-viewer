import React from 'react';

import type { IInputProps } from './helpers/types';

import { StyledInput } from './Input.styled';

import BaseSizes from '@shared/constants/BaseSizes';
import { DEFAULT_INPUT_DATA_TEST_ID } from '@shared/constants';

const Input: React.FC<IInputProps> = ({
  size = BaseSizes.M,
  dataTestId = DEFAULT_INPUT_DATA_TEST_ID,
  ...rest
}) => {
  return <StyledInput data-testid={dataTestId} size={size} {...rest} />;
};

export default Input;
