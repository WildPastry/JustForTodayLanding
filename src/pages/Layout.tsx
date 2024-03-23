import Badges from '../components/Badges/Badges';
import Footer from '../components/Footer';
import Logo from '../components/Logo/Logo';
import Reflections from '../components/Reflections';
import Steps from '../components/Steps';
import Traditions from '../components/Traditions';

const Layout: React.FC = (): JSX.Element => {
  return (
    <main className='h-full w-full flex flex-col p-7'>
      <div className='flex-auto bg-purple-900'>
        <div className='flex flex-row w-full justify-between'>
          <div className='w-1/3'>
            <Reflections />
          </div>
          <div className='w-1/3'>
            <Steps />
          </div>
        </div>
        <div>
          <Logo />
        </div>
        <div className='flex flex-row w-full justify-between'>
          <div className='w-1/3'>
            <Traditions />
          </div>
          <div className='w-1/3'>
            <Badges />
          </div>
        </div>
      </div>
      <div className='shrink-0'>
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
