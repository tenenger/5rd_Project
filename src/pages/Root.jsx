import { lazy } from 'react';

import { Outlet } from 'react-router-dom';

import { Navigation, NavigationBar } from 'components/UI';

const LazySidoDustQuery = lazy(() => import('components/common/LazySidoDustQuery'));

const Root = () => (
  <>
    <NavigationBar />
    <Outlet />
    <Navigation />
    <LazySidoDustQuery />
  </>
);

export default Root;
