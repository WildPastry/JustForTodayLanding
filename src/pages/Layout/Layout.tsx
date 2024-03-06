import Footer from '../../components/Footer';
import Reflections from '../../components/Reflections';
import Steps from '../../components/Steps';
import Traditions from '../../components/Traditions';
import jftLogo from '../../assets/just-for-today.svg';
import styles from './Layout.module.css';

const Layout: React.FC = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <div className={styles['logo-container']}>
        <img src={jftLogo} className={styles.logo} alt='JustForToday Logo' />
        <h1 className={styles['logo-text']}>
          Just for <span className={styles['logo-text-colour']}>today</span>
        </h1>
      </div>
      <Reflections />
      <Steps />
      <Traditions />
      <Footer />
    </main>
  );
};

export default Layout;
