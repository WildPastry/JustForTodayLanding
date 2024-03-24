/* eslint-disable max-len */
import Badges from '../components/Badges';
import { FaStairs } from 'react-icons/fa6';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Reflections from '../components/Reflections';
import Steps from '../components/Steps';
import Traditions from '../components/Traditions';

const Layout: React.FC = (): JSX.Element => {
  return (
    <main className='h-full w-full flex flex-col'>
      <Header />
      <section className='flex-auto p-7 max-w-screen-xl m-auto'>
        <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-16 items-center'>
          <Reflections />
          <div>
            <Steps />
            <FaStairs className='m-auto' fontSize={250} />
          </div>
          <Traditions />
        </div>
      </section>
      <div className='shrink-0'>
        <Badges />
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
