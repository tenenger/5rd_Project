import { Outlet } from 'react-router-dom';
import { Navigation } from '../components/UI';

const Root = () => (
  <>
    <Outlet />
    <Navigation />
  </>
);

export default Root;
