import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { useSendLoginLinkMutation } from '@/redux/auth/authApi.slice';

interface UseSendLoginLinkReturn {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  data: { message: string } | undefined;
  error: FetchBaseQueryError | SerializedError | undefined;
  handleSendLoginLink: (email: string) => Promise<void>;
}

export const useSendLoginLink = (): UseSendLoginLinkReturn => {
  const [sendLoginLink, { isLoading, isSuccess, isError, data, error }] =
    useSendLoginLinkMutation();

  const handleSendLoginLink = async (email: string): Promise<void> => {
    try {
      await sendLoginLink({ email }).unwrap();
    } catch (err) {
      throw new Error(`Error sending login link: ${err}`);
    }
  };

  return {
    isLoading,
    isSuccess,
    isError,
    data,
    error,
    handleSendLoginLink,
  };
};
