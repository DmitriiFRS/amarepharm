import Achievments from '@/components/home/achievments/Achievments';
import Advantages from '@/components/home/advantages/Advantages';
import HeroBlock from '@/components/home/heroBlock/HeroBlock';
import Network from '@/components/home/network/Network';
import News from '@/components/home/news/News';
import OurProducts from '@/components/home/ourProducts/OurProducts';
import Services from '@/components/home/services/Services';
import VideoReviews from '@/components/home/videoReviews/VideoReviews';
import WeAreAmare from '@/components/home/weAreAmare/WeAreAmare';

interface Props {
   params: { lng: string };
}

export default function Home({ params: { lng } }: Props) {
   return (
      <main>
         <HeroBlock lng={lng} />
         <WeAreAmare lng={lng} />
         <Achievments lng={lng} />
         <Services lng={lng} />
         <OurProducts lng={lng} />
         <VideoReviews lng={lng} />
         <Advantages lng={lng} />
         <Network lng={lng} />
         <News lng={lng} />
      </main>
   );
}
