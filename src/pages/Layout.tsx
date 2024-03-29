import Footer from '../components/Footer';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = (): JSX.Element => {
  return (
    <main className='h-full w-full flex flex-col'>
      <Header />
      <section className='flex-auto p-8 max-w-screen-xl m-auto'>
        <Outlet />
      </section>
      <div className='shrink-0'>
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
