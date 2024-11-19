import { apiSlice } from '@/redux/api/api.slice';
import { IUser } from '@/types/user.interface';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<{ token: string; user: IUser }, { token: string }>({
      query: (credentials) => {
        try {
          return {
            url: '/auth/login',
            method: 'POST',
            body: { ...credentials },
          };
        } catch (error) {
          throw new Error(`Failed to configure login request: ${error}`);
        }
      },
    }),
    sendLoginLink: builder.mutation<{ message: string }, { email: string }>({
      query: (credentials) => {
        try {
          return {
            url: '/auth/send-login-link',
            method: 'POST',
            body: credentials,
          };
        } catch (error) {
          throw new Error(`Failed to send login link: ${error}`);
        }
      },
    }),
    refreshAccessToken: builder.mutation<{ token: string; user: IUser }, void>({
      query: () => {
        try {
          return {
            url: '/auth/refresh',
            method: 'GET',
          };
        } catch (error) {
          throw new Error(`Failed to refresh access token: ${error}`);
        }
      },
    }),
    logout: builder.mutation<{ message: string }, void>({
      query: () => {
        try {
          return {
            url: '/auth/logout',
            method: 'GET',
          };
        } catch (error) {
          throw new Error(`Failed to logout: ${error}`);
        }
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useSendLoginLinkMutation,
  useRefreshAccessTokenMutation,
  useLogoutMutation,
} = authApiSlice;
