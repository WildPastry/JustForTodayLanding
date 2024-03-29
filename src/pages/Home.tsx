/* eslint-disable max-len */
import { FaArrowRight, FaStairs } from 'react-icons/fa6';
import Badges from '../components/Badges';
import Reflections from '../components/Reflections';
import Steps from '../components/Steps';
import Traditions from '../components/Traditions';

const Home: React.FC = (): JSX.Element => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-16 items-center'>
        <Reflections />
        <div className='relative'>
          <Steps />
          <FaStairs className='m-auto z-10 relative' fontSize={300} />
          <FaStairs
            className='absolute text-darkBlue left-4 top-32'
            fontSize={300}
          />
        </div>
        <Traditions />
      </div>
      <div className='flex justify-center items-center mt-8'>
        <FaArrowRight className='text-spotBlue mr-10' fontSize={60} />
        <Badges />
      </div>
    </section>
  );
};

export default Home;
