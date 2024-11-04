'use client';

import { servicesItems } from './Services';
import Image from 'next/image';
import arrow from '@/../public/svg/gradient-arrow.svg';
import whiteArrow from '@/../public/svg/arrow-close-white.svg';
import gradientImg from '@/../public/images/homepage/gradient-img.webp';
import { useState } from 'react';

interface Props {
   lng: string;
}

const ServicesTabs: React.FC<Props> = ({ lng }) => {
   const [activeItem, setActiveItem] = useState<number>(0);
   return (
      <div className='mt-[60px] hidden gap-6 md:flex'>
         <div className='flex-[0_1_60%] grid grid-cols-2 gap-y-4 gap-x-4 lg:grid-cols-3 lg:flex-[0_1_69%]'>
            {servicesItems.map(item => {
               return (
                  <div
                     onClick={() => setActiveItem(item.id)}
                     key={item.id}
                     className='service-tabs-item border border-neutral-stroke p-[20px] flex flex-col gap-4 justify-end relative rounded-2xl h-[200px]'>
                     <Image
                        src={gradientImg}
                        alt='bg'
                        width={264}
                        height={200}
                        className='absolute left-0 top-0 w-full h-full object-cover rounded-2xl service-tabs-bg'
                     />
                     <div className='bg-service-tab-gradient absolute left-0 top-0 w-full h-full z-10 rounded-2xl service-tabs-bg-gradient'></div>
                     <h4 className='font-semibold text-[20px] leading-[140%] tracking-tightest service-tabs-title relative z-10'>
                        {item.title}
                     </h4>
                     <div className='flex gap-2 relative z-10'>
                        <span className='leading-143% tracking-tightest service-tabs-span'>Подробнее</span>
                        <Image
                           className='service-tabs-icon-hovered hidden'
                           src={whiteArrow}
                           alt='arrow-icon'
                           width={24}
                           height={24}
                        />
                        <Image className='service-tabs-icon' src={arrow} alt='arrow-icon' width={24} height={24} />
                     </div>
                  </div>
               );
            })}
         </div>
         <div className='flex-[0_1_40%] relative max-h-[632px] lg:max-h-max lg:flex-[0_1_31%]'>
            <Image
               src={gradientImg}
               alt='bg'
               width={264}
               height={200}
               className='absolute left-0 top-0 w-full h-full object-cover rounded-2xl'
            />
            <div className='bg-service-tab-gradient absolute left-0 top-0 w-full h-full z-10 rounded-2xl'></div>
            <div className='relative z-10 text-neutral-white flex flex-col h-full'>
               <div className='px-3 pt-3 flex flex-col flex-auto h-full lg:px-6 lg:pt-6'>
                  <div className='flex justify-between'>
                     <div className='font-semibold text-[32px] leading-125% tracking-tightest'>
                        {servicesItems[activeItem].title}
                     </div>
                     <div className='min-w-10 max-w-10 h-auto max-h-10 aspect-square bg-neutral-white flex items-center justify-center rounded-full'>
                        <Image src={arrow} alt='arrow' height={28} width={28} />
                     </div>
                  </div>
                  <p className='mt-4 leading-143% flex-auto block'>{servicesItems[activeItem].inner.description}</p>
               </div>
               <div className=' bg-gray-f3 rounded-2xl py-7 text-neutral-black flex flex-col items-center'>
                  <div className='bg-neutral-white max-w-[200px] aspect-square h-auto flex items-center justify-center py-3 rounded-2xl'>
                     <Image src={servicesItems[activeItem].inner.image} alt='product' width={80} height={176} />
                  </div>
                  <div className='mt-4 flex flex-col gap-4 max-w-[200px]'>
                     <h4 className='font-semibold text-[20px] leading-140% tracking-tightest'>
                        {servicesItems[activeItem].inner.title}
                     </h4>
                     <p className='leading-143% text-neutral-gray service-tabs-info-p'>
                        {servicesItems[activeItem].inner.subtitle}
                     </p>
                     <div className='flex gap-2'>
                        <span className='leading-143% tracking-tightest service-tabs-span'>Подробнее</span>
                        <Image className='' src={arrow} alt='arrow-icon' width={24} height={24} />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ServicesTabs;
