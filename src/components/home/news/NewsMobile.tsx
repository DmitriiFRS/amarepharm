'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { news } from './News';
import Link from 'next/link';
import 'swiper/css';
import { Pagination } from 'swiper/modules';

interface Props {
   lng: string;
}

const NewsMobile: React.FC<Props> = ({ lng }) => {
   return (
      <>
         <Swiper
            spaceBetween={16}
            slidesPerView={1.1}
            breakpoints={{
               640: {
                  slidesPerView: 2,
               },
               1024: {
                  slidesPerView: 3,
               },
            }}
            modules={[Pagination]}
            pagination={{
               el: '.news-swiper-pagination ',
               bulletClass: 'size-3 border rounded-full',
               bulletActiveClass: 'bg-primary-gradient',
               clickable: true,
            }}>
            {news.map(el => {
               return (
                  <SwiperSlide
                     key={el.id}
                     className='border-neutral-stroke border rounded-2xl p-[20px] h-auto w-full aspect-[312/300] ssm:aspect-[312/260] xs:max-h-[300px]'>
                     <Link href={el.href} className='flex flex-col justify-between h-full'>
                        <div className='font-semibold text-[20px] leading-[140%] tracking-tightest'>{el.title}</div>
                        <div className='leading-143% tracking-tightest text-neutral-gray'>{el.date}</div>
                     </Link>
                  </SwiperSlide>
               );
            })}
         </Swiper>
         <div className='news-swiper-pagination flex flex-row justify-center gap-2 mt-10'></div>
      </>
   );
};

export default NewsMobile;
