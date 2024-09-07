import { config } from '@config';
import { RootState } from '@hooks/useRedux';
import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';
import { store } from '@reduxs';
import { hideLoading, showLoading } from '@reduxs/reducers/CommonReducer';

export interface RTKResponse<T> {
  data: T;
  status?: number;
  errorStatus?: number;
  errorText?: string;
}

const END_POINT_REFRESH_TOKEN = '/refresh';

const handleError = (
  responseError: {
    error: FetchBaseQueryError;
    data?: undefined;
    meta?: FetchBaseQueryMeta | undefined;
  },
  api: BaseQueryApi,
) => {};

const baseQuery = fetchBaseQuery({
  baseUrl: config.API_URL,
  credentials: 'include',
  prepareHeaders: (headers, { getState, endpoint }) => {
    const token = (getState() as RootState).root.auth.token;
    // const token = 'store.getState().root.auth.token';
    if (token && endpoint !== END_POINT_REFRESH_TOKEN) {
      headers.set('authorization', `Bearer ${token}`);
      // other header....
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  api.dispatch(showLoading());

  let result = await baseQuery(args, api, extraOptions);
  const serializedResult = {
    data: result.data,
    status: result.meta?.response?.status,
    errorStatus: result.error?.status,
    errorText: result.error?.data,
  };

  if (!result.error) {
    api.dispatch(hideLoading());
    return { data: serializedResult };
  }

  if (result.error.status === 401) {
    // checking whether the mutex is locked
    handleError(result, api);
    api.dispatch({ type: 'USER_LOGOUT' });
  } else if (result.error.status !== 403) {
    handleError(result, api);
  }
  api.dispatch(hideLoading());

  return { data: result };
};

export const apiService = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  tagTypes: ['POSTS'],
});
