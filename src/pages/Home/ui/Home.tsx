import { FC } from 'react';

import Countries from '@features/Countries/Countries';

import { HomeContainer } from './Home.styled';

const Home: FC = () => {
  return (
    <HomeContainer>
      <Countries />
    </HomeContainer>
  );
};

export default Home;
