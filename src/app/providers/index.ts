import { compose } from '@shared/lib';

import withRouter from './withRouter';
import withApolloClient from './withApolloClient';

export const withProviders = compose(
  withRouter,
  withApolloClient
);
