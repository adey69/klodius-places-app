import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {};

const PlacesSlice = createSlice({
  name: 'places',
  initialState: INITIAL_STATE,
  reducers: {},
});

export default PlacesSlice.actions;

export const { reducer } = PlacesSlice;
