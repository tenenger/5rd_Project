import { lazy } from 'react';

import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { ScrollToTop } from 'components/common';
import { Navigation, NavigationBar } from 'components/UI';

const LazySidoDustQuery = lazy(() => import('components/common/LazySidoDustQuery'));

const SLayout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Root = () => (
  <>
    <NavigationBar />
    <SLayout>
      <Outlet />
    </SLayout>
    <Navigation />
    <ScrollToTop />
    <LazySidoDustQuery />
  </>
);

export default Root;
