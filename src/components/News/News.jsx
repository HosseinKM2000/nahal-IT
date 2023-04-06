import React from 'react';
import './News.css';
import { Link } from 'react-router-dom';
import Pagination from './Pagination/Pagination';


function News() {


  return (
    <div className='flex flex-col w-full px-5 sm:px-14 py-5'>
      <div className='flex flex-row justify-start gap-10 text-sm 2xl:text-4xl'>
        <Link to='/' className='text-gray-66 hover:text-sky-blue transition-all'>صفحه اصلی</Link>
        <span className='text-gray-88'>اخبار سایت</span>
      </div>
      <div className='flex flex-row py-10 text-sm 2xl:text-4xl gap-1 text-gray-66'>
        <span>دسته:</span>
        <span>اخبارسایت</span>
      </div>
      <Pagination/>
    </div>
  )
}

export default News;



