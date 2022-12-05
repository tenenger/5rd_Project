import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getAllWeather, getSelectWeather } from "../../api/getWeather";

const initialState = {
  status: 'pending',
  data: [],
  favoriteData: [],
};

export const fetchFilterWeather = createAsyncThunk(
  'weather/fetchFilterWeather',
  async (_, thunkAPI) => {
    try {
      const data = await getAllWeather();
      return data
    } catch (error) {
      throw new Error(error);
    }
  }
)

export const fetchSelectWeather = createAsyncThunk(
  'weather/fetchSelectWeather',
  async (dosi, thunkAPI) => {
    try {
      const data = await getSelectWeather(dosi);
      return data
    } catch (error) {
      throw new Error(error);
    }
  }
)

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFilterWeather.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(fetchFilterWeather.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.favoriteData = action.payload.filter(item => localStorage.getItem('favorite').indexOf(item.stationName) !== -1);
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

export const {} = weatherSlice.actions;
