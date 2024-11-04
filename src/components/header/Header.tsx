import { nav } from '@/data/navigation';
import Container from '../common/container/Container';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/../public/svg/logo.svg';
import russia from '@/../public/svg/russia.svg';
import pin from '@/../public/svg/pin-black.svg';
import phone from '@/../public/svg/phone.svg';
import Burger from './burger/Burger';
import ModalWindow from '../common/modalWindow/ModalWindow';
import HeaderPopupContextProvider from '@/context/HeaderPopupContextProvider';

interface Props {
   lng: string;
}

const Header: React.FC<Props> = ({ lng }) => {
   return (
      <HeaderPopupContextProvider>
         <header className='h-20'>
            <ModalWindow lng={lng}>
               <nav className='absolute left-[50%] translate-x-[-50%] top-[calc(50%-20px)] translate-y-[-50%]'>
                  <ul className='flex flex-col gap-10 text-center font-medium text-[20px]'>
                     {nav.map(el => {
                        return (
                           <li key={el.id}>
                              <Link href={el.href}>{el.title}</Link>
                           </li>
                        );
                     })}
                  </ul>
               </nav>
               <div className='px-[10px] pb-8 flex gap-2 sm:px-5'>
                  <button className='flex gap-1 items-center justify-center bg-[#F3F3F3] h-10 rounded-[100px] px-3'>
                     <Image src={pin} alt='pin' height={20} width={20} />
                     <span className='leading-143% tracking-tightest text-nowrap'>г. Ташкент</span>
                  </button>
                  <button className='flex gap-1 items-center justify-center bg-[#F3F3F3] h-10 rounded-[100px] px-3'>
                     <Image src={phone} alt='phone' height={20} width={20} />
                     <span className='leading-143% tracking-tightest text-nowrap'>+998 (55) 520-07-37</span>
                  </button>
               </div>
            </ModalWindow>
            <Container className='flex h-full justify-between items-center'>
               <Burger lng={lng} />
               <Image src={logo} alt='Logo' width={132} height={48} />
               <div className='flex justify-between w-[initial] h-full ml-5 lg:ml-[60px] lg:w-full'>
                  <nav className='hidden lg:block'>
                     <ul className='flex items-center justify-center h-full gap-5 xl:gap-10'>
                        {nav.map(el => {
                           return (
                              <li key={el.id} className='font-medium leading-143% tracking-tightest text-neutral-black'>
                                 <Link href={el.href}>{el.title}</Link>
                              </li>
                           );
                        })}
                     </ul>
                  </nav>
                  <div className='flex h-full items-center gap-2'>
                     <button className=' bg-[#F3F3F3] px-3 py-[10px] rounded-[100px] max-lg:h-10'>
                        <Image src={russia} alt='flag' />
                     </button>
                     <button className='hidden gap-1 items-center bg-[#F3F3F3] px-3 py-[10px] rounded-[100px] lg:flex'>
                        <Image src={pin} alt='pin' height={17} width={14} />
                        <span className='border-spacing-24'>г. Ташкент</span>
                     </button>
                     <button className='hidden gap-1 bg-[#F3F3F3] px-3 py-[10px] rounded-[100px] lg:flex'>
                        <Image src={phone} alt='phone' height={13} width={13} />
                        <span className=''>+998 (55) 520-07-37</span>
                     </button>
                  </div>
               </div>
            </Container>
         </header>
      </HeaderPopupContextProvider>
   );
};

export default Header;
