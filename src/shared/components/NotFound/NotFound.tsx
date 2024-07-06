import { CenteredContainer } from '@styles/global.styled';

import { NotFoundMessage } from './NotFound.styled';

const NotFound = ({ message = "Country not found!" }) => {
  return (
    <CenteredContainer height='100%'>
      <NotFoundMessage>{message}</NotFoundMessage>
    </CenteredContainer>
  );
};

export default NotFound;
