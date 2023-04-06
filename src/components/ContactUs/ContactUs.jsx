import React from 'react';
import './ContactUs.css';
import { Link,} from 'react-router-dom';
// import images
import {BsInstagram} from 'react-icons/bs';
import {BsTelegram}  from 'react-icons/bs';
import {BsYoutube} from 'react-icons/bs';
import {FaVideo} from 'react-icons/fa';
import {FaMicrophone} from 'react-icons/fa';

function ContactUs() {


  return (
    <div className='flex flex-col sm:w-full'>
        <div className='flex  sm:w-auto flex-col gap-8 2xl:gap-40 p-2 items-center sm:p-20 text-gray-4444 sm:items-start '>
            <div className='flex flex-col 2xl:text-5xl'>
              <span className='font-bold border-b-4 border-green-57C pb-2'>تماس با نهال آیتی</span>
              <span className='text-gray-b1b1 tracking-wide pt-2' style={{letterSpacing:'0.2rem'}}>Contact Us</span>
            </div>
            <div className='text-sm text-gray-5E5E text-center sm:text-right leading-8 mt-5 2xl:text-4xl 2xl:leading-loose'>
              <p>کاربر گرامی، لطفاً در صورت وجود هرگونه سوال یا ابهامی، پیشنهاد و یا هرگونه پیامی از بخش پشتیبانی سایت اقدام نمایید . پشتیبانان و تیم ما هر لحظه از شبانه روز آماده پاسخگویی به شما کاربران نهال آیتی می باشند .</p>
              <p>موقعیت ما را روی نقشه میتوانید  پیدا کنید:</p>
            </div>
            <div className='flex flex-col gap-3 2xl:gap-14'>
                <span className='font-bold 2xl:text-5xl sm:text-right text-center'>نهال آیتی در شبکه های اجتماعی</span>
                <div className='flex flex-row w-full sm:w-auto justify-center sm:justify-start gap-5 text-green-137 2xl:gap-16'>
                    <Link to="https://www.instagram.com/nahal_it_official"><BsInstagram className='w-7 h-7 2xl:w-24 2xl:h-24'/></Link>
                    <Link to="https://telegram.me/nahal_it"><BsTelegram className='w-7 h-7 2xl:w-24 2xl:h-24'/></Link>
                    <Link to="https://youtube.com/nahal_it"><BsYoutube className='w-7 h-7 2xl:w-24 2xl:h-24'/></Link>
                    <Link to="https://aparat.com/nahal_it"><FaVideo className='w-7 h-7 2xl:w-24 2xl:h-24'/></Link>
                </div>
            </div>
            <div className='flex flex-col text-gray-77 text-sm gap-2 2xl:text-4xl 2xl:leading-loose leading-normal'>
                <span>با عضویت در شبکه های اجتماعی نهال آیتی از آخرین تخفیف ها ،</span>
                <span>جشنواره ها و اطلاعیه های فروشگاه با خبر خواهید شد.</span>
            </div>
            <div className='flex flex-col gap-3'>
                <span className='font-bold text-base 2xl:text-5xl'>تماس با نهال آیتی</span>
                <div className='flex flex-row gap-5 2xl:gap-20 opacity-80'>
                    <Link to='tell://+982188867940' className='flex flex-row items-center gap-1 '>
                        <FaMicrophone className='text-green-137 2xl:w-16 2xl:h-16'/>
                        <span className='2xl:text-4xl'><b>021</b>88867940</span>
                    </Link>
                    <Link to='mailto:admin@nahalit.com'>
                        <b className='ml-2'>@</b>
                        <span className='2xl:text-4xl'><b>admin@</b>nahalit.com</span>
                    </Link>
                </div>
                <Link to='tell://+989927674217' className='flex flex-row items-center gap-1 opacity-80'>
                  <FaMicrophone className='text-green-137 2xl:w-16 2xl:h-16'/>
                  <span className='2xl:text-4xl'><b>0992</b>7674217</span>
                </Link>
            </div>
            <Link className='text-sm text-gray-77 w-full  sm:w-3/5 2xl:leading-loose leading-7 2xl:text-4xl' to='/'>
               <b className='ml-1'>دفتر مرکزی : </b>
               تهران - میدان فردوسی - خیابان ایرانشهر - بین سمیه و طالقانی - مجتمع تجاری میلاد - طبقه ۵ - واحد ۹
            </Link>
        </div>
    </div>
  )
}

export default ContactUs;
