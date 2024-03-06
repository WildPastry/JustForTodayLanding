import { Close } from 'react-ionicons';
import { Link } from 'react-router-dom';
import styles from './Privacy.module.css';

const Privacy: React.FC = (): JSX.Element => {
  return (
    <section>
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
        your personal information for any purpose. Your privacy is our utmost
        priority, and we adhere to strict guidelines to ensure that your data
        remains secure.
        <div className={styles.divider} />
        <h3>3</h3>Data Sharing: We do not share any data, personal or otherwise,
        with third parties. Your information is not disclosed, sold, or rented
        to any external entities.
        <div className={styles.divider} />
        <h3>4</h3>Children's Privacy: Our mobile application is not directed
        towards children under the age of 13. We do not knowingly collect any
        personal information from children. If you are a parent or guardian and
        believe that your child has provided us with personal information,
        please contact us immediately, and we will take appropriate action to
        remove such information from our records.
        <div className={styles.divider} />
        <h3>5</h3>Changes to this Privacy Statement: We reserve the right to
        update this Privacy Statement from time to time. Any changes will be
        reflected on this page, and we encourage you to review this Privacy
        Statement periodically for any updates or modifications.
        <div className={styles.divider} />
        <h3>6</h3>Contact Us: If you have any questions or concerns regarding
        this Privacy Statement or the privacy practices of <b>JustForToday</b>,
        please contact us at <a>justfortoday@mikeparker.co.nz</a>. By using{' '}
        <b>JustForToday</b>, you signify your acceptance of this Privacy
        Statement. If you do not agree to this Privacy Statement, please refrain
        from using our mobile application. Thank you for trusting{' '}
        <b>JustForToday</b> with your privacy.
      </p>
    </section>
  );
};

export default Privacy;
