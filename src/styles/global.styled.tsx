import { styled } from 'styled-components';

interface CenteredContainerProps {
  height?: string;
}

export const CenteredContainer = styled.div<CenteredContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ height }) => height || '100vh'};
`;
