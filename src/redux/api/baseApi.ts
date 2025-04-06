import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import Snackbar from 'react-native-snackbar';
import { BASE_URL, GOOGLE_MAPS_API_KEY } from '../../config';

export const fetchBase = fetchBaseQuery({
  baseUrl: BASE_URL,
  paramsSerializer: params => {
    const defaultParams = { key: GOOGLE_MAPS_API_KEY ?? '' };
    const serializedParams = new URLSearchParams({
      ...defaultParams,
      ...params,
    }).toString();
    return serializedParams;
  },
});

export const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await fetchBase(args, api, extraOptions);
  const { error } = result;

  if (error) {
    console.error('API error:', error);
    Snackbar.show({
      text: error.data?.message || 'Something went wrong.',
      duration: Snackbar.LENGTH_LONG,
      marginBottom: 50,
    });
  }

  return result;
};
