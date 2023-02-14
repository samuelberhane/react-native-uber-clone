import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  start: null,
  destination: null,
  travelTime: null,
};

const uberSlice = createSlice({
  name: "uber",
  initialState,
  reducers: {
    SET_START: (state, action) => {},
    SET_DESTINATION: (state, action) => {},
    SET_TIME: (state, action) => {},
  },
});

export const { SET_START, SET_DESTINATION, SET_TIME } = uberSlice.actions;
export const selectStart = (state) => state.uber.start;
export const selectDestination = (state) => state.uber.destination;
export const selectTravelTime = (state) => state.travelTime;

export default uberSlice.reducer;
