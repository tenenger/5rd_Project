import { lazy } from 'react';

import { Outlet } from 'react-router-dom';

import { ScrollToTop } from 'components/common';
import { Navigation, NavigationBar } from 'components/UI';

const LazySidoDustQuery = lazy(() => import('components/common/LazySidoDustQuery'));

const Root = () => (
  <>
    <NavigationBar />
    <Outlet />
    <Navigation />
    <ScrollToTop />
    <LazySidoDustQuery />
  </>
);

export default Root;
