import { CountryList } from '@entities/Countries';

import { StyledContainer, StyledTitle } from './Countries.styled';

const Countries = () => {
  return (
    <StyledContainer>
      <StyledTitle>Countries</StyledTitle>
      <CountryList />
    </StyledContainer>
  );
};

export default Countries;
