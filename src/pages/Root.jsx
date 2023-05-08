import { Outlet } from 'react-router-dom';
import { lazy } from 'react';
import { Navigation } from '../components/UI';

const LazySidoDustQuery = lazy(() => import('../components/common/LazySidoDustQuery'));

const Root = () => {
  return (
    <>
      <Outlet />
      <Navigation />
      <LazySidoDustQuery />
    </>
  );
};

export default Root;
