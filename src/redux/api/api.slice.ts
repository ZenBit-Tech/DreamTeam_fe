import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

import { setCredentials, logOut } from '@/redux/auth/auth.slice';
import { RootState } from '@/redux/store';
import { IUser } from '@/types/user.interface';

interface RefreshResponse {
  token: string;
  user: IUser;
}

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const { token } = (getState() as RootState).auth;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  try {
    let result = await baseQuery(args, api, extraOptions);
    const unauthorizedStatus = 401;

    if (result.error && result.error.status === unauthorizedStatus) {
      const refreshResult = await baseQuery('/auth/refresh', api, extraOptions);

      if (refreshResult?.data) {
        const { token, user } = refreshResult.data as RefreshResponse;
        api.dispatch(setCredentials({ token, user }));

        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logOut());
      }
    }
    return result;
  } catch (error) {
    return {
      error: { status: 500, data: 'Unexpected error' } as FetchBaseQueryError,
    };
  }
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
