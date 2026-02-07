import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showCounter: true,
  isAuthenticated: false,
};

const counterSlice = createSlice({
  name: "counter app",
  initialState: initialCounterState,
  reducers: {
    increment(state, action) {
      state.counter++; // in RTK we can directly mutate state inside reducers.
    },
    decrement(state, action) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload; //action used for attached some data with payload.
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});


export const counterSliceReducer = counterSlice.reducer;
export const counterActions = counterSlice.actions;

export default counterSlice;