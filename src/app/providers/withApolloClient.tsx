import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import type { HOC } from './types';

const client = new ApolloClient({
  uri: import.meta.env.VITE_BASE_URL,
  cache: new InMemoryCache(),
});

const withApolloClient: HOC = (Component) =>
  function ComponentWrapper(props) {
    return (
      <ApolloProvider client={client}>
        <Component {...props} />
      </ApolloProvider>
    );
  };

export default withApolloClient;
