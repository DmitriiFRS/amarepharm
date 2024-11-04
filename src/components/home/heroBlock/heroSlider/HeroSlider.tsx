'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import Image from 'next/image';
import image1 from '@/../public/images/products/kidskol.webp';
import image2 from '@/../public/images/products/Livarti_kids.webp';
import image3 from '@/../public/images/products/sinproji.webp';
import { A11y, Autoplay, EffectCoverflow, EffectFade, FreeMode, Thumbs } from 'swiper/modules';

interface Props {
   lng: string;
}

const slides = [
   {
      id: 0,
      image: image1,
   },
   {
      id: 1,
      image: image2,
   },
   {
      id: 2,
      image: image3,
   },
];

const HeroSlider: React.FC<Props> = ({ lng }) => {
   const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
   const [thumbsDirection, setThumbsDirection] = useState<'vertical' | 'horizontal'>('vertical');

   const [activeIndex, setActiveIndex] = useState(0);
   const slideDuration = 5000;

   useEffect(() => {
      const updateDirection = () => {
         setThumbsDirection(window.innerWidth < 480 ? 'horizontal' : 'vertical');
      };

      updateDirection(); // Set initial direction based on screen width
      window.addEventListener('resize', updateDirection); // Update on resize

      return () => window.removeEventListener('resize', updateDirection);
   }, []);

   useEffect(() => {
      if (thumbsSwiper) {
         thumbsSwiper.slideTo(activeIndex);
      }
   }, [activeIndex, thumbsSwiper]);

   return (
      <Fragment>
         <Swiper
            onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
            className='aspect-[133/295] xs:aspect-[224/498] h-auto max-w-[133px] my-[60px] xs:max-w-[224px]'
            modules={[Thumbs, A11y, FreeMode, EffectCoverflow, Autoplay]}
            loop
            thumbs={{
               swiper: thumbsSwiper,
            }}
            effect='coverflow'>
            {slides.map((el, index) => {
               return (
                  <SwiperSlide key={el.id}>
                     <Image
                        className='w-full h-auto aspect-[133/295] xs:aspect-[224/498]'
                        src={el.image}
                        alt='slide'
                        width={520}
                        height={618}
                     />
                  </SwiperSlide>
               );
            })}
         </Swiper>
         <div className='absolute px-14 bottom-4 right-0 left-0 z-50 flex flex-col justify-center xs:top-0 xs:right-3 xs:left-[initial] xs:bottom-0 xs:px-0'>
            <Swiper
               modules={[FreeMode, Thumbs]}
               onSwiper={setThumbsSwiper}
               slidesPerView={3}
               direction={thumbsDirection}
               className='h-auto w-full hero-swiper px-10 xs:w-[72px] xs:px-0'>
               {slides.map((el, index) => {
                  return (
                     <SwiperSlide
                        key={el.id}
                        className={`h-[72px_!important] aspect-[1/1] p-[0px_important] m-[0px_!important] ${
                           activeIndex === index ? 'active-hero-thumb' : ''
                        }`}>
                        <button className='spin-button spin circle'>
                           <Image
                              src={el.image}
                              alt='slide'
                              width={72}
                              height={72}
                              className='w-[72px] h-auto object-contain aspect-[1/1] rounded-full border border-gray-100/20 bg-gray-100/30 p-2'
                           />
                        </button>
                     </SwiperSlide>
                  );
               })}
            </Swiper>
         </div>
      </Fragment>
   );
};

export default HeroSlider;
