import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name:"search",
    initialState:{},
    reducers:{
        cacheResult: (state, action) => {
            Object.assign(state, action.payload); // Correct, or:
            // return { ...state, ...action.payload }; // Alternatively, return a new state
          }
          
    }
})

export const {cacheResult}=searchSlice.actions

export default searchSlice.reducer