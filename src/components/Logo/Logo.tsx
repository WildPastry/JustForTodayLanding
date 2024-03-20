import jftLogo from '../../assets/img/just-for-today.svg';
import styles from './Logo.module.css';

const Logo: React.FC = (): JSX.Element => {
  return (
    <section>
      <div className={styles['logo-container']}>
        <img src={jftLogo} className={styles.logo} alt='JustForToday Logo' />
        <h1 className={styles['logo-text']}>
          Just for <span className={styles['logo-text-colour']}>today</span>
        </h1>
      </div>
    </section>
  );
};

export default Logo;
