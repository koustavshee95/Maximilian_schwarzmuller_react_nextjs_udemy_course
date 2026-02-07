import { createSlice } from "@reduxjs/toolkit";

const cartSliceUI = createSlice({
    name:'cartUi',
    initialState:{cartIsVisible:false},
    reducers:{
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
});

export const cartUiActions = cartSliceUI.actions;

export default cartSliceUI;

