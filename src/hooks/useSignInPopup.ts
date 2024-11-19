import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

type SignInPopupState = {
  type: 'error' | 'success';
  text: string;
} | null;

type UseSignInPopupArgs = {
  isError: boolean;
  isLoginError: boolean;
  token: string | null;
  isSuccess: boolean;
  error: FetchBaseQueryError | null;
};

export const useSignInPopup = ({
  isError,
  isLoginError,
  token,
  isSuccess,
  error,
}: UseSignInPopupArgs): SignInPopupState | null => {
  const [popup, setPopup] = useState<SignInPopupState>(null);
  const { t } = useTranslation();

  useEffect(() => {
    let errorMessage = t('errorMessage');
    const successMessage = t('successLoginMessage');

    if (isError) {
      const notFoundStatusCode = 404;

      if (error && 'status' in error && error.status === notFoundStatusCode) {
        errorMessage = t('userNotFoundError');
      }

      setPopup({
        type: 'error',
        text: errorMessage,
      });
    } else if (token && isLoginError) {
      setPopup({
        type: 'error',
        text: errorMessage,
      });
    } else if (isSuccess) {
      setPopup({
        type: 'success',
        text: successMessage,
      });
    } else {
      setPopup(null);
    }
  }, [isError, isLoginError, isSuccess, token, error]);

  return popup;
};
