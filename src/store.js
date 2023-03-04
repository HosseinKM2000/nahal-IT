import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./features/articlesSlice";
import articelesPostReducer from './features/articlesPostSlice';

const store = configureStore({
    reducer:{
        articles : articlesReducer,
        articlesPost : articelesPostReducer,
    }
})

export default store;