import { configureStore } from '@reduxjs/toolkit';

import { apiSlice } from '@/redux/api/api.slice';
import authReducer from '@/redux/auth/auth.slice';
import exampleReducer from '@/redux/example.slice';

export const store = configureStore({
  reducer: {
    example: exampleReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: !import.meta.env.VITE_PROD,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
