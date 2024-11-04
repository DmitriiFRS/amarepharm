import Container from '@/components/common/container/Container';
import { products } from '@/data/products';
import Image from 'next/image';
import arrow from '@/../public/svg/arrow-close-white.svg';
import Link from 'next/link';

interface Props {
   lng: string;
}

const OurProducts: React.FC<Props> = ({ lng }) => {
   return (
      <section className='bg-primary-gradient py-20 mt-[100px] lg:py-[100px]'>
         <Container>
            <div className='flex flex-col gap-6 text-neutral-white md:flex-row md:justify-between'>
               <h2 className='text-[42px] leading-119% tracking-tightest lg:text-[56px]'>Наши продукты</h2>
               <p className='leading-143% text-gray-f3 md:max-w-[420px]'>
                  Мы заботимся о  вас и понимаем абсолютную ценность здоровья, и это вдохновляет нас открывать новые
                  возможности, чтобы улучшать качество жизни людей и делать их счастливыми! Мы рады трудится во благо
                  здоровья нашего народа!
               </p>
            </div>
            <OurProductsGrid lng={lng} />
         </Container>
      </section>
   );
};

const OurProductsGrid: React.FC<Props> = ({ lng }) => {
   return (
      <div className='grid grid-cols-1 mt-10 gap-4 xs:grid-cols-2 lg:flex lg:mt-[60px]'>
         {products.map(el => {
            return (
               <div key={el.id} className='text-neutral-white'>
                  <div className='flex justify-center bg-neutral-white rounded-2xl py-8'>
                     <Image
                        src={el.image}
                        alt={el.title}
                        width={121}
                        height={270}
                        className='h-auto w-full max-w-[124px] aspect-[124/276]'
                     />
                  </div>
                  <div className='mt-4 flex flex-col gap-2'>
                     <h3 className='font-semibold text-[20px] leading-140% tracking-tightest'>{el.title}</h3>
                     <p className='leading-143% opacity-80'>{el.description}</p>
                     <Link href={el.href} className='flex gap-2'>
                        <span className='leading-143% tracking-tightest'>Подробнее</span>
                        <Image src={arrow} alt='arrow' width={24} height={24} />
                     </Link>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default OurProducts;
