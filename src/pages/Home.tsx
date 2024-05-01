/* eslint-disable max-len */
import { FaArrowRight, FaStairs } from 'react-icons/fa6';
import Badges from '../components/Badges';
import Reflections from '../components/Reflections';
import Steps from '../components/Steps';
import Traditions from '../components/Traditions';

const Home: React.FC = (): JSX.Element => {
  return (
    <section>
      <h1 className='text-center text-2xl mt-4 mb-8 min850:text-3xl min850:mb-12'>AA literature at the touch of a button</h1>
      <div className='grid grid-cols-1 gap-16 items-center min1120:grid-cols-3 min935max1120:grid-cols-3 min850max935:grid-cols-2 min850max935:items-start max460:gap-8'>
        <Reflections />
        <div className='relative'>
          <Steps />
          <FaStairs className='m-auto z-10 relative text-100 min1120:text-300 min935max1120:text-250 min850max935:text-300 min850max935:absolute min850max935:top-44 min850max935:left-12 min790max850:hidden min674max790:hidden min460max674:hidden max460:hidden' />
          <FaStairs className='absolute text-darkBlue text-100 left-4 top-44 min1120:text-300 min935max1120:text-250 min935max1120:top-52 min850max935:text-300 min850max935:top-40 min850max935:left-10 min790max850:hidden min674max790:hidden min460max674:hidden max460:hidden' />
        </div>
        <Traditions />
      </div>
      <div className='flex justify-center items-center mt-10'>
        <FaArrowRight className='text-spotBlue mr-10 min460max674:hidden max460:hidden' fontSize={60} />
        <Badges />
      </div>
    </section>
  );
};

export default Home;
