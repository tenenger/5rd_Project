// ./store/store.js
import { configureStore } from "@reduxjs/toolkit";
import sidoSlice from "../reducers/weather";

export default configureStore({
  reducer: {
    weather: sidoSlice,
  },
});
