import React from 'react';
import { getAllNews } from '../../../features/news/action';
import { text } from '../../../API/data';
import { useSelector , useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './NewsPages.css';
// import Img from '../../assets/img/6.png';
import {CgSpinnerTwoAlt} from 'react-icons/cg';
import {MdPersonPin} from 'react-icons/md';

function NewsPages({currentItems}) {

  const dispatch = useDispatch();
  
  const loading = useSelector(state => state.news.loading);
  useEffect(()=>{  dispatch(getAllNews())},[])


  return (
    <div className='flex flex-column sm:flex-row justify-center items-center flex-wrap gap-5'>
    {
      loading ? <CgSpinnerTwoAlt className='w-32 h-32 text-green-08A spinner'/>
      :
      currentItems.map((item,index) => (
        <div key={index} className='new border-2 border-for-border flex flex-col justify-center items-start rounded-sm  overflow-hidden'>
          <img src={item.url} alt={item.title} />
          <div className='w-full py-2 2xl:py-5 flex flex-row items-center justify-end relative'>
          <span className='w-3/4 mx-3 text-base 2xl:text-3xl text-gray-66'>{item.title}</span>
          <MdPersonPin className='w-1/4 h-16 2xl:w-2/6 2xl:h-40 text-gray-white ml-2'/>
          </div>
          <p className='text-sm 2xl:text-2xl px-3 text-gray-77 h-24 overflow-y-hidden'>{text}</p>
          <span className='text-pink px-3 mt-3 text-sm 2xl:text-2xl font-bold mb-10 2xl:mt-6'>جزییات بیشتر</span>
          <div className='flex flex-row border-t-2 border-for-border text-xs 2xl:text-2xl text-gray-5E5E justify-between  w-full p-3'>
            <span>دوشنبه 14 فروردین 1402</span>
            <span>بدون دیدگاه</span>
          </div>
        </div>
      ))
    }
  </div>
  )
}

export default NewsPages;