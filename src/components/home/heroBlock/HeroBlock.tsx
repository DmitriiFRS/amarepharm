import Container from '@/components/common/container/Container';
import PrimaryButton from '@/components/common/primaryButton/PrimaryButton';
import heart from '@/../public/svg/gradient-heart.svg';
import Image from 'next/image';
import HeroSlider from './heroSlider/HeroSlider';
import crown from '@/../public/svg/crown.svg';
import one from '@/../public/svg/one.svg';
import star from '@/../public/svg/star-white.svg';

interface Props {
   lng: string;
}

const HeroBlock: React.FC<Props> = ({ lng }) => {
   return (
      <section className='px-0 mt-20 md:mt-10 md:px-10'>
         <Container className='grid grid-cols-1 gap-10 md:grid-cols-2'>
            <div className='flex-[0_1_52%]  flex flex-col justify-end'>
               <div className='text-[64px] leading-[112%] tracking-tightest text-neutral-black'>
                  <h1>
                     Сохраним <span className='font-medium'>здоровье</span>
                  </h1>
                  <div className='flex items-end gap-4'>
                     <span className='rounded-full inline-block bg-[#F3F3F3] p-3'>
                        <Image src={heart} alt='heart' width={32} height={32} />
                     </span>
                     <span>вместе</span>
                  </div>
               </div>
               <p className='mt-6 text-[16px] leading-[150%] text-neutral-gray'>
                  Amare Pharm является стратегической компанией в Узбекистане и на зарубежных рынках лекарственных
                  средств, биологически активных добавок, медицинских и косметических средств.
               </p>
               <PrimaryButton lng={lng} href='#' text='Узнать больше' className='mt-10 max-w-max text-nowrap' />
            </div>
            <div className='flex-[0_1_48%] relative bg-primary-gradient rounded-[40px] h-[523px] xs:h-auto'>
               <div className='absolute z-10 left-5 top-5 rounded-[16px] flex flex-col gap-[6px] items-center bg-neutral-white max-w-[95px] p-[12px] max-h-[101px]'>
                  <Image className='absolute right-[30%] top-0' src={crown} alt='crown' width={32} height={32} />
                  <Image src={one} alt='icon' width={31} height={51} />
                  <span className='text-xs leading-[150%] text-neutral-gray'>В продажах</span>
               </div>
               <div className='absolute z-10 bottom-[120px] left-[10%] backdrop-blur-[20px] p-3 rounded-[16px] overflow-hidden text-neutral-white bg-hero-gradient w-[80%] xs:w-auto xs:left-6 xs:bottom-6'>
                  <div className='flex gap-[10px]'>
                     <span className='font-semibold leading-143%'>Артем Мелехов</span>
                     <div className='flex gap-[2px]'>
                        {Array.from({ length: 5 }).map((_, index) => (
                           <Image key={index} src={star} alt='star' width={16} height={16} />
                        ))}
                     </div>
                  </div>
                  <p className='text-xs leading-[150%]'>
                     Помогло ребенку. <br /> Спасибо Amare Pharm
                  </p>
               </div>
               <HeroSlider lng={lng} />
            </div>
         </Container>
      </section>
   );
};

export default HeroBlock;
