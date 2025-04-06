import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseApi';
import { API_ENDPOINTS } from '../../config';

const PlacesApi = createApi({
  reducerPath: 'PlacesRTK',
  baseQuery,
  endpoints: builder => ({
    autocomplete: builder.query<
      IAutoCompleteTransformedResponse,
      IAutoCompleteRequest
    >({
      query: ({ input }) => ({
        url: `${API_ENDPOINTS.autoComplete}`,
        params: {
          input,
        },
      }),
      transformResponse: (response: IAutocompleteResponse) => ({
        predictions: response.predictions.map(prediction => ({
          id: prediction.place_id,
          name: prediction.structured_formatting.main_text,
          description: prediction.description,
        })),
      }),
    }),
    placeDetails: builder.query<
      IPlaceDetailsTransformedResponse,
      IPlaceDetailsRequest
    >({
      query: ({ placeId }) => ({
        url: `${API_ENDPOINTS.placeDetails}`,
        params: {
          place_id: placeId,
          fields: 'geometry,name,formatted_address',
        },
      }),
      transformResponse: (response: IPlaceDetailsResponse) => ({
        address: response.result.formatted_address,
        coordinates: {
          lat: response.result.geometry.location.lat,
          lng: response.result.geometry.location.lng,
        },
        name: response.result.name,
      }),
    }),
  }),
});
export default PlacesApi;
export const { useLazyAutocompleteQuery, usePlaceDetailsQuery } = PlacesApi;
