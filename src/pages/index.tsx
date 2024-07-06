import { FC, lazy, Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./Home/ui/Home'));

export const Routing: FC = () => (
  <div data-testid='root'>
    <Suspense fallback={<span>Loading...</span>}>
      <Routes>
        <Route path='' element={<Home />} />
      </Routes>
    </Suspense>
  </div>
);
