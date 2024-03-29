/* eslint-disable max-len */
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = (): JSX.Element => {
  return (
    <main className='h-full w-full flex flex-col'>
      <Header />
      <section className='flex flex-auto p-8 max-w-screen-xl items-center m-auto relative'>
        <Outlet />
      </section>
      <div className='shrink-0'>
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
