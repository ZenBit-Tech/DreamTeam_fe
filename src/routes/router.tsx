import { createBrowserRouter } from 'react-router-dom';

import { SignInPage } from '@/pages/SignInPage';
import { SuperAdminPage } from '@/pages/SuperAdminPage';

const router = createBrowserRouter([
  { path: '/', element: <SignInPage /> },
  { path: '/superadmin', element: <SuperAdminPage /> },
]);

export default router;
