import { createSelector } from '@reduxjs/toolkit';

export const previousSearchesSelector = createSelector(
  (state: IRootState) => state.places,
  state => state.previousSearches,
);
