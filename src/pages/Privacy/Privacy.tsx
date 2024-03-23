import { Close } from 'react-ionicons';
import { Link } from 'react-router-dom';
import styles from './Privacy.module.css';

const Privacy: React.FC = (): JSX.Element => {
  return (
    <section className='h-full w-full flex flex-col p-7'>
      <Link to={'/'}>
        <Close color={'#ffffff'} title={'CLOSE'} height='50px' width='50px' />
      </Link>
      <div>
        <h2>PRIVACY STATEMENT</h2>
      </div>
      <p>
        Privacy Statement <b>JustForToday</b> respects your privacy and is
        committed to protecting your personal information. This Privacy
        Statement outlines how we collect, use, and safeguard your data when you
        use our mobile application.
        <div className={styles.divider} />
        <h3>1</h3>Data Collection: We want to reassure our users that
        <b>JustForToday</b> does not collect any personal data or information
        from you while you use our mobile application. We do not gather any data
        about your device, usage patterns, or any other information that could
        potentially identify you.
        <div className={styles.divider} />
        <h3>2</h3>Data Usage: Since we do not collect any data, we do not use
        your personal information for any purpose.
        <div className={styles.divider} />
        <h3>3</h3>Data Sharing: We do not share any data, personal or otherwise,
        with third parties. Your information is not disclosed, sold, or rented
        to any external entities.
        <div className={styles.divider} />
        <h3>5</h3>Changes to this Privacy Statement: We reserve the right to
        update this Privacy Statement from time to time. Any changes will be
        reflected on this page.
        <div className={styles.divider} />
        <h3>6</h3>Contact Us: If you have any questions or concerns regarding
        this Privacy Statement or the privacy practices of <b>JustForToday</b>,
        please contact us at{' '}
        <a href='mailto:justfortoday@mikeparker.co.nz'>
          justfortoday@mikeparker.co.nz
        </a>
        . By using <b>JustForToday</b>, you signify your acceptance of this
        Privacy Statement. If you do not agree to this Privacy Statement, please
        refrain from using our mobile application. Thank you for trusting{' '}
        <b>JustForToday</b> with your privacy.
      </p>
    </section>
  );
};

export default Privacy;
