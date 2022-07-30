import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  greeting: {},
  error: false,
};

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreetings',
  async (_nill, { rejectWithValue }) => {
    const retrieveGreetingAPI = '/main';
    const requestOptions = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        // Needs to be filled with Auth Header from sign in request
        // Authorization: `Bearer ${process.env.REACT_APP_CARBON_API_KEY}`,
      },
      mode: 'cors',
      cache: 'default',
    };
    try {
      const response = await fetch(retrieveGreetingAPI, requestOptions);
      const data = await response.json();
      return data.data;
    } catch (err) {
      return rejectWithValue('Failed to obtain data from API');
    }
  },
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      state.isLoading = false;
      state.greeting = action.payload;
    });
    builder.addCase(fetchGreeting.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default greetingSlice.reducer;
