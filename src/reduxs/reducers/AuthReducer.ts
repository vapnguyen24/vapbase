import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootReducerName } from '@reduxs/reducers/type';
import { AuthState } from '@reduxs/types';

const defaultAuthState: AuthState = {
  token: 'some token',
  isLogin: false,
};

const authSlice = createSlice({
  name: RootReducerName.auth,
  initialState: defaultAuthState,
  reducers: {
    authToken(state: AuthState, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setLoginStatus(state: AuthState, action: PayloadAction<boolean>) {
      state.isLogin = action.payload;
    },
  },
});

export const { setLoginStatus, authToken } = authSlice.actions;
export const AuthReducer = authSlice.reducer;
