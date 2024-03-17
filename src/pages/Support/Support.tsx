import { Close } from 'react-ionicons';
import { Link } from 'react-router-dom';
import styles from './Support.module.css';

const Support: React.FC = (): JSX.Element => {
  return (
    <section>
      <Link to={'/'}>
        <Close color={'#ffffff'} title={'CLOSE'} height='50px' width='50px' />
      </Link>
      <div>
        <h2>Support</h2>
      </div>
      <h3>Support for JFT:</h3>
      <div className={styles.divider} />
      <p>Frequently asked questions:</p>
      <div className={styles.divider} />
      <p>Other questions:</p>
      <p>
        <a href='mailto:justfortoday@mikeparker.co.nz'>
          justfortoday@mikeparker.co.nz
        </a>
      </p>
    </section>
  );
};

export default Support;
