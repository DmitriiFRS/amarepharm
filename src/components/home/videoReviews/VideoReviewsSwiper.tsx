'use client';

import CustomSwiperPagination from '@/components/common/customPaginationSwiper/CustomSwiperPagination';
import { useRef, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { videos } from './VideoReviews';

interface Props {
   lng: string;
}

const VideoReviewsSwiper: React.FC<Props> = ({ lng }) => {
   const swiperRef = useRef<{ swiper: SwiperClass } | null>(null);
   const [slides, setSlides] = useState(0);
   const [activeIndex, setActiveIndex] = useState(0);
   const onSwiperInit = (swiper: SwiperClass): void => {
      const numberOfSlides = swiper.slides.length || 0;

      setSlides(numberOfSlides);
   };
   const updateActivePagination = (swiper: SwiperClass) => {
      setActiveIndex(swiper.realIndex);
   };
   return (
      <>
         <Swiper
            slidesPerView={1}
            spaceBetween={16}
            ref={swiperRef}
            onSwiper={onSwiperInit}
            onSlideChange={updateActivePagination}
            className='overflow-visible mt-6'>
            {videos.map(el => {
               const embedUrl = el.href.replace('shorts', 'embed');
               return (
                  <SwiperSlide
                     key={el.id}
                     className='h-full w-full max-w-[90%] aspect-[312/508] rounded-2xl overflow-hidden'>
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
         <CustomSwiperPagination
            swiperRef={swiperRef}
            el='h-3 w-full flex justify-center gap-3 mt-6'
            bullet='h-full w-3 rounded-full border'
            activeBullet='bg-primary-gradient'
            totalSlides={slides}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
         />
      </>
   );
};

export default VideoReviewsSwiper;
