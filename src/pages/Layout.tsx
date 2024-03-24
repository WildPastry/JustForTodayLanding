import Badges from '../components/Badges/Badges';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { MdStairs } from 'react-icons/md';
import Reflections from '../components/Reflections';
import Steps from '../components/Steps';
import Traditions from '../components/Traditions';

const Layout: React.FC = (): JSX.Element => {
  return (
    <main className='h-full w-full flex flex-col'>
      <Header />
      {/* Flex content */}
      <section className='flex-auto bg-purple-900 p-7'>
        {/* Top section */}
        <div className='flex flex-row w-full justify-between'>
          <div>
            <Reflections />
          </div>
          <div>
            <Steps />
            <MdStairs fontSize={200} />
          </div>
        </div>
        {/* Bottom section */}
        <div className='flex flex-row w-full justify-between'>
          <div>
            <Traditions />
          </div>
          <div>
            <Badges />
          </div>
        </div>
      </section>
      {/* Footer */}
      <div className='shrink-0'>
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
