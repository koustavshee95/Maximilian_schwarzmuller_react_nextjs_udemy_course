//import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import { authSliceReducer } from "./authSlice";
import {counterSliceReducer} from "./counterSlice";




// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter, //we always override the old state/object. You should never change/muted the existing state. ALways return a brand new object.
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   return state;
// };

//const store = createStore(counterReducer);

const store = configureStore({
  reducer: { counter: counterSliceReducer, auth: authSliceReducer },
});

export default store;
