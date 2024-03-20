import Footer from '../../components/Footer';
import Reflections from '../../components/Reflections';
import Steps from '../../components/Steps';
import Traditions from '../../components/Traditions';
import appleStoreBadge from './../../assets/img/apple.svg';
import googeStoreBadge from './../../assets/img/google.svg';
import jftLogo from '../../assets/img/just-for-today.svg';
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
      <div className={styles['store-badge']}>
        <a
          className={styles['store-badge']}
          href='https://www.apple.com/nz/app-store/'
          target='_blank'
          rel='noopener noreferrer'>
          <img src={appleStoreBadge} alt='Apple Store Badge' />
        </a>
      </div>
      <div className={styles['store-badge']}>
        <a
          className={styles['store-badge']}
          href='https://play.google.com/store/apps'
          target='_blank'
          rel='noopener noreferrer'>
          <img src={googeStoreBadge} alt='Googe Store Badge' />
        </a>
      </div>
      <Reflections />
      <Steps />
      <Traditions />
      <Footer />
    </main>
  );
};

export default Layout;
