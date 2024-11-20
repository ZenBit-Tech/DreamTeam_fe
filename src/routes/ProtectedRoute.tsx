import React from 'react';
import { Navigate } from 'react-router-dom';

import { pageConfig } from '@/config/pages.config';
import { useAppSelector } from '@/redux/hooks';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useAppSelector((state) => state.auth);

  return user ? children : <Navigate to={pageConfig.login} />;
};

export default ProtectedRoute;
