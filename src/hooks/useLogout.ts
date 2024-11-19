import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { pageConfig } from '@/config/pages.config';
import { logOut } from '@/redux/auth/auth.slice';
import { useLogoutMutation } from '@/redux/auth/authApi.slice';

interface UseLogoutReturn {
  isLoading: boolean;
  isSuccess: boolean;
  isLogoutError: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
  handleLogout: () => Promise<{ message: string }>;
}

export const useLogout = (): UseLogoutReturn => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logout, { isLoading, isSuccess, isError: isLogoutError, error }] =
    useLogoutMutation();

  const handleLogout = async (): Promise<{ message: string }> => {
    try {
      const response = await logout().unwrap();
      dispatch(logOut());
      navigate(pageConfig.login);
      return response;
    } catch (err) {
      throw new Error(`Logout failed: ${err}`);
    }
  };

  return {
    isLoading,
    isSuccess,
    isLogoutError,
    error,
    handleLogout,
  };
};
