import Container from '@/components/common/container/Container';
import AchievmentsBrands from './AchievmentsBrands';
import AchievmentsGrid from './AchievmentsGrid';

interface Props {
   lng: string;
}

const Achievments: React.FC<Props> = ({ lng }) => {
   return (
      <section className='bg-primary-gradient py-20 mt-20'>
         <Container className='flex flex-col'>
            <AchievmentsGrid lng={lng} />
            <AchievmentsBrands lng={lng} />
         </Container>
      </section>
   );
};

export default Achievments;
