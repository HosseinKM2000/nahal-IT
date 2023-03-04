import React from 'react';
import { useEffect , useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import {foundArticle} from '../../../features/articlesSlice';
import {copyLink} from '../../../features/articlesSlice';
// import Icons
import {TfiMenuAlt} from 'react-icons/tfi';
import {MdDateRange} from 'react-icons/md';
import {AiOutlineBarChart} from 'react-icons/ai';
import {FaLink} from 'react-icons/fa';
import {HiOutlineDocument} from 'react-icons/hi';
import {BsTags} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import {BsTelegram} from 'react-icons/bs';
import {BsPinterest} from 'react-icons/bs';
import messageIMG from '../../../assets/img/2900821_25540.png';
// import modules
import { text } from '../../../API/data';
import { keyWord } from '../../../API/data';
import {  A11y , Pagination , Navigation } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';
// import styles
import './Article.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'react-toastify/dist/ReactToastify.css';
import Comments from './Comments/Comments';


const Article = () => {

  const [params] = useSearchParams();
  const [title] = useState(params.get('name'));
  const articles = useSelector(state => state.articles.articles);
  const goalArticle = useSelector(state => state.articles.goalArticle);
  const shortLink = useSelector(state => state.articles.shortLink);
  const dispatch = useDispatch();
  
  useEffect(()=> {
    dispatch(foundArticle(title))
    // console.log(title)
  },[])

  return (
    <div className='flex flex-row mt-5 w-11/12 text-right gap-2'>
        {/* right side */}
        <div className='flex flex-col'>
            <ul className='flex flex-row border-y-2 border-for-border gap-20 py-3 justify-start'>
                <li><Link to='/' className='hover:text-sky-blue'>صفحه اصلی</Link></li>
                <li><Link to='/news' className='hover:text-sky-blue'>اخبار سایت</Link></li>
                <li className='text-gray-88'>{goalArticle.title}</li>
            </ul>
            {/* article-content */}
            <div className='flex flex-col mt-10 items-start'>
              <h1 className='text-lg font-extrabold text-gray-77 '>{goalArticle.title}</h1>
              {/* article-information */}
              <div className='flex flex-row mt-3 gap-10 text-gray-88'>
                <div className='flex flex-row items-center gap-2'>
                  <TfiMenuAlt/>
                  <div className='flex flex-row'>
                    <span className='text-gray-500'>دسته بندی:</span>
                    <span className='hover:text-sky-blue cursor-pointer'>اخبار سایت </span>
                  </div>
                </div>
                <div className='flex flex-row items-center gap-2'>
                  <MdDateRange/>
                  <span className='flex gap-1'><bdi>24</bdi>بهمن<bdi>1401</bdi></span>
                </div>
                <div className='flex flex-row items-center gap-5'>
                  <AiOutlineBarChart/>
                  <span>27</span>
                </div>
              </div>
              {/* article-poster and article-text */}
              <div className='mt-7 inline-block'>
                <img src={goalArticle.img} alt="python" className='w-64 h-64 float-right mb-4 ml-4'/>
                <p className='text-gray-66 font-thin text-sm leading-7'>{text}</p>
              </div>
              {/* socalMedia */}
              <div className='flex flex-col items-start mt-10 gap-5 w-full'>
                <BsTags className='scale-150 text-gray-66'/>
                <div className='flex flex-row text-white w-full'>
                  <Link to='https://twitter.com/intent/tweet?text=https://nahalit.com/%d8%af%d9%88%d9%86%d8%af%d8%b1%d8%b2-%da%86%db%8c%d8%b3%d8%aa%d8%9f/' className='flex flex-col justify-center items-center w-1/4 cursor-pointer hover:brightness-125 transition-all bg-light-blue py-3 px-5 gap-5 '>
                    <BsTwitter className='scale-125'/>
                    <span className='text-sm'>اشتراک در توییتر</span> 
                  </Link>
                  <Link className='flex flex-col justify-center items-center w-1/4 cursor-pointer hover:brightness-125 transition-all bg-dark-blue py-3 px-5 gap-5'  to="https://www.facebook.com/sharer/sharer.php?u=https://nahalit.com/%d8%af%d9%88%d9%86%d8%af%d8%b1%d8%b2-%da%86%db%8c%d8%b3%d8%aa%d8%9f/">
                    <FaFacebookF className='scale-125'/>
                   <span className='text-sm'> اشتراک در فیسبوک</span>
                  </Link>
                  <Link to="https://telegram.me/share/url?url=https://nahalit.com/%d8%af%d9%88%d9%86%d8%af%d8%b1%d8%b2-%da%86%db%8c%d8%b3%d8%aa%d8%9f/" className='flex flex-col justify-center items-center w-1/4 cursor-pointer hover:brightness-125 transition-all bg-light-blue py-3 px-5 gap-5 '>
                    <BsTelegram className='scale-125'/>
                   <span className='text-sm'> اشتراک در تلگرام</span>
                  </Link>
                  <Link to="https://pinterest.com/pin/create/button/?url=https://nahalit.com/%d8%af%d9%88%d9%86%d8%af%d8%b1%d8%b2-%da%86%db%8c%d8%b3%d8%aa%d8%9f/" className='flex flex-col justify-center items-center w-1/4 cursor-pointer hover:brightness-125 transition-all bg-soft-red py-3 px-5 gap-5 '>
                    <BsPinterest className='scale-125'/>
                    <span  className='text-sm'>اشتراک در پینترست</span>
                  </Link>
                </div>
              </div>
              {/* comment-ruls */}
              <div className='rulls mt-20 text-gray-66 relative'>
                <h2 className='text-base font-bold w-fit'>قوانین ارسال دیگاه در سایت</h2>
                <ul className='mt-8 pr-5 text-sm text-gray-88 gap-5 flex flex-col font-bold rulls justify-center'>
                  <li>چنانچه دیدگاهی توهین آمیز باشد تایید نخواهد شد</li>
                  <li>چنانچه دیدگاه شما جنبه ی تبلیغاتی داشته باشد تایید نخواهد شد</li>
                  <li>چنانچه از لینک سایر وبسایت ها و یا وبسایت خود در دیدگاه استفاده کرده باشید تایید نخواهد شد</li>
                  <li>چنانچه در دیدگاه خود از شماره تماس، ایمیل و آیدی تلگرام استفاده کرده باشید تایید نخواهد شد</li>
                  <li>چنانچه دیدگاهی بی ارتباط با موضوع آموزش مطرح شود تایید نخواهد شد</li>
                </ul>
                <img src={messageIMG} alt="comment"  className='absolute w-60 opacity-20'/>
              </div>
              {/* Suggested-contents */}
              <div className='flex flex-col gap-4 items-start'>
                <div className='flex justify-end border-r-4 border-light-orang px-5 py-2  my-10'>
                  <h6 className='font-bold text-gray-77 text-lg m-0'>مطالب زیر را حتما بخوانید:</h6>
                </div>
                <div className='flex carsoule-parent'> 
                    <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    initialSlide={1}
                  >
                    {
                      articles.map(article => (
                        <SwiperSlide>
                          <div className='flex flex-col gap-2 rounded-md overflow-hidden border-2 border-for-border'>
                            <Link to={{pathname:`/articles/article`,search:`?name=${article.title}`}} ><img src={article.img} alt={article.title} className='hover:brightness-125 cursor-pointer transition-all'/></Link>
                            <h6 className='pt-2 cursor-pointer hover:text-gray-88 pr-2 text-sm font-bold'><Link to={{pathname:`/articles/article`,search:`?name=${article.title}`}}>{article.title}</Link></h6>
                            <div className='flex flex-col py-5 text-sm'>
                              <p className='h-32 overflow-hidden text-gray-66 leading-5 px-4 text-center'>{article.explain}</p>
                              <Link className='text-pink hover:text-light-pink mr-2 cursor-pointer font-bold' to={{pathname:`/articles/article`,search:`?name=${article.title}`}}>جزئیات بیشتر</Link>
                            </div>
                            <div className='flex text-sm py-2 border-2 border-for-border flex-row gap-2'>
                              <span className='text-gray-77'>شنبه 20 مهر 1401</span>
                              <span className='cursor-pointer hover:text-gray-white'>بدون دیدگاه</span>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))
                    }
                    ...
                  </Swiper>
                </div>
              </div>
              {/* junction-path */}
              <div className='flex item-c  gap-32 py-5 flex-row px-4 my-10 text-white bg-light-blue'>
               <span className='text-sm flex items-center'>راه آسان تری برای ارتباط با کاربرانمان پیدا کرده ایم :)</span>
               <button className='border-2 border-white px-2 py-1  btn-telegram transition-all'><Link to='https://telegram.me/nahal_it'>عضویت در کانال </Link></button>
              </div>
              {/* comments */}
              <Comments/>
            </div>
        </div>
        {/* left side */}
        <div className='flex gap-10 flex-col mt-10'>
          <div className='flex gap-2 flex-col'>
            <div className='flex flex-row items-center gap-2 text-sm text-gray-66'>
              <FaLink/>
              <span>لینک کوتاه:</span>
            </div>
            <div className='flex flex-row gap-2'>
              <div className='bg-gray-88 cursor-pointer hover:bg-gray-white transition-all w-9 justify-center items-center flex p-2 rounded-full' onClick={(e)=> dispatch(copyLink())}>
               <HiOutlineDocument className='text-white'/>
              </div>
              <input className='border-2 text-gray-66 rounded border-for-border py-2 pl-1 pr-4 outline-none text-sm' type="url" name="" id="" value={shortLink}/>
            </div>
          </div>
          <div className='flex flex-col items-end text-sm'>
            <span className='py-2 px-4 border-2 border-gray-white rounded-t-md font-bold'>کلمات کلیدی بلاگ</span>
            <div className='py-2 px-6 border-2 border-for-border'>
              {
                keyWord.map(item => (
                  <span className='text-base text-gray-66 px-1 cursor-pointer hover:text-sky-blue'>{item}</span>
                ))
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default Article




 







  