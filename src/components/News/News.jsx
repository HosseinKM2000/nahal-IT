import React from 'react';
import './News.css';
import { useSelector , useDispatch} from 'react-redux';
import { Link , useSearchParams , useNavigate} from 'react-router-dom';
import Pagination from './Pagination/Pagination';
import { useEffect } from 'react';
import {getAllNews} from '../../features/news/action';
import Loading from '../Loading/Loading';


function News() {

  const loading = useSelector(state => state.news.loading);
  const dispatch = useDispatch();
  const [params,setSearchParams] = useSearchParams();
  const pageNumber = params.get('page');
  const navigate = useNavigate();
  const query = useSelector(state => state.news.number)
  useEffect(() => { 
    dispatch(getAllNews())
    if(query === null)
    {
      navigate(`/news`)
    }
   },[])
 
  

  return (
      loading ? <Loading/>
      :
      <div className='flex flex-col w-full px-5 sm:px-14 py-5'>
        <div className='flex flex-row justify-start gap-10 text-sm 2xl:text-4xl'>
          <Link to='/' className='text-gray-66 hover:text-sky-blue transition-all'>صفحه اصلی</Link>
          <Link to='/news' className='text-gray-88 hover:text-sky-blue transition-all'>اخبار سایت</Link>
          {
            query !== null ?
            <span className='text-gray-88 font-thin'>برگه{pageNumber}</span>
            : <></>
          }
        </div>
        <div className='flex flex-row py-10 text-sm 2xl:text-4xl gap-1 text-gray-66'>
          <span>دسته:</span>
          <span>اخبارسایت</span>
        </div>
        <Pagination/>
        <div className='flex flex-col gap-1 justify-start text-sm py-10'>
          <span className='text-gray-66'>اخبار سایت</span>
          <p className='text-gray-77'>دسته‌ها برخلاف برچسب‌ها می‌توانند سلسله مراتب داشته باشند. به طور مثال شما می‌توانید یک دسته به نام موسیقی داشته باشید و برای آن دسته، زیر دسته‌هایی مانند موسیقی ایرانی و یا موسیقی غربی تعریف کنید.</p>
        </div>
      </div>
  )
}

export default News;



