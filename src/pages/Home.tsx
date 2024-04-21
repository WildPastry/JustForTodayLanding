/* eslint-disable max-len */
import { FaArrowRight, FaStairs } from 'react-icons/fa6';
import Badges from '../components/Badges';
import Reflections from '../components/Reflections';
import Steps from '../components/Steps';
import Traditions from '../components/Traditions';

const Home: React.FC = (): JSX.Element => {
  return (
    <section>
      <div className='grid grid-cols-1 gap-16 items-center xtraLarge:grid-cols-3 large:grid-cols-3 medium:grid-cols-2 medium:items-start mobileSmall:gap-8'>
        <Reflections />
        <div className='relative'>
          <Steps />
          <FaStairs className='m-auto z-10 relative text-100 xtraLarge:text-300 large:text-250 medium:text-300 medium:absolute medium:top-44 medium:left-12 small:hidden xtraSmall:hidden mobileLarge:hidden mobileSmall:hidden' />
          <FaStairs className='absolute text-darkBlue text-100 left-4 top-44 xtraLarge:text-300 large:text-250 large:top-52 medium:text-300 medium:top-40 medium:left-10 small:hidden xtraSmall:hidden mobileLarge:hidden mobileSmall:hidden' />
        </div>
        <Traditions />
      </div>
      <div className='flex justify-center items-center mt-10'>
        <FaArrowRight className='text-spotBlue mr-10 mobileLarge:hidden mobileSmall:hidden' fontSize={60} />
        <Badges />
      </div>
    </section>
  );
};

export default Home;
