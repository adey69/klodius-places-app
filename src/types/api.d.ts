interface IAutoCompleteRequest {
  input: string;
}

interface IAutocompleteResponse {
  predictions: PlacePrediction[];
  status: string;
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
