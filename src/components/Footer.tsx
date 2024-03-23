import { Link } from 'react-router-dom';

const Footer: React.FC = (): JSX.Element => {
  // Get current date
  const currentDate: number = new Date().getFullYear();
  return (
    <section className='bg-blue-900'>
      <ul>
        <li>
          <Link to={'/support'}>Support</Link>
        </li>
        <li>
          <Link to={'/privacy'}>Privacy</Link>
        </li>
        <li>
          <Link to={'/terms'}>Terms</Link>
        </li>
      </ul>
      <p>
        <a href='mailto:justfortoday@mikeparker.co.nz'>
          justfortoday@mikeparker.co.nz
        </a>
      </p>
      <p>
        © {currentDate}
        <a
          className='ml-1'
          href='https://mikeparker.co.nz/'
          target='_blank'
          rel='noopener noreferrer'>
          Mike Parker
        </a>
      </p>
    </section>
  );
};

export default Footer;
