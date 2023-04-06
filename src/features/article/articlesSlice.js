import { createSlice } from "@reduxjs/toolkit";
import { articles } from "../../API/data";
import { toast } from "react-toastify";

const initialState =
{
    articles:articles,
    goalArticle:'',
    shortLink:'https://nahalit.com/?p=8120',
}

function foundArticleAction(state,action)
{
    let title = action.payload;
    const target = state.articles.find(item => item.title === title);
    state.goalArticle = target;
}

function copyLinkAction(state,action)
{
    navigator.clipboard.writeText(state.shortLink);
    toast.success('لینک کپی شد' , {
        position: "top-center",
    })
}

const articlesSlice = createSlice({
    name:'articles',
    initialState,
    reducers:{
        foundArticleAction,
        copyLinkAction,
    }
})

export const {
        foundArticleAction: foundArticle,
        copyLinkAction : copyLink,
     } = articlesSlice.actions;

export default articlesSlice.reducer;