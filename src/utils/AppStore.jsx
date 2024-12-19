import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./AppSlice"
import searchSlice from "./SerachSlice"
import chatslice from "./ChatSlice"

const store = configureStore({
    reducer:{
        app: appSlice,
        search:searchSlice,
        chat:chatslice,
    },
})

export default store;