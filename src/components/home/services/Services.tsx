import Container from '@/components/common/container/Container';
import ServicesTabs from './ServicesTabs';
import ServicesAccordion from './ServicesAccordion';
import image1 from '@/../public/images/products/Livarti_kids.webp';

interface Props {
   lng: string;
}

export const servicesItems = [
   {
      id: 0,
      title: 'Инфекционные заболевания',
      inner: {
         description:
            'Компания Amare Pharm основана в 2020 году. На сегодняшний день мы производим и успешно выводим на международные рынки обширную линейку лекарственных препаратов. ',
         image: image1,
         title: 'Ливарти Кидс',
         subtitle: 'Мы заботимся о  вас и понимаем абсолютную ценность здоровья.',
         href: '#',
      },
   },
   {
      id: 1,
      title: 'Гастроскопия',
      inner: {
         description:
            'Компания Amare Pharm основана в 2020 году. На сегодняшний день мы производим и успешно выводим на международные рынки обширную линейку лекарственных препаратов. ',
         image: image1,
         title: 'Ливарти Кидс',
         subtitle: 'Мы заботимся о  вас и понимаем абсолютную ценность здоровья.',
         href: '#',
      },
   },
   {
      id: 2,
      title: 'Гастроскопия',
      inner: {
         description:
            'Компания Amare Pharm основана в 2020 году. На сегодняшний день мы производим и успешно выводим на международные рынки обширную линейку лекарственных препаратов. ',
         image: image1,
         title: 'Ливарти Кидс',
         subtitle: 'Мы заботимся о  вас и понимаем абсолютную ценность здоровья.',
         href: '#',
      },
   },
   {
      id: 3,
      title: 'Гастроскопия',
      inner: {
         description:
            'Компания Amare Pharm основана в 2020 году. На сегодняшний день мы производим и успешно выводим на международные рынки обширную линейку лекарственных препаратов. ',
         image: image1,
         title: 'Ливарти Кидс',
         subtitle: 'Мы заботимся о  вас и понимаем абсолютную ценность здоровья.',
         href: '#',
      },
   },
   {
      id: 4,
      title: 'Гастроскопия',
      inner: {
         description:
            'Компания Amare Pharm основана в 2020 году. На сегодняшний день мы производим и успешно выводим на международные рынки обширную линейку лекарственных препаратов. ',
         image: image1,
         title: 'Ливарти Кидс',
         subtitle: 'Мы заботимся о  вас и понимаем абсолютную ценность здоровья.',
         href: '#',
      },
   },
   {
      id: 5,
      title: 'Гастроскопия',
      inner: {
         description:
            'Компания Amare Pharm основана в 2020 году. На сегодняшний день мы производим и успешно выводим на международные рынки обширную линейку лекарственных препаратов. ',
         image: image1,
         title: 'Ливарти Кидс',
         subtitle: 'Мы заботимся о  вас и понимаем абсолютную ценность здоровья.',
         href: '#',
      },
   },
   {
      id: 6,
      title: 'Гастроскопия',
      inner: {
         description:
            'Компания Amare Pharm основана в 2020 году. На сегодняшний день мы производим и успешно выводим на международные рынки обширную линейку лекарственных препаратов. ',
         image: image1,
         title: 'Ливарти Кидс',
         subtitle: 'Мы заботимся о  вас и понимаем абсолютную ценность здоровья.',
         href: '#',
      },
   },
   {
      id: 7,
      title: 'Гастроскопия',
      inner: {
         description:
            'Компания Amare Pharm основана в 2020 году. На сегодняшний день мы производим и успешно выводим на международные рынки обширную линейку лекарственных препаратов. ',
         image: image1,
         title: 'Ливарти Кидс',
         subtitle: 'Мы заботимся о  вас и понимаем абсолютную ценность здоровья.',
         href: '#',
      },
   },
   {
      id: 8,
      title: 'Гастроскопия',
      inner: {
         description:
            'Компания Amare Pharm основана в 2020 году. На сегодняшний день мы производим и успешно выводим на международные рынки обширную линейку лекарственных препаратов. ',
         image: image1,
         title: 'Ливарти Кидс',
         subtitle: 'Мы заботимся о  вас и понимаем абсолютную ценность здоровья.',
         href: '#',
      },
   },
];

const Services: React.FC<Props> = ({ lng }) => {
   return (
      <section className='mt-20'>
         <Container className='flex flex-col gap-10'>
            <div className='flex flex-col gap-6 text-neutral-black md:flex-row md:justify-between'>
               <h2 className='font-medium text-[42px] leading-[119%] tracking-tightest md:text-[56px] md:leading-[114%]'>
                  Направления
               </h2>
               <p className='text-neutral-gray leading-143% md:max-w-[350px] lg:max-w-[420px]'>
                  Компания Amare Pharm основана в 2020 году. На сегодняшний день мы производим и успешно выводим на
                  международные рынки обширную линейку лекарственных препаратов.{' '}
               </p>
            </div>
            <ServicesTabs lng={lng} />
            <ServicesAccordion lng={lng} />
         </Container>
      </section>
   );
};

export default Services;
