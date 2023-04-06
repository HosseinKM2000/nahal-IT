import React from 'react';
import { useEffect , useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import {foundArticle} from '../../../features/article/articlesSlice';
import {copyLink} from '../../../features/article/articlesSlice';
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
  const title = useState(params.get('name'));
  const articles = useSelector(state => state.articles.articles);
  const goalArticle = useSelector(state => state.articles.goalArticle);
  const shortLink = useSelector(state => state.articles.shortLink);
  const mobile = window.innerWidth <= 425 ? true : false;
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(foundArticle(title))
    // console.log(title)
  },[])

  return (
    <div className='flex flex-col sm:flex-row mt-5 w-11/12 overflow-x-hidden text-right gap-2'>
        {/* right side */}
        <div className='flex flex-col'>
            <ul className='flex flex-row border-y-2 text-xs border-for-border gap-2 sm:gap-20 py-3 justify-start'>
                <li><Link to='/' className='hover:text-sky-blue'>صفحه اصلی</Link></li>
                <li><Link to='/news' className='hover:text-sky-blue'>اخبار سایت</Link></li>
                <li className='text-gray-88'>{goalArticle.title}</li>
            </ul>
            {/* article-content */}
            <div className='flex flex-col mt-10 2xl:gap-20 items-start'>
              <h1 className='text-lg font-extrabold 2xl:text-4xl text-gray-77 '>{goalArticle.title}</h1>
              {/* article-information */}
              <div className='flex flex-col sm:flex-row mt-3 2xl:text-4xl gap-5 sm:gap-10 text-gray-88'>
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
                <div className='flex flex-row items-center gap-1.5 sm:gap-5'>
                  <AiOutlineBarChart/>
                  <span>27</span>
                </div>
              </div>
              {/* article-poster and article-text */}
              <div className='mt-7 flex flex-col items-center sm:inline-block'>
                <img src={goalArticle.img} alt="postIMg" className='w-full sm:w-64 sm:h-64 float-right mb-4 ml-4'/>
                <p className='text-gray-66  text-center sm:text-right font-thin text-sm leading-7 article-text'>{text}</p>
              </div>
              {/* socalMedia */}
              <div className='flex flex-col items-start mt-10 2xl:gap-20 gap-5 w-full'>
                <BsTags className='scale-150 tagsIcon text-gray-66 mr-5 sm:m-0 2xl:m-12'/>
                <div className='flex flex-col sm:flex-row text-white w-full'>
                  <Link to='https://twitter.com/intent/tweet?text=https://nahalit.com/%d8%af%d9%88%d9%86%d8%af%d8%b1%d8%b2-%da%86%db%8c%d8%b3%d8%aa%d8%9f/' className='flex flex-col justify-center items-center w-full sm:w-1/4 cursor-pointer hover:brightness-125 transition-all bg-light-blue py-3 px-5 gap-5 '>
                    <BsTwitter className='scale-125 2xl:w-20 2xl:h-20'/>
                    <span className='text-xs text-center  sm:text-sm  2xl:text-4xl'>اشتراک در توییتر</span> 
                  </Link>
                  <Link className='flex flex-col justify-center items-center w-full sm:w-1/4 cursor-pointer hover:brightness-125 transition-all bg-dark-blue py-3 px-5 gap-5'  to="https://www.facebook.com/sharer/sharer.php?u=https://nahalit.com/%d8%af%d9%88%d9%86%d8%af%d8%b1%d8%b2-%da%86%db%8c%d8%b3%d8%aa%d8%9f/">
                    <FaFacebookF className='scale-125 2xl:w-20 2xl:h-20'/>
                   <span className='text-xs text-center  sm:text-sm 2xl:text-4xl'> اشتراک در فیسبوک</span>
                  </Link>
                  <Link to="https://telegram.me/share/url?url=https://nahalit.com/%d8%af%d9%88%d9%86%d8%af%d8%b1%d8%b2-%da%86%db%8c%d8%b3%d8%aa%d8%9f/" className='flex flex-col justify-center items-center w-full sm:w-1/4 cursor-pointer hover:brightness-125 transition-all bg-light-blue py-3 px-5 gap-5 '>
                    <BsTelegram className='scale-125 2xl:w-20 2xl:h-20'/>
                   <span className='text-xs text-center  sm:text-sm 2xl:text-4xl'> اشتراک در تلگرام</span>
                  </Link>
                  <Link to="https://pinterest.com/pin/create/button/?url=https://nahalit.com/%d8%af%d9%88%d9%86%d8%af%d8%b1%d8%b2-%da%86%db%8c%d8%b3%d8%aa%d8%9f/" className='flex flex-col justify-center 2xl:py-20 items-center w-full sm:w-1/4 cursor-pointer hover:brightness-125 transition-all bg-soft-red py-3 px-5 gap-5 '>
                    <BsPinterest className='scale-125 2xl:w-20 2xl:h-20'/>
                    <span  className='text-xs text-center sm:text-sm 2xl:text-4xl'>اشتراک در پینترست</span>
                  </Link>
                </div>
              </div>
              {/* comment-ruls */}
              <div className='rulls mt-20 text-gray-66 relative'>
                <h2 className='text-base font-bold w-fit'>قوانین ارسال دیگاه در سایت</h2>
                <ul className='mt-8 2xl:mt-14 pr-5 text-sm text-gray-88 2xl:gap-8 gap-5 flex flex-col font-bold rulls justify-center'>
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
                <div className='flex justify-end border-r-4 2xl: 2xl:py-8 border-light-orang px-5 py-2  my-10'>
                  <h6 className='font-bold text-gray-77 text-lg m-0'>مطالب زیر را حتما بخوانید:</h6>
                </div>
                <div className='flex carsoule-parent'> 
                    <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={mobile ? 0 : 20 }
                    slidesPerView={mobile ? 1 : 3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    initialSlide={0}
                  >
                    {
                      articles.map(article => (
                        <SwiperSlide className='SwiperSlide'>
                          <div className='flex flex-col 2xl:mb-10 gap-2 2xl:gap-16 rounded-md overflow-hidden border-2 border-for-border'>
                            <Link to={{pathname:`/articles/article`,search:`?name=${article.title}`}} ><img src={article.img} alt={article.title} className='hover:brightness-125 2xl:w-full cursor-pointer transition-all'/></Link>
                            <h6 className='pt-2 cursor-pointer hover:text-gray-88 pr-2 text-sm suggest-title font-bold'><Link to={{pathname:`/articles/article`,search:`?name=${article.title}`}}>{article.title}</Link></h6>
                            <div className='flex flex-col py-5 text-sm 2xl:text-4xl'>
                              <p className='h-32 overflow-hidden text-gray-66 leading-5 px-4 suggest-text text-center'>{article.explain}</p>
                              <Link className='text-pink hover:text-light-pink mr-2 cursor-pointer font-bold' to={{pathname:`/articles/article`,search:`?name=${article.title}`}}>جزئیات بیشتر</Link>
                            </div>
                            <div className='flex text-sm py-2 2xl:text-4xl 2xl:justify-between border-2 border-for-border flex-row gap-10 sm:gap-2'>
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
              <div className='flex flex-col sm:flex-row w-full sm:w-auto  items-center 2xl:p-12 gap-4 sm:gap-32 py-5 px-4 my-10 text-white bg-light-blue'>
               <span className='text-xs sm:text-sm flex items-center 2xl:text-5xl'>راه آسان تری برای ارتباط با کاربرانمان پیدا کرده ایم :)</span>
               <button className='border-2 2xl:text-5xl 2xl:py-6 2xl:px-4 border-white px-2 py-1  btn-telegram transition-all'><Link to='https://telegram.me/nahal_it'>عضویت در کانال </Link></button>
              </div>
              {/* comments */}
              <Comments/>
            </div>
        </div>
        {/* left side */}
        <div className='flex gap-10 flex-col mt-10'>
          <div className='flex gap-2 flex-col 2xl:gap-12'>
            <div className='flex flex-row items-center gap-2 2xl:gap-12 text-sm text-gray-66'>
              <FaLink className='linkImg'/>
              <span className='2xl:text-5xl'>لینک کوتاه:</span>
            </div>
            <div className='flex flex-row gap-2'>
              <div className='bg-gray-88 cursor-pointer 2xl:w-24 2xl:h-24 hover:bg-gray-white transition-all w-9 justify-center items-center flex p-2 rounded-full' onClick={(e)=> dispatch(copyLink())}>
               <HiOutlineDocument className='text-white documentImg'/>
              </div>
              <input className='border-2 2xl:text-5xl text-gray-66 rounded border-for-border py-2 pl-1 pr-4 outline-none text-sm' type="url" name="" id="" value={shortLink}/>
            </div>
          </div>
          <div className='flex flex-col items-end text-sm'>
            <span className='py-2 px-4 border-2 border-gray-white 2xl:text-5xl rounded-t-md font-bold'>کلمات کلیدی بلاگ</span>
            <div className='py-2 px-6 border-2 border-for-border'>
              {
                keyWord.map(item => (
                  <span className='text-base 2xl:text-5xl 2xl:leading-normal text-gray-66 px-1 cursor-pointer hover:text-sky-blue'>{item}</span>
                ))
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default Article




 







  