import { Outlet } from 'react-router-dom';
import { lazy } from 'react';
import { Navigation, NavigationBar } from '../components/UI';

const LazySidoDustQuery = lazy(() => import('../components/common/LazySidoDustQuery'));

const Root = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Navigation />
      <LazySidoDustQuery />
    </>
  );
};

export default Root;
