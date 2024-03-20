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
      <div className={`grid grid-cols-6 gap-4`}>
        <div className={`${styles.bg} col-start-2 col-span-4`}>01</div>
        <div className={`${styles.bg} col-start-1 col-end-3`}>02</div>
        <div className={`${styles.bg} col-end-7 col-span-2`}>03</div>
        <div className={`${styles.bg} col-start-1 col-end-7`}>04</div>
      </div>
      <Traditions />
      <Footer />
      <Badges />
    </main>
  );
};

export default Layout;
