import jftLogo from '../../assets/img/just-for-today.svg';
import styles from './Logo.module.css';

const Logo: React.FC = (): JSX.Element => {
  return (
    <section className='bg-indigo-900'>
      <div className='flex flex-row justify-center items-center gap-4 p-7'>
        <img className='h-8' src={jftLogo} alt='JustForToday Logo' />
        <h1 className='text-3xl'>
          Just for <span className={styles['logo-text-colour']}>today</span>
        </h1>
      </div>
    </section>
  );
};

export default Logo;
