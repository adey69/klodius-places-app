import { combineReducers } from 'redux';
import { PlacesSliceReducer } from '../slices';
import { PlacesApi } from '../api';

const RootReducers = combineReducers({
  places: PlacesSliceReducer,
  [PlacesApi.reducerPath]: PlacesApi.reducer,
});

export default RootReducers;
export type IRootReducer = typeof RootReducers;
export type IRootState = ReturnType<typeof RootReducers>;
