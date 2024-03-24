import appleStoreBadge from './../../assets/img/apple.svg';
import googeStoreBadge from './../../assets/img/google.svg';
import styles from './Badges.module.css';

const Badges: React.FC = (): JSX.Element => {
  return (
    <section>
      <div className={`${styles['store-badge']} me-5`}>
        <a
          className={styles['store-badge']}
          href='https://www.apple.com/nz/app-store/'
          target='_blank'
          rel='noopener noreferrer'>
          <img src={appleStoreBadge} alt='Apple Store Badge' />
        </a>
      </div>
      <div className={`${styles['store-badge']} me-5`}>
        <a
          className={styles['store-badge']}
          href='https://play.google.com/store/apps'
          target='_blank'
          rel='noopener noreferrer'>
          <img src={googeStoreBadge} alt='Googe Store Badge' />
        </a>
      </div>
    </section>
  );
};

export default Badges;
