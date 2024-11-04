import { nav } from '@/data/navigation';
import Container from '../common/container/Container';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/../public/svg/logo-white.svg';
import pin from '@/../public/svg/pin-white.svg';
import phone from '@/../public/svg/phone-white.svg';

interface Props {
   lng: string;
}

const Footer: React.FC<Props> = ({ lng }) => {
   return (
      <footer className='bg-neutral-black py-10 text-neutral-white lg:py-[60px]'>
         <Container className='flex flex-col gap-10 lg:gap-[60px]'>
            <nav>
               <ul className='flex flex-col gap-6 items-center md:justify-between md:gap-0 md:flex-row md:items-baseline'>
                  {nav.map(el => {
                     return (
                        <li key={el.id} className='font-medium leading-143%'>
                           <Link href={el.href}>{el.title}</Link>
                        </li>
                     );
                  })}
               </ul>
            </nav>
            <span className='block w-full h-[1px] bg-neutral-white opacity-40'></span>
            <div className='flex flex-col justify-between items-center gap-6 lg:flex-row lg:gap-0'>
               <Image src={logo} alt='Amarepharmco' width={132} height={48} />
               <div className='flex gap-10 leading-143% tracking-tightest font-medium text-[#737373]'>
                  <Link href={'#'}>Term of Service</Link>
                  <Link href={'#'}>Privacy Policy</Link>
               </div>
               <div className='flex gap-2'>
                  <button className='flex gap-1 items-center justify-center bg-[#F3F3F31A] h-10 rounded-[100px] px-3'>
                     <Image src={pin} alt='pin' height={20} width={20} />
                     <span className='leading-143% tracking-tightest text-nowrap'>г. Ташкент</span>
                  </button>
                  <button className='flex gap-1 items-center justify-center bg-[#F3F3F31A] h-10 rounded-[100px] px-3'>
                     <Image src={phone} alt='phone' height={20} width={20} />
                     <span className='leading-143% tracking-tightest text-nowrap'>+998 (55) 520-07-37</span>
                  </button>
               </div>
               <div className='text-[#737373]'>Copyright © 2023 - 2024</div>
            </div>
         </Container>
      </footer>
   );
};

export default Footer;
