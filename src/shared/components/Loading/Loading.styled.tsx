import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border-left-color: #333;
  border: 4px solid rgba(0, 0, 0, 0.1);
  animation: ${spin} 1s linear infinite;
`;
