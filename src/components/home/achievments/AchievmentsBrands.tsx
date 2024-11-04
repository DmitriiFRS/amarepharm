'use client';

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image, { StaticImageData } from 'next/image';
import logo1 from '@/../public/images/homepage/logo1.webp';
import logo2 from '@/../public/images/homepage/logo2.webp';
import logo3 from '@/../public/images/homepage/logo3.webp';
import logo4 from '@/../public/images/homepage/logo4.webp';
import logo5 from '@/../public/images/homepage/logo5.webp';
import CustomSwiperPagination from '@/components/common/customPaginationSwiper/CustomSwiperPagination';

interface Props {
   lng: string;
}

const brandSlides = [logo1, logo2, logo3, logo4, logo5];

const desktop = [
   {
      id: 0,
      title: 'Мы сотрудничаем с лучшими',
   },
   {
      id: 1,
      image: logo1,
   },
   {
      id: 2,
      image: logo2,
   },
   {
      id: 3,
      image: logo3,
   },
   {
      id: 4,
      image: logo4,
   },
   {
      id: 5,
      image: logo5,
   },
];

const AchievmentsBrands: React.FC<Props> = ({ lng }) => {
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      const handleResize = () => {
         setIsMobile(window.innerWidth < 768);
      };
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   return <article>{isMobile ? <Mobile /> : <Desktop />}</article>;
};

const Mobile = () => {
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
      <div className=' gap-6 mt-2 text-neutral-white'>
         <h2 className='font-semibold text-[24px] leading-[133%] tracking-tightest'>Мы сотрудничаем с лучшими</h2>
         <Swiper
            ref={swiperRef}
            onSwiper={onSwiperInit}
            onSlideChange={updateActivePagination}
            className='mt-6 h-[120px]'
            spaceBetween={10}
            loop>
            {brandSlides.map((slide, index) => {
               return (
                  <SwiperSlide
                     className='flex bg-hero-gradient rounded-2xl h-full items-center justify-center'
                     key={index}>
                     <div className='w-full h-full flex items-center justify-center object-contain'>
                        <Image
                           src={slide}
                           alt='slide'
                           width={228}
                           height={88}
                           className='object-contain max-w-[228px] max-h-[88px]'
                        />
                     </div>
                  </SwiperSlide>
               );
            })}
         </Swiper>
         <CustomSwiperPagination
            swiperRef={swiperRef}
            el='mt-6 h-3 w-full flex gap-3 justify-center'
            bullet='h-full w-3 rounded-full  cursor-pointer border-2 border-neutral-stroke'
            activeBullet='bg-neutral-stroke'
            totalSlides={slides}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
         />
      </div>
   );
};

const Desktop = () => {
   return (
      <div className='grid grid-cols-3 gap-x-4 gap-y-4 mt-[60px]'>
         {desktop.map(el => {
            return el.title ? (
               <div className='font-semibold text-[24px] leading-[133%] tracking-tightest text-neutral-white max-w-52'>
                  {el.title}
               </div>
            ) : (
               <div
                  key={el.id}
                  className='flex items-center justify-center bg-hero-gradient max-h-[120px] p-4 rounded-2xl'>
                  <Image
                     src={el.image as StaticImageData}
                     alt='slide'
                     width={389}
                     height={120}
                     className='object-contain h-full w-full'
                  />
               </div>
            );
         })}
      </div>
   );
};

export default AchievmentsBrands;
