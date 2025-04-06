import {SearchState, SearchAction} from '../../types';

const initialState: SearchState = {
  history: [],
  selectedPlace: null,
};

export default function searchReducer(
  state = initialState,
  action: SearchAction,
): SearchState {
  switch (action.type) {
    case 'ADD_TO_HISTORY':
      return {...state, history: [action.payload, ...state.history]};
    case 'SET_SELECTED_PLACE':
      return {...state, selectedPlace: action.payload};
    default:
      return state;
  }
}
