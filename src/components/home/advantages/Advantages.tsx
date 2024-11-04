import Container from '@/components/common/container/Container';
import Image from 'next/image';
import icon1 from '@/../public/svg/homepage/advantage-1.svg';
import icon2 from '@/../public/svg/homepage/advantage-2.svg';
import icon4 from '@/../public/svg/homepage/advantage-4.svg';
import bg1 from '@/../public/images/homepage/advantages-bg-1.webp';

interface Props {
   lng: string;
}

export const advantagesCols = [
   {
      id: 0,
      title: 'Большой выбор',
      subtitle: 'Сертифицированная продукция',
      href: '#',
      image: icon1,
      bg: bg1,
   },
   {
      id: 1,
      title: 'Доступные цены',
      subtitle: 'Строгое соблюдение сроков',
      href: '#',
      image: icon2,
      bg: bg1,
   },
   {
      id: 2,
      title: 'Большой выбор',
      subtitle: 'Сертифицированная продукция',
      href: '#',
      image: icon1,
      bg: bg1,
   },
   {
      id: 3,
      title: 'Быстрая доставка',
      subtitle: 'По Республике Узбекистан',
      href: '#',
      image: icon4,
      bg: bg1,
   },
];

const Advantages: React.FC<Props> = ({ lng }) => {
   return (
      <section className='mt-20'>
         <Container>
            <div className='flex flex-col gap-6'>
               <h2 className='font-medium text-[42px] leading-119% tracking-tightest'>Преимущества</h2>
               <p className='leading-143% text-neutral-gray'>
                  Мы заботимся о вас и понимаем абсолютную ценность здоровья, и это вдохновляет нас открывать новые
                  возможности, чтобы улучшать качество жизни людей и делать их счастливыми! Мы рады трудится во благо
                  здоровья нашего народа!
               </p>
            </div>
            <Cols lng={lng} />
         </Container>
      </section>
   );
};

const Cols: React.FC<Props> = ({ lng }) => {
   return (
      <div className='grid grid-cols-1 gap-4 mt-10 xs:grid-cols-2 lg:grid-cols-4'>
         {advantagesCols.map(el => {
            return (
               <div
                  className='relative bg-gray-f3 group p-[20px] aspect-[335/220] w-full h-auto flex items-end rounded-2xl xs:h-[220px] cursor-pointer'
                  key={el.id}>
                  <Image
                     src={bg1}
                     alt='bg'
                     width={228}
                     height={200}
                     className='w-full h-full object-cover absolute left-0 top-0 z-10 opacity-0 group-hover:opacity-100 duration-300'
                  />
                  <div className='absolute right-5 top-5 max-w-14 w-full h-auto aspect-square rounded-full bg-primary-gradient flex items-center justify-center'>
                     <Image src={el.image} alt='icon' width={32} height={32} />
                  </div>
                  <div className='flex flex-col gap-2'>
                     <h4 className='font-semibold text-[20px] leading-[140%] tracking-tightest'>{el.title}</h4>
                     <p className='leading-143% tracking-tightest text-neutral-gray'>{el.subtitle}</p>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default Advantages;
