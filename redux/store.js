import { configureStore, combineReducers } from "@reduxjs/toolkit";
import uberSlice from "./slice/uberSlice";

const rootReducer = combineReducers({
  uber: uberSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
