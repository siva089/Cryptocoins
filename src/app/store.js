import { configureStore } from "@reduxjs/toolkit";
import {cryptoApi} from "../Services/cryptoapi"
import { cryptoNewsApi } from "../Services/newsapi";



export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]:cryptoNewsApi.reducer
    }
})