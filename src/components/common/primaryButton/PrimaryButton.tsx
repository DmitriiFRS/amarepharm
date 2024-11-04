import Link from 'next/link';
import Image from 'next/image';
import arrow from '@/../public/svg/gradient-arrow.svg';

interface Props {
   lng: string;
   href: string;
   text: string;
   className?: string;
}

const PrimaryButton: React.FC<Props> = ({ lng, href, text, className }) => {
   return (
      <Link
         href={href}
         className={`inline-flex gap-3 pl-6 pr-2 rounded-[100px] items-center bg-neutral-black text-white h-12 ${className}`}>
         <span className='leading-143% tracking-tightest'>{text}</span>
         <span className='p-1 rounded-full bg-white'>
            <Image src={arrow} alt='arrow' width={32} height={32} />
         </span>
      </Link>
   );
};

export default PrimaryButton;
