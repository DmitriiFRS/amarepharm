import Container from '@/components/common/container/Container';
import VideoReviewsSwiper from './VideoReviewsSwiper';
import VideoReviewsFlex from './VideoReviewsFlex';
interface Props {
   lng: string;
}

export const videos = [
   {
      id: 0,
      href: 'https://www.youtube.com/shorts/ztON_WPfzDQ',
   },
   {
      id: 1,
      href: 'https://www.youtube.com/shorts/ztON_WPfzDQ',
   },
   {
      id: 2,
      href: 'https://www.youtube.com/shorts/ztON_WPfzDQ',
   },
   {
      id: 3,
      href: 'https://www.youtube.com/shorts/ztON_WPfzDQ',
   },
   {
      id: 4,
      href: 'https://www.youtube.com/shorts/ztON_WPfzDQ',
   },
   {
      id: 5,
      href: 'https://www.youtube.com/shorts/ztON_WPfzDQ',
   },
];

const VideoReviews: React.FC<Props> = ({ lng }) => {
   return (
      <section className='mt-10'>
         <Container className='relative'>
            <h2 className='font-semibold text-[42px] leading-133% tracking-tightest'>Видео обзоры</h2>
            <div className='md:hidden'>
               <VideoReviewsSwiper lng={lng} />
            </div>
            <div className='hidden md:block'>
               <VideoReviewsFlex lng={lng} />
            </div>
         </Container>
      </section>
   );
};

export default VideoReviews;
