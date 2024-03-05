import Footer from '../components/Footer';
import Reflections from '../components/Reflections';
import Steps from '../components/Steps';
import Traditions from '../components/Traditions';
import jftLogo from '../assets/just-for-today.svg';

const Layout: React.FC = (): JSX.Element => {
  return (
    <section>
      <div className='logo-container'>
        <img src={jftLogo} className='logo' alt='JustForToday Logo' />
        <h1 className='logo-text'>
          Just for <span className='logo-text-colour'>today</span>
        </h1>
      </div>
      <Reflections />
      <Steps />
      <Traditions />
      <Footer />
    </section>
  );
};

export default Layout;
