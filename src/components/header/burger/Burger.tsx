'use client';

import { HeaderPopup } from '@/context/HeaderPopupContextProvider';
import { useContext, useState } from 'react';

interface Props {
   lng: string;
}

const Burger: React.FC<Props> = ({ lng }) => {
   const popupContext = useContext(HeaderPopup);
   function toggleMenu() {
      if (popupContext.isOpen) {
         document.body.style.overflow = 'auto';
      } else {
         document.body.style.overflow = 'hidden';
      }
      popupContext.setIsOpen(!popupContext.isOpen);
   }
   return (
      <button
         onClick={toggleMenu}
         className='flex flex-col justify-center p-[10px] gap-[5px] lg:hidden h-10 w-10 rounded-[50%] bg-gray-f3'>
         <span className='bg-neutral-black h-[2px] w-full'></span>
         <span className='bg-neutral-black h-[2px] w-full'></span>
         <span className='bg-neutral-black h-[2px] w-full'></span>
      </button>
   );
};

export default Burger;
