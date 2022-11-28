import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getAllWeather, getSelectWeather } from "../../api/getWeather";

const initialState = {
  status: 'pending',
  data: [],
  favorite: [],
  favoriteData: [],
};

export const fetchFilterWeather = createAsyncThunk(
  'weather/fetchFilterWeather',
  async (_, thunkAPI) => {
    const data = await getAllWeather();
    return data
  }
)

export const fetchSelectWeather = createAsyncThunk(
  'weather/fetchSelectWeather',
  async (dosi, thunkAPI) => {
    const data = await getSelectWeather(dosi);
    return data
  }
)

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    handleFavorite(state, action) {
      if (state.favorite.indexOf(action.payload) === -1) state.favorite = [...state.favorite, action.payload];
      else state.favorite = state.favorite.filter(station => station !== action.payload);
      console.log(state.favorite)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilterWeather.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(fetchFilterWeather.fulfilled, (state, action) => {
      const stations = state.favorite;

      state.status = 'fulfilled';
      state.favoriteData = action.payload.filter(item => stations.indexOf(item.stationName) !== -1);
    });
    builder.addCase(fetchFilterWeather.rejected, (state, action) => {
      state.status = 'rejected';
      throw new Error('fetch error!')
    });
    builder.addCase(fetchSelectWeather.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(fetchSelectWeather.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.data = action.payload;
    });
    builder.addCase(fetchSelectWeather.rejected, (state, action) => {
      state.status = 'rejected';
      throw new Error('fetch error!')
    });
  }
});

export default weatherSlice.reducer;

export const { handleFavorite } = weatherSlice.actions;
