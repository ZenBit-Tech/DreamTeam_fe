import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

interface UseErrorHandlingReturn {
  getErrorMessage: (error: FetchBaseQueryError | SerializedError) => string;
}

interface ErrorResponse {
  message: string;
  error: string;
  statusCode: number;
}

export const useErrorHandling = (): UseErrorHandlingReturn => {
  const isFetchBaseQueryError = (
    error: FetchBaseQueryError | SerializedError
  ): error is FetchBaseQueryError & { data: ErrorResponse } => {
    return (error as FetchBaseQueryError).data !== undefined;
  };

  const getErrorMessage = (
    error: FetchBaseQueryError | SerializedError
  ): string => {
    if (isFetchBaseQueryError(error) && error.data?.message) {
      return error.data.message;
    }
    return 'An unexpected error occurred';
  };

  return {
    getErrorMessage,
  };
};
