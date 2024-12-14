import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./AppSlice"
import searchSlice from "./SerachSlice"

const store = configureStore({
    reducer:{
        app: appSlice,
        search:searchSlice,
    },
})

export default store;