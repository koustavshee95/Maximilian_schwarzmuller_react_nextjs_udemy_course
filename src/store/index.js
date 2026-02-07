import { configureStore } from "@reduxjs/toolkit";
import cartSliceUI from "./cartSliceUI";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: { cartUI: cartSliceUI.reducer, cart: cartSlice.reducer },
});
