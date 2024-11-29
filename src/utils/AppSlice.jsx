import { createSlice } from "@reduxjs/toolkit";


const AppSlice = createSlice({
    name:"app",
    initialState:{
        isMenu:false,
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenu = !state.isMenu

        },
    },

})

export const{toggleMenu}=AppSlice.actions;

export default AppSlice.reducer;