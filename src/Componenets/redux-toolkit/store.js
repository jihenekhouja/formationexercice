import { configureStore } from "@reduxjs/toolkit";
import { rootReducers } from "./reducers";

const store = configureStore({
    reducer:rootReducers,
})
// console.log("store",store.getState())
export default store