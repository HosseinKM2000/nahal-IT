import { createAsyncThunk , createSlice} from "@reduxjs/toolkit";

export const getAllNews = createAsyncThunk('news/getAllNews', async () => {

    const Data =  await fetch('https://jsonplaceholder.typicode.com/photos')
          .then(response => response.json())
          .then(data => data)

    return Data;
})
