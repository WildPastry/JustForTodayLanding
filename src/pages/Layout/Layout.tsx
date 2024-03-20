import Badges from '../../components/Badges/Badges';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo/Logo';
import Reflections from '../../components/Reflections';
import Steps from '../../components/Steps';
import Traditions from '../../components/Traditions';
import styles from './Layout.module.css';

const Layout: React.FC = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <Reflections />
      <Steps />
      <Logo />
      <Traditions />
      <Footer />
      <Badges />
    </main>
  );
};

export default Layout;
