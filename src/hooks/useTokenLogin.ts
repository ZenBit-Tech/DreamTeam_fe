import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import { pageConfig } from '@/config/pages.config';
import { setCredentials } from '@/redux/auth/auth.slice';
import { useLoginMutation } from '@/redux/auth/authApi.slice';

interface UseTokenLoginReturn {
  token: string | null;
  isLoginError: boolean;
}

export const useTokenLogin = (): UseTokenLoginReturn => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [login, { isError: isLoginError }] = useLoginMutation();

  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');

  useEffect(() => {
    if (token) {
      (async (): Promise<void> => {
        try {
          const response = await login({ token }).unwrap();
          dispatch(setCredentials(response));
          navigate(pageConfig.superAdmin);
        } catch (error) {
          throw new Error(`Login failed: ${error}`);
        }
      })();
    }
  }, [token, login, dispatch, navigate]);

  return { token, isLoginError };
};
