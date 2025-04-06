import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseApi';
import { API_ENDPOINTS } from '../../config';

const PlacesApi = createApi({
  reducerPath: 'PlacesRTK',
  baseQuery,
  endpoints: builder => ({
    autocomplete: builder.query<IAutocompleteResponse, IAutoCompleteRequest>({
      query: ({ input }) => ({
        url: `${API_ENDPOINTS.autoComplete}`,
        params: {
          input,
        },
      }),
    }),
    placeDetails: builder.query<IPlaceDetailsResponse, IPlaceDetailsRequest>({
      query: ({ placeId }) => ({
        url: `${API_ENDPOINTS.placeDetails}`,
        params: {
          place_id: placeId,
          fields: 'geometry,name,formatted_address',
        },
      }),
    }),
  }),
});
export default PlacesApi;
export const { useLazyAutocompleteQuery, usePlaceDetailsQuery } = PlacesApi;
