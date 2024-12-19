import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./ApiContants";

const chatslice = createSlice({
    name:"chat",
    initialState:{
        messege:[]
    },
    reducers:{
        addMessege:(state,action)=>{
            state.messege.slice(LIVE_CHAT_COUNT,1)
            state.messege.unshift(action.payload)
        }
    }
})
export const {addMessege}=chatslice.actions
export default chatslice.reducer