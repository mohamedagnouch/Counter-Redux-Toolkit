import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count :0
}
export const counterSlice = createSlice({
    name :'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.count +=1;
        },
        Decrement:(state)=>{
            state.count -=1;
        },
        reset :(state)=>{
            state.count = 0;
        },
        incremenByAmount :(state,action)=>{
            state.count += action.payload;
        }
    }
})
export const {increment,Decrement, reset, incremenByAmount}= counterSlice.actions;
export default counterSlice.reducer;