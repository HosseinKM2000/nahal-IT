import React from 'react';
import { text } from '../../../API/data';
import { Link } from 'react-router-dom';
import './NewsPages.css';
// import Img from '../../assets/img/6.png';
import {MdPersonPin} from 'react-icons/md';

function NewsPages({currentItems}) {
  return (
    <div className='flex flex-column sm:flex-row justify-center items-center flex-wrap gap-5'>
    {
      currentItems.map((item,index) => (
        <div key={index} className='new border-2 border-for-border flex flex-col justify-center items-start rounded-sm  overflow-hidden'>
          <Link to={{pathname:'/articles/article',search:`name=${item.title}`}}><img src={item.url} alt={item.title} className='cursor-pointer hover:brightness-125'/></Link>
          <div className='w-full py-2 2xl:py-5 flex flex-row items-center justify-end relative'>
          <Link to={{pathname:'/articles/article',search:`name=${item.title}`}} className='w-3/4 mx-3 text-base 2xl:text-3xl text-gray-66 hover:text-gray-77'><span>{item.title}</span></Link>
          <MdPersonPin className='w-1/4 h-16 2xl:w-2/6 2xl:h-40 hover:brightness-105 text-gray-white ml-2 cursor-pointer'/>
          </div>
          <p className='text-sm 2xl:text-2xl px-3 text-gray-77 h-24 overflow-y-hidden'>{text}</p>
          <Link to={{pathname:'/articles/article',search:`name=${item.title}`}} className='text-pink hover:text-light-pink px-3 mt-10 text-sm 2xl:text-2xl font-bold mb-5 2xl:mt-6 cursor-pointer'><span>جزییات بیشتر</span></Link>
          <div className='flex flex-row border-t-2 border-for-border text-xs 2xl:text-2xl text-gray-5E5E justify-between  w-full p-3'>
            <span>دوشنبه 14 فروردین 1402</span>
            <Link to={{pathname:'/articles/article',search:`name=${item.title}`}}><span className='cursor-pointer hover:text-gray-88'>بدون دیدگاه</span></Link>
          </div>
        </div>
      ))
    }
  </div>
  )
}

export default NewsPages;