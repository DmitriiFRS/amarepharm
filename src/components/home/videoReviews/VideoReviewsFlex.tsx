'use client';

import { Navigation } from 'swiper/modules';
import { videos } from './VideoReviews';
import 'swiper/css';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

interface Props {
   lng: string;
}

const VideoReviewsFlex: React.FC<Props> = ({ lng }) => {
   return (
      <>
         <div className='flex gap-4 absolute right-0 top-0 max-w-[112px] w-full mr-[10px]'>
            <button className='rounded-full group w-12 h-12 bg-gray-f3 flex items-center justify-center swiper-reviews-button-prev hover:bg-primary-gradient'>
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
            <button className='rounded-full w-12 h-12 group bg-gray-f3 flex items-center justify-center swiper-reviews-button-next hover:bg-primary-gradient'>
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
            slidesPerView={4}
            spaceBetween={16}
            className='flex gap-4 mt-[60px]'
            modules={[Navigation]}
            navigation={{
               nextEl: '.swiper-reviews-button-next',
               prevEl: '.swiper-reviews-button-prev',
            }}>
            {videos.map(el => {
               const embedUrl = el.href.replace('shorts', 'embed');
               return (
                  <SwiperSlide key={el.id} className='h-auto aspect-[288/469] rounded-2xl overflow-hidden'>
                     <div className='h-full w-full pointer-events-none'>
                        <iframe
                           allowFullScreen
                           src={embedUrl}
                           frameBorder='0'
                           className='h-full w-full relative z-50 block'
                        />
                     </div>
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </>
   );
};

export default VideoReviewsFlex;
