import Badges from '../../components/Badges/Badges';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo/Logo';
import Reflections from '../../components/Reflections';
import Steps from '../../components/Steps';
import Traditions from '../../components/Traditions';
import styles from './Layout.module.css';

const Layout: React.FC = (): JSX.Element => {
  return (
    <main className={`${styles.main} p-7`}>
      <div className={`${styles.bg}`}>
        <Reflections />
      </div>
      <div className={`${styles.bg}`}>
        <Steps />
      </div>
      <div className={`${styles.bg}`}>
        <Logo />
      </div>
      <div className={`${styles.bg}`}>
        <Traditions />
      </div>
      <Badges />
      <Footer />
    </main>
  );
};

export default Layout;
