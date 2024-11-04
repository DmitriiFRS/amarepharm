import Container from '@/components/common/container/Container';
import map from '@/../public/svg/homepage/map.svg';
import Image from 'next/image';

interface Props {
   lng: string;
}

const outlets = [
   {
      id: 0,
      title: 'Amare Pharm',
      address: 'г. Ташкент Яккасарайский район, улица Имам- Ат Термизи 35',
   },
   {
      id: 1,
      title: 'Филиал в г. Самарканд',
      address: 'Самаркандская область, г. Самарканд, ул. Гагарина, д.36',
   },
   {
      id: 2,
      title: 'Филиал в г. Бухара',
      address: 'Бухарская область, г. Бухара, ул. Шохруда 55',
   },
   {
      id: 3,
      title: 'Филиал в г. Карши',
      address: 'Кашкадарьинская область, г. Карши, ул. Насаф, 5 микрорайон д. 19Б',
   },
   {
      id: 4,
      title: 'Филиал в г. Андижан',
      address: 'Андижанская область, г. Андижан, ул. Анисий',
   },
];

const Network: React.FC<Props> = ({ lng }) => {
   return (
      <section className='bg-primary-gradient mt-20'>
         <Container className='py-20 text-neutral-white lg:flex lg:items-center'>
            <div className='lg:flex-[0_1_50%]'>
               <div className='flex flex-col gap-6'>
                  <h2 className='text-[42px] leading-119% tracking-tightest md:text-[56px] md:leading-[114%]'>
                     Более 400 аптек
                  </h2>
                  <p className='leading-143% md:text-[16px] md:leading-[150%]'>
                     В более чем 200 городах предоставляют продукцию &quot;Фармтек&quot;
                  </p>
               </div>
               <NetworkCols lng={lng} />
            </div>
            <div className='w-full h-full mt-10 lg:flex-[0_1_50%]'>
               <Image src={map} alt='map' width={335} height={190} className='w-full h-full' />
            </div>
         </Container>
      </section>
   );
};

const NetworkCols: React.FC<Props> = ({ lng }) => {
   return (
      <div className='flex gap-[15px] overflow-x-auto network-cols mt-10 md:flex-col md:mt-[60px]'>
         {outlets.map(el => {
            return (
               <div
                  key={el.id}
                  className='bg-hero-gradient p-3 flex flex-col gap-1 w-[85%] flex-shrink-0 rounded-[16px] xs:w-[60%] lg:w-[67%]'>
                  <div className='font-semibold text-[20px] leading-[140%]'>{el.title}</div>
                  <div className='text-[12px] leading-[150%]'>{el.address}</div>
               </div>
            );
         })}
      </div>
   );
};

export default Network;
