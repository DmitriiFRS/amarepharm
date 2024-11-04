import Container from '@/components/common/container/Container';
import NewsDesktop from './NewsDesktop';
import NewsMobile from './NewsMobile';

interface Props {
   lng: string;
}

export const news = [
   {
      id: 0,
      title: 'Какие разработки в приоритете у отечественных фармпроизводителей',
      date: '17.09.2024',
      href: '#',
   },
   {
      id: 1,
      title: '«Озон Фармацевтика» объявляет консолидированные финансовые и операционные результаты за 1П 2024 года',
      date: '17.09.2024',
      href: '#',
   },
   {
      id: 2,
      title: 'Группа «Озон Фармацевтика» завершила первый этап строительства уникального в России завода по производству лекарственных препаратов',
      date: '17.09.2024',
      href: '#',
   },
   {
      id: 3,
      title: 'Какие разработки в приоритете у отечественных фармпроизводителей',
      date: '17.09.2024',
      href: '#',
   },
   {
      id: 4,
      title: '«Озон Фармацевтика» объявляет консолидированные финансовые и операционные результаты за 1П 2024 года',
      date: '17.09.2024',
      href: '#',
   },
   {
      id: 5,
      title: 'Группа «Озон Фармацевтика» завершила первый этап строительства уникального в России завода по производству лекарственных препаратов',
      date: '17.09.2024',
      href: '#',
   },
];

const News: React.FC<Props> = ({ lng }) => {
   return (
      <section className='my-20'>
         <Container className='relative'>
            <h2 className='font-medium text-[42px] leading-143% tracking-tightest'>Новости</h2>
            <div className='mt-10 md:mt-[60px]'>
               <div className='hidden xl:block'>
                  <NewsDesktop lng={lng} />
               </div>
               <div className='xl:hidden'>
                  <NewsMobile lng={lng} />
               </div>
            </div>
         </Container>
      </section>
   );
};

export default News;
