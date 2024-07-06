import { styled } from "styled-components";

import BaseSizes from "@shared/constants/BaseSizes";

import type { InputProps } from "./types";

export const StyledInput = styled.input<InputProps>`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s ease-in-out;
  width: ${props => {
    switch (props.size) {
      case BaseSizes.S:
        return '100px';
      case BaseSizes.M:
        return '200px';
      case BaseSizes.L:
        return '300px';
      default:
        return '100%';
    }
  }};

  &:focus {
    border-color: #007bff;
  }
`;