import Image from 'next/image';
import logo from '@/../public/svg/logo-mini-gray.svg';
import img1 from '@/../public/svg/mage_users.svg';
import img2 from '@/../public/svg/hand-stars.svg';
import Container from '@/components/common/container/Container';
import PrimaryButton from '@/components/common/primaryButton/PrimaryButton';

interface Props {
   lng: string;
}

const cards = [
   {
      id: 0,
      image: img1,
      title: 'Профессионализм',
      subtitle: 'Высококвалифицированный персонал',
   },
   {
      id: 1,
      image: img2,
      title: 'Гарантия качества',
      subtitle: 'Высокое качество нашей продукции',
   },
];

const WeAreAmare: React.FC<Props> = ({ lng }) => {
   return (
      <section className='mt-20'>
         <Container className='flex flex-col gap-10 md:grid md:grid-cols-[56%_1fr]'>
            <div className='flex flex-col gap-10'>
               <div className='text-[42px] font-medium max-w-[335px] lg:text-[56px]'>
                  <h2 className='text-end'>
                     <span className='font-normal'>Мы</span>AMARE
                  </h2>
                  <div className='flex gap-2'>
                     <span>PHARM</span>
                     <Image src={logo} alt='logo' width={40} height={40} className='lg:w-[56px] lg:h-[56px]' />
                  </div>
               </div>
               <div className='flex flex-col gap-4 lg:flex-row xl:grid xl:grid-cols-2'>
                  {cards.map(el => {
                     return (
                        <div key={el.id} className='p-5 border-neutral-stroke border-[1px] rounded-2xl'>
                           <Image src={el.image} alt='image' />
                           <div className='mt-4 font-semibold text-xl tracking-tightest leading-[140%]'>{el.title}</div>
                           <div className='mt-2 leading-143% text-neutral-gray'>{el.subtitle}</div>
                        </div>
                     );
                  })}
               </div>
            </div>
            <div className='flex flex-col gap-8 md:mt-[50px] lg:gap-[60px]'>
               <div className='leading-143% text-neutral-gray flex flex-col gap-4'>
                  <p>
                     Компания Amare Pharm основана в 2020 году. На сегодняшний день мы производим и успешно выводим на
                     международные рынки обширную линейку лекарственных препаратов. Компания Amare Pharm сотрудничает с
                     лучшими европейскими заводами, которые отвечают за качество и безопасность производства
                     лекарственных средств. Наши партнеры имеют сертификаты GMP, FDA, DSR.
                  </p>
                  <p>
                     Текущий штат компании Amare Pharm насчитывает более 200 сотрудников, мы активно привлекаем
                     квалифицированных специалистов и наращиваем сотрудничество с лучшими представителями отрасли
                  </p>
               </div>
               <PrimaryButton text='О нас' href='#' lng={lng} className='max-w-[125px]' />
            </div>
         </Container>
      </section>
   );
};

export default WeAreAmare;
