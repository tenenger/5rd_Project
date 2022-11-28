// ./store/store.js
import { configureStore } from "@reduxjs/toolkit";

import weatherSlice from "../slices/weather";

export default configureStore({
  reducer: {
    weather: weatherSlice,
  },
});
