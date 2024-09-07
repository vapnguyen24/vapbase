import { CommonState } from '@reduxs';
import { RootReducerName } from '@reduxs/reducers/type';

export const getLoadingState = (state: {
  root: { [RootReducerName.common]: CommonState };
}) => state.root.common.isLoading;
