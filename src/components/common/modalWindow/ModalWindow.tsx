'use client';

import './style.css';
import { HeaderPopup } from '@/context/HeaderPopupContextProvider';
import { useContext, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import close from '@/../public/svg/close.svg';
import logo from '@/../public/svg/logo.svg';

interface Props {
   lng: string;
   children: React.ReactNode;
   className?: string;
}

const ModalWindow: React.FC<Props> = ({ lng, children, className }) => {
   const popupContext = useContext(HeaderPopup);
   const [isClosing, setIsClosing] = useState(false);

   function closeModalOnResize() {
      startClosingAnimation();
   }

   function closeModal() {
      startClosingAnimation();
   }

   function startClosingAnimation() {
      setIsClosing(true);
      setTimeout(() => {
         popupContext.setIsOpen(false);
         setIsClosing(false);
         document.body.style.overflow = 'auto';
      }, 300);
   }

   useEffect(() => {
      window.addEventListener('resize', closeModalOnResize);
      return () => {
         window.removeEventListener('resize', closeModalOnResize);
      };
   }, []);

   return (
      <div
         onClick={closeModal}
         className={`popup ${popupContext.isOpen && !isClosing ? 'visible opacity-100' : 'invisible opacity-0'}`}>
         <div
            onClick={e => e.stopPropagation()}
            className={`popup-body ${popupContext.isOpen && !isClosing ? 'translate-x-[0%]' : 'translate-x-full'}`}>
            <button
               onClick={closeModal}
               className='bg-gray-f3 max-h-10 max-w-10 w-full h-full rounded-full flex justify-center items-center absolute left-5 top-5'>
               <Image src={close} alt='close' width={20} height={20} />
            </button>
            <Image src={logo} alt='logo' width={132} height={48} />
            {children}
         </div>
      </div>
   );
};

export default ModalWindow;
