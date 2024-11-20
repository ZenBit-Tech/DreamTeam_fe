import { createBrowserRouter, Navigate } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import RestrictedRoute from './RestrictedRoute';

import { pageConfig } from '@/config/pages.config';
import { AdminPage } from '@/pages/AdminPage';
import { SignInPage } from '@/pages/SignInPage';
import { SuperAdminPage } from '@/pages/SuperAdminPage';

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
        <SuperAdminPage />
      </ProtectedRoute>
    ),
  },
  {
    path: pageConfig.admin,
    element: (
      <ProtectedRoute>
        <AdminPage />
      </ProtectedRoute>
    ),
  },
]);

export default router;
