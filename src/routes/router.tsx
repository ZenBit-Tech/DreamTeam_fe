import { createBrowserRouter, Navigate } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import RestrictedRoute from './RestrictedRoute';

import { Sidebar } from '@/components/Sidebar';
import { pageConfig } from '@/config/pages.config';
import { SignInPage } from '@/pages/SignInPage';
import { SuperAdminPage } from '@/pages/SuperAdminPage';

const menuItems = [
  {
    label: 'Orders',
    badgeCount: 2,
    onClick: (): void => console.log('Orders Clicked'),
  },
  { label: 'Routes', onclick: (): void => console.log('Routes Clicked') },
  { label: 'Settings', onClick: (): void => console.log('Settings Clicked') },
];

const footer = {
  avatarText: 'JK',
  companyName: 'Company Name',
  email: 'Marge.Jacobson@gmail.com',
};

const router = createBrowserRouter([
  {
    path: '*',
    element: <Navigate to={pageConfig.login} />,
  },
  {
    path: pageConfig.login,
    element: (
      <RestrictedRoute>
        <SignInPage />
      </RestrictedRoute>
    ),
  },
  {
    path: pageConfig.superAdmin,
    element: (
      <ProtectedRoute>
        <div style={{ display: 'flex' }}>
          <Sidebar menuItems={menuItems} footer={footer} />
          <div style={{ flexGrow: 1, padding: '20px', marginLeft: '250px' }}>
            {' '}
            <SuperAdminPage />
          </div>
        </div>
      </ProtectedRoute>
    ),
  },
]);

export default router;
