import { createSlice } from "@reduxjs/toolkit";
import { getAllNews } from "./action";

const initialState = 
{
    news : [],
    loading:false,
    error:null,
    number:null,
}

const newsSlice = createSlice({
    name:'news',
    initialState,
    extraReducers: (builder) => {

        builder
        .addCase(getAllNews.fulfilled , (state , action) => {
            const data100 = action.payload.slice(20,99)
            state.loading = false;
            state.news = data100;
        })
        .addCase(getAllNews.pending , (state) => {
            state.loading = true;
        })
        .addCase(getAllNews.rejected , (state) => {
            state.loading = false;
            state.error = 'data not received'
        })
        .addCase(setPageQuery , (state,action) => {
            state.number = action.payload
        })
    },
    reducers : {
        setPageQuery : (state,action) => {
            state.number = action.payload
        }
    }
})

export const {setPageQuery} = newsSlice.actions;
export default newsSlice.reducer;