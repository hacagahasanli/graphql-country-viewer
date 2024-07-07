import { styled } from 'styled-components';

import BaseSizes from '@shared/constants/BaseSizes';

import { INPUT_WIDTHS } from './helpers/consts';

import type { IInputProps } from './helpers/types';

const { S, M, L } = BaseSizes;

export const StyledInput = styled.input<IInputProps>`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s ease-in-out;
  width: ${(props) => {
    switch (props.size) {
      case S:
        return INPUT_WIDTHS[S];
      case M:
        return INPUT_WIDTHS[M];
      case L:
        return INPUT_WIDTHS[L];
      default:
        return '100%';
    }
  }};

  &:focus {
    border-color: #007bff;
  }
`;
