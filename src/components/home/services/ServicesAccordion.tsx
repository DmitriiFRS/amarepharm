'use client';

import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import arrow from '@/../public/svg/gradient-arrow.svg';
import whiteArrow from '@/../public/svg/arrow-close-white.svg';
import Image from 'next/image';

import gradientImg from '@/../public/images/homepage/gradient-img.webp';
import { useState } from 'react';
import { servicesItems } from './Services';

interface Props {
   lng: string;
}

const ServicesAccordion: React.FC<Props> = ({ lng }) => {
   const [expanded, setExpanded] = useState<number | null>(null);
   const handleChange = (panel: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : null);
   };
   return (
      <div className={`service-accordion-wrapper flex flex-col gap-10 ${expanded !== null && 'gap-0'} md:hidden`}>
         {servicesItems.map(item => {
            return (
               <Accordion
                  className='relative'
                  key={item.id}
                  expanded={expanded === item.id}
                  onChange={handleChange(item.id)}>
                  <AccordionSummary
                     className={`h-[224px] service-accordion relative w-full p-0 text-neutral-black ${
                        expanded !== null && 'h-[300px]'
                     }`}>
                     <div className='service-accordion-summary w-full px-[20px] relative'>
                        {expanded === item.id && (
                           <>
                              <div className='bg-service-tab-gradient absolute left-0 top-0 w-full h-full z-10 rounded-2xl'></div>
                              <Image
                                 src={gradientImg}
                                 alt='bg'
                                 width={335}
                                 height={608}
                                 className='object-cover w-full h-full absolute left-0 top-0 rounded-2xl'
                              />
                           </>
                        )}

                        <div
                           className={`flex flex-col h-full justify-end gap-2 relative z-30 py-4 ${
                              expanded === item.id && 'text-neutral-white max-h-[270px] gap-[18px]'
                           }`}>
                           <h4 className='font-semibold text-[20px] leading-[140%] tracking-tightest'>{item.title}</h4>
                           <p
                              className={`relative z-20 overflow-hidden duration-500 leading-143% ${
                                 expanded === item.id ? 'h-full' : 'h-0'
                              }`}>
                              {item.inner.description}
                           </p>
                           <div className='flex gap-2 items-center'>
                              <span className='leading-143% tracking-tightest'>
                                 {expanded === item.id ? 'Скрыть' : 'Подробнее'}
                              </span>
                              {expanded === item.id ? (
                                 <Image src={whiteArrow} alt='arrow-icon' width={24} height={24} />
                              ) : (
                                 <Image src={arrow} alt='arrow-icon' width={24} height={24} />
                              )}
                           </div>
                        </div>
                     </div>
                  </AccordionSummary>
                  <AccordionDetails
                     className={`bg-gray-f3 relative z-20 rounded-2xl px-[67px] flex flex-col py-7 service-accordion-details`}>
                     <div className='bg-neutral-white flex justify-center py-3'>
                        <Image src={item.inner.image} alt='product' width={80} height={176} />
                     </div>
                     <div className='mt-4 flex flex-col gap-2'>
                        <div className='font-semibold text-[20px] leading-140% tracking-tightest'>
                           {item.inner.title}
                        </div>
                        <p className='leading-143% text-neutral-gray'>{item.inner.subtitle}</p>
                        <div className='flex gap-2 items-center'>
                           <span className='leading-143% tracking-tightest'>Подробнее</span>
                           <Image src={arrow} alt='arrow-icon' width={24} height={24} />
                        </div>
                     </div>
                  </AccordionDetails>
               </Accordion>
            );
         })}
      </div>
   );
};

export default ServicesAccordion;
