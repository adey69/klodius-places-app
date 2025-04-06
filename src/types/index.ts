export interface Place {
  name: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  };
}

export interface SearchState {
  history: Place[];
  selectedPlace: Place | null;
}

export interface AddToHistoryAction {
  type: 'ADD_TO_HISTORY';
  payload: Place;
}

export interface SetSelectedPlaceAction {
  type: 'SET_SELECTED_PLACE';
  payload: Place;
}

export type SearchAction = AddToHistoryAction | SetSelectedPlaceAction;
