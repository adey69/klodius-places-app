import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { remove } from 'lodash';

const INITIAL_STATE: IPlaceSliceState = {
  previousSearches: [],
};

const PlacesSlice = createSlice({
  name: 'places',
  initialState: INITIAL_STATE,
  reducers: {
    addToPreviousSearches: (
      state,
      { payload }: PayloadAction<PreviousSearch>,
    ) => {
      state.previousSearches = [...(state.previousSearches ?? []), payload];
    },
    removeFromPreviousSearches: (state, { payload }: PayloadAction<string>) => {
      state.previousSearches = remove(
        state.previousSearches,
        prevSearch => prevSearch.id !== payload,
      );
    },
  },
});

export default PlacesSlice.actions;

export const { reducer } = PlacesSlice;
