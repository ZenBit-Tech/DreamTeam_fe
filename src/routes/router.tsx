import { createBrowserRouter } from 'react-router-dom';

import AdminPage from '@/pages/AdminPage';
import { SignInPage } from '@/pages/SignInPage';
import { SuperAdminPage } from '@/pages/SuperAdminPage';

const router = createBrowserRouter([
  { path: '/', element: <SignInPage /> },
  { path: '/superadmin', element: <SuperAdminPage /> },
  { path: '/admins', element: <AdminPage /> },
]);

export default router;
