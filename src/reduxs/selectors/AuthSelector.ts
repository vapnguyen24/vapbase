import { AuthState } from '@reduxs';
import { RootReducerName } from '@reduxs/reducers/type';

export const getToken = (state: {
  root: { [RootReducerName.auth]: AuthState };
}) => state.root.auth.token;
