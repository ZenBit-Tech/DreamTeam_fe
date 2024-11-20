import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { persistor } from '@/redux/store';
import { IUser } from '@/types/user.interface';

interface AuthState {
  user: IUser | null;
  token: string | null;
}

interface CredentialsPayload {
  user: IUser;
  token: string;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<CredentialsPayload>) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;

      persistor.purge();
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
