import { createSlice } from '@reduxjs/toolkit';
import { RootReducerName } from '@reduxs/reducers/type';
import { CommonState } from '@reduxs/types';

const defaultCommonState: CommonState = {
  isLoading: false,
};

const commonSlice = createSlice({
  name: RootReducerName.common,
  initialState: defaultCommonState,
  reducers: {
    showLoading(state: CommonState) {
      state.isLoading = true;
    },
    hideLoading(state: CommonState) {
      state.isLoading = false;
    },
  },
});

export const { showLoading, hideLoading } = commonSlice.actions;
export const CommonReducer = commonSlice.reducer;
