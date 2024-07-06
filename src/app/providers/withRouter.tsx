import { Suspense } from 'react';

import { BrowserRouter } from 'react-router-dom';

import { Loading } from '@shared/components';

import type { HOC } from './types';

const withRouter: HOC = (Component) =>
  function ComponentWrapper(props) {
    return (
      <BrowserRouter basename={''} data-testid='root'>
        <Suspense fallback={<Loading />}>
          <Component {...props} />
        </Suspense>
      </BrowserRouter>
    );
  };

export default withRouter;
