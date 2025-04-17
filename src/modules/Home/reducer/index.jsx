import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

// Export actions for dispatching
export const { increment, decrement, reset } = homeSlice.actions;

// Export reducer to be added to the store
export default homeSlice.reducer;
