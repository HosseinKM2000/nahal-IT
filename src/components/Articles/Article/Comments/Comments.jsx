import React from 'react';
import './Commments.css';
import { useState } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import {BsPersonCircle} from 'react-icons/bs';
import { setName , setComment , setEmail , checkForm , nameAnswer , emailAnswer , textAnswer , SetAnswerStatus , SetAnswerAction} from '../../../../features/articleComments/articleCommentsSlice';
import { ToastContainer} from 'react-toastify';

const Comments = () => {

    const comments = useSelector(state => state.articlesPost.comments);
    const postState = useSelector(state => state.articlesPost)
    const dispatch = useDispatch();
    const [answerStatus , setanswerStatus] = useState(false);
    const [warnAnswer , setWarnAnswer] = useState({
      status:false,
      text:'',
    })
    const answerWarn = (key) => {

        if(postState.answer.name === '' || postState.answer.text === '' || postState.answer.email === '')
        {
          setWarnAnswer({
            status:true,
            text:'لطفا فیلد را پر کنید'
          })
        }
        else
        {
          dispatch(SetAnswerAction(key)) 
          setanswerStatus(false)
          setWarnAnswer({
            status:false,
            text:''
          })
        }  
        
        console.log(warnAnswer)
    }

  return (
    <>
             <ToastContainer 
              position='top-center'
              theme='colored'
              autoClose={2500}
              className='Toast_info'
              />
              <div className='my-8 flex flex-col gap-20 2xl:gap-80'>
              {
                comments ? comments.map((comment) => (
                  <div id={comment.key} className='flex flex-col gap-20 items-end'>
                    <div className='flex flex-col gap-5 2xl:gap-20'>
                      <div className='flex flex-col sm:flex-row gap-1 2xl:gap-12'>
                        <BsPersonCircle className='text-gray-white w-14 h-14 2xl:w-28 2xl:h-28'/>
                        <div className='flex flex-col 2xl:gap-10'>
                          <span className='font-bold 2xl:text-5xl'>{comment.name} گفته:</span>
                          <span className='text-sm text-gray-77 2xl:text-4xl'>دیدگاه شما در انتظار تایید مدیریت است</span>
                        </div>
                        <div className='m-0 sm:mr-32 text-xs sm:border-2 h-fit 2xl:text-4xl p-1 flex-row gap-2 flex sm:border-for-border'>
                         <span>13:37</span>
                         <span>1401/11/30</span>
                        </div>
                      </div>
                      <div className='flex flex-row gap-4 sm:gap-0 justify-between'>
                        <p className='text-sm 2xl:text-5xl text-gray-66 w-60 sm:w-96 break-all'>{comment.text}</p>
                        {
                          !answerStatus ?
                          <button className='text-xs border-2 2xl:text-4xl 2xl:p-5 border-gray-white rounded-md text-gray-77 h-fit py-1 px-2 sm:px-1 sm:pb-1 transition-all' id='answer' onClick={() => { setanswerStatus(true)
                            dispatch(SetAnswerStatus(comment.key))
                            }}
                          >پاسخ</button>
                          : <></>
                        }
                      </div>
                    </div>
                    {
                      comment.answer.length !== 0 ?
                      comment.answer.map(answer => (
                        <div className='flex flex-col w-fit gap-8 mr-20'>
                        <div className='flex flex-row text-xs gap-10'>
                         <span className='font-bold text-gray-66 2xl:text-5xl'><bdi>{answer.name}</bdi>در پاسخ به<bdi>  </bdi><bdi>{comment.name}</bdi>گفته:</span>
                         <span className='text-xs 2xl:text-4xl '>{answer.date}</span>
                        </div>
                        <span className='2xl:text-5xl w-60 sm:w-96 break-all'>{answer.text}</span>
                       </div>
                      ))
                        : <></>
                    }
                    {
                      answerStatus && comment.statusAnswer ?
                      <div className='flex flex-col gap-5'>
                        <div className='flex gap-5 flex-col sm:flex-row justify-evenly sm:justify-between'>
                          <div className='flex flex-col gap-4'>
                            <span className='font-bold 2xl:text-5xl'>پاسخ به  <bdi>{comment.name}</bdi></span>
                            <span className='text-xs sm:text-sm text-gray-66 2xl:text-3xl'>نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند</span>
                          </div>
                          <button className='text-sm 2xl:text-4xl border-gray-88 border sm:h-fit py-1 sm:px-2 2xl:p-5 hover:text-gray-88 transition-all' onClick={(e)=> {setanswerStatus(false) 
                                                                                                         dispatch(SetAnswerStatus(comment.key))}}
                          >لغو پاسخ</button>
                        </div>
                        <div className='flex flex-col gap-2'>
                          <span className='text-sm 2xl:text-5xl'>دیدگاه</span>
                          <textarea className='bg-for-border p-2 text-right outline-none text-sm 2xl:text-4xl 2xl:py-12 text-gray-66 placeholder:text-weak-red' name="answer" id="" cols="30" rows="10" onInput={(e) => dispatch(textAnswer(e.target.value))} placeholder={warnAnswer.text}></textarea>
                          <span className='mt-4 text-sm text-gray-77 2xl:text-5xl'>نام</span>
                          <input type="text" name='name' className='outline-none  p-1 text-right placeholder:text-weak-red 2xl:text-4xl 2xl:py-12' onInput={(e) => dispatch(nameAnswer(e.target.value))} placeholder={warnAnswer.text}/>
                          <span  className='mt-4 text-sm text-gray-77 2xl:text-5xl'>ایمیل</span>
                          <input type="email" name="email" id="" className='outline-none  p-1 text-right 2xl:text-4xl 2xl:py-12 placeholder:text-weak-red' onInput={(e) => dispatch(emailAnswer(e.target.value))} placeholder={warnAnswer.text}/>
                          <span  className='text-sm text-gray-77 mt-4 2xl:text-5xl'>وب سایت</span>
                          <input type="url" name="url" id="" className='outline-none 2xl:text-4xl 2xl:py-12  p-1 text-right placeholder:text-weak-red' placeholder={warnAnswer.text}/>
                          <div className='flex items-center 2xl:m-12 gap-2 my-4 2xl:gap-10 text-sm text-gray-66 flex-row'>
                          <input type="checkbox" name="remember" id="checkbox" />
                          <span className='2xl:text-4xl'>ذخیره نام , ایمیل و وب سایت من برای زمانی که دوباره دیدگاهی می نویسم</span>
                          </div>
                          <button className='w-full bg-blue-3 2xl:mt-10 text-white py-1 2xl:text-5xl 2xl:py-5 hover:brightness-105 transition-all' onClick={(e)=> answerWarn(comment.key)}
                           >افزودن پاسخ</button>
                        </div>
                      </div>
                      :<></>
                    }
                  </div>
                ))
                : <span>not</span>
              }
              </div>
              {
                !answerStatus ?
                <form action="" method='post' className='flex flex-col my-3 2xl:w-9/12' onSubmit={(e) => {
                  e.preventDefault()
                  dispatch(checkForm())
                }}>
                  <hr  className='my-4 border-gray-white'/>
                  <label for='comment' className='font-bold text-gray-66 mb-5 2xl:text-6xl'>دیدگاهتان را بنویسید</label>
                  <textarea name="comment" id="" cols="30" rows="10" className='text-right outline-none 2xl:text-4xl 2xl:w-full p-3 border-2 text-sm  text-gray-77 border-for-border' placeholder='نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند' onInput={(e) => dispatch(setComment(e.target.value))}></textarea>
                  <label for='name' className='mt-4 text-sm text-gray-77 2xl:text-5xl'>نام</label>
                  <input type="text" name='name' className='outline-none 2xl:py-12 border-2 border-for-border p-1 2xl:text-4xl text-right' onInput={(e) => dispatch(setName(e.target.value))}/>
                  <label for='email' className='mt-4 text-sm text-gray-77 2xl:text-5xl'>ایمیل</label>
                  <input type="email" name="email" id="" className='outline-none border-2 2xl:py-12 border-for-border p-1 2xl:text-4xl text-right' onInput={(e) => dispatch(setEmail(e.target.value))}/>
                  <label for='url' className='text-sm text-gray-77 mt-4 2xl:text-5xl'>وب سایت</label>
                  <input type="url" name="url" id="" className='outline-none 2xl:text-4xl 2xl:py-12 border-2 border-for-border p-1 text-right'/>
                  <div className='flex items-center 2xl:m-12 2xl:py-10 2xl:gap-10 gap-2 my-4 text-sm text-gray-66 flex-row'>
                    <input type="checkbox" name="remember" id="checkbox" />
                    <label for='remember' className='2xl:text-4xl'>ذخیره نام , ایمیل و وب سایت من برای زمانی که دوباره دیدگاهی می نویسم</label>
                  </div>
                  <button type="submit" className='w-full bg-blue-3 2xl:text-5xl 2xl:py-5 text-white py-1 hover:brightness-105 transition-all'>فرستادن دیدگاه</button>
                </form>
                : <></>
              }    
    </>
  )
}

export default Comments;
