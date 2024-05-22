import { createSlice } from "@reduxjs/toolkit";

const cartslice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addcart:(state,action)=>{
            state.items.push(action.payload);
        },
        removecart:(state,action)=>{
            state.items.pop();
        },
        clearcart:(state)=>{
            state.items.length=0;
        }
    }
})
export const {addcart,removecart,clearcart}=cartslice.actions;
export default cartslice.reducer;