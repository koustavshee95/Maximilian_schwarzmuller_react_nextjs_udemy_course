import { createSlice } from "@reduxjs/toolkit";

const cartSliceUI = createSlice({
    name:'cartUi',
    initialState:{cartIsVisible:false,notification:null},
    reducers:{
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible;
        },
        showNotification(state,action){
            state.notification={
                status:action.payload.status,
                title:action.payload.title,
                message:action.payload.message
            }
        }
    }
});

export const cartUiActions = cartSliceUI.actions;

export default cartSliceUI;

