import React from 'react';

import type { InputProps } from './types';

import { StyledInput } from './Input.styled';

import BaseSizes from '@shared/constants/BaseSizes';

const Input: React.FC<InputProps> = ({ size = BaseSizes.M, ...rest }) => {
  return <StyledInput size={size} {...rest} />;
};

export default Input;
