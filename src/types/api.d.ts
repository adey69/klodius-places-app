interface IAutoCompleteRequest {
  input: string;
}

interface IAutocompleteResponse {
  predictions: PlacePrediction[];
  status: string;
}

interface IAutoCompleteTransformedResponse {
  predictions: PlacePredictionTransformed[];
}

interface IPlaceDetailsRequest {
  placeId: string;
}

interface IPlaceDetailsResponse {
  result: {
    formatted_address: string;
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
    name: string;
  };
  status: string;
}

interface IPlaceDetailsTransformedResponse {
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  name: string;
}
