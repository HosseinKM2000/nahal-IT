import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./features/article/articlesSlice";
import articelesPostReducer from './features/articleComments/articleCommentsSlice';
import newsSliceReducer from "./features/news/newsSlice";

const store = configureStore({
    reducer:{
        articles : articlesReducer,
        articlesPost : articelesPostReducer,
        news:newsSliceReducer
    }
})

export default store;