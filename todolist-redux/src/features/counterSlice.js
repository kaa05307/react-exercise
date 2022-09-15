// features/counter/counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// createSlice
export const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    //...
  },
});

// action creators
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// reducer
export default counterSlice.reducer;