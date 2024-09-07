import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { apiService } from '@reduxs/api/apiService';
import { AuthReducer } from '@reduxs/reducers/AuthReducer';
import { CommonReducer } from '@reduxs/reducers/CommonReducer';
import { RootReducerName } from '@reduxs/reducers/type';
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const rootReducer = combineReducers({
  [RootReducerName.auth]: AuthReducer,
  [RootReducerName.common]: CommonReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: 30000,
  whitelist: [RootReducerName.auth],
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    root: persistedReducer,
    [apiService.reducerPath]: apiService.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(apiService.middleware),
});

export const persistor = persistStore(store);
