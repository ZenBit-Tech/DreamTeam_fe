import { createBrowserRouter } from 'react-router-dom';

import { pageConfig } from '@/config/pages.config';
import { AdminPage } from '@/pages/AdminPage';
import { SignInPage } from '@/pages/SignInPage';
import { SuperAdminPage } from '@/pages/SuperAdminPage';

const router = createBrowserRouter([
  { path: pageConfig.login, element: <SignInPage /> },
  { path: pageConfig.superAdmin, element: <SuperAdminPage /> },
  { path: pageConfig.admin, element: <AdminPage /> },
]);

export default router;
