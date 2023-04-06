import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState =
{
    name:'',
    comment:'',
    email:'',
    comments:[],
    statusAnswer:false,
    answer:{
        text:'',
        name:'',
        email:'',
    }
}


// comment method
function setNameAction(state,action)
{
    state.name = action.payload
}

function setCommentAction(state,action)
{
    state.comment = action.payload
}

function setEmailAction(state,action)
{
    state.email = action.payload;
}

function checkFormAction(state,action)
{
    switch(true)
    {
        case(state.name === ''): toast.info('لطفا نام را وارد کنید')
        break;
        case(state.comment === ''):toast.info('لطفا نظر خود را وارد کنید')
        break;
        case(state.email === ''):toast.info('لطفا ایمیل را وارد کنید')
        break;
        default:{
            state.status = false;
            state.comments = [...state.comments,{name:state.name,text:state.comment,answer:[],statusAnswer:state.statusAnswer,key:new Date().getMilliseconds()}]
            console.log(state.comments)
        }
    }
}

// answer comment method
function setNameAnswer(state,action)
{
    let name = action.payload;
    state.answer.name = name;
    console.log(state.answer.name)
}

function setTextAnswer(state,action)
{
    let text = action.payload;
    state.answer.text = text;
    console.log(state.answer.text)
}

function setEmailAnswer(state,action)
{
    let email = action.payload;
    state.answer.email = email;
    console.log(state.answer.email)
}

function setAnswerStatus(state,action)
{
    let key  = action.payload;
    const target =  state.comments.find(item => item.key === key);
    target.statusAnswer ? target.statusAnswer = false : target.statusAnswer = true;
}

function setAnswerAction(state,action)
{
    let key = action.payload;
    let {answer} = state;
    const target = state.comments.find(item => item.key === key);
    target.answer = [...target.answer,{name:answer.name,text:answer.text,email:answer.email,date:'1401/2/3'}];
    target.statusAnswer = false;
    state.answer.name = '';
    state.answer.text = '';   
    state.answer.email = '';
}

function checkAnswerAction(state,action)
{
    switch(true)
    {
        case(state.answer.name === ''): toast.info('لطفا نام را وارد کنید')
        break;
        case(state.answer.text === ''):toast.info('لطفا نظر خود را وارد کنید')
        break;
        case(state.answer.email === ''):toast.info('لطفا ایمیل را وارد کنید')
        break;
        default:{
            state.status = false;
            state.comments = [...state.comments,{name:state.name,text:state.comment,answer:[],statusAnswer:state.statusAnswer,key:new Date().getMilliseconds()}]
            console.log(state.comments)
        }
    }
}

const articlesPostSlice = createSlice({
    name:'articleSlice',
    initialState,
    reducers:{
        setNameAction,
        setCommentAction,
        setEmailAction,
        checkFormAction,
        setAnswerAction,
        setNameAnswer,
        setEmailAnswer,
        setTextAnswer,
        setAnswerStatus,
        checkAnswerAction,

    }
})



export const {setNameAction:setName , 
              setCommentAction:setComment , 
              setEmailAction: setEmail , 
              checkFormAction : checkForm,
              setNameAnswer:nameAnswer,
              setEmailAnswer:emailAnswer,
              setTextAnswer:textAnswer,
              setAnswerStatus: SetAnswerStatus,
              setAnswerAction: SetAnswerAction,
             } = articlesPostSlice.actions;


export default articlesPostSlice.reducer;