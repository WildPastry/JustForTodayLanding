/* eslint-disable max-len */
import { FaArrowRight, FaStairs } from 'react-icons/fa6';
import Badges from '../components/Badges';
import Reflections from '../components/Reflections';
import Steps from '../components/Steps';
import Traditions from '../components/Traditions';

const Home: React.FC = (): JSX.Element => {
  return (
    <section className='flex-auto p-7 max-w-screen-xl m-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-16 items-center mt-16'>
        <Reflections />
        <div>
          <Steps />
          <FaStairs className='m-auto' fontSize={300} />
        </div>
        <Traditions />
      </div>
      <div className='flex justify-center items-center mt-5'>
        <FaArrowRight className='text-spotBlue mr-10' fontSize={60} />
        <Badges />
      </div>
    </section>
  );
};

export default Home;
