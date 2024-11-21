import React from 'react';
import { Navigate } from 'react-router-dom';

import { pageConfig } from '@/config/pages.config';
import { useAppSelector } from '@/redux/hooks';

interface RestrictedRouteProps {
  children: JSX.Element;
}

const RestrictedRoute: React.FC<RestrictedRouteProps> = ({ children }) => {
  const { user } = useAppSelector((state) => state.auth);

  return user ? <Navigate to={pageConfig.superAdmin} /> : children;
};

export default RestrictedRoute;
