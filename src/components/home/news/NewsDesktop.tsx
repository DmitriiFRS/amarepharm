'use client';

import 'swiper/css';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { news } from './News';
import Link from 'next/link';
import { Navigation } from 'swiper/modules';

interface Props {
   lng: string;
}

const NewsDesktop: React.FC<Props> = ({ lng }) => {
   return (
      <>
         <div className='flex gap-4 absolute right-0 top-2 max-w-[112px] w-full mr-[10px]'>
            <button className='rounded-full group w-12 h-12 bg-gray-f3 flex items-center justify-center swiper-news-button-prev hover:bg-primary-gradient'>
               <svg
                  className='size-6 text-neutral-gray group-hover:text-white'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <g opacity='0.8'>
                     <path
                        d='M15 18L9 12L15 6'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                     />
                  </g>
               </svg>
            </button>
            <button className='rounded-full w-12 h-12 group bg-gray-f3 flex items-center justify-center swiper-news-button-next hover:bg-primary-gradient'>
               <svg
                  className='size-6 text-neutral-gray group-hover:text-white'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <g opacity='0.8'>
                     <path
                        d='M9 18L15 12L9 6'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                     />
                  </g>
               </svg>
            </button>
         </div>
         <Swiper
            slidesPerView={6}
            className='swiper-news-desktop'
            modules={[Navigation]}
            navigation={{
               nextEl: '.swiper-news-button-next',
               prevEl: '.swiper-news-button-prev',
            }}>
            {news.map(el => {
               return (
                  <SwiperSlide className='border border-neutral-stroke rounded-2xl w-[100%_!important] p-[20px] aspect-[389/260] news-slide-hovered-wrapper overflow-hidden'>
                     <Link href={el.href} className='flex flex-col justify-between h-full'>
                        <div className='font-semibold text-[20px] leading-[140%] tracking-tightest news-slide-hovered'>
                           {el.title}
                        </div>
                        <div className='leading-143% tracking-tightest text-neutral-gray'>{el.date}</div>
                     </Link>
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </>
   );
};

export default NewsDesktop;
