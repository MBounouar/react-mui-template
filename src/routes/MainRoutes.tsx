import { lazy } from 'react';

// import Loadable from 'components/Loadable';
import MainLayout from '../layouts/MainLayout';

const DashboardDefault = lazy(() => import('../pages/DashboardDefault'));
// import DashboardDefault from '../pages/DashboardDefault';

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />,
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <>BLALLLLL</>,
        },
      ],
    },
  ],
};

export default MainRoutes;
