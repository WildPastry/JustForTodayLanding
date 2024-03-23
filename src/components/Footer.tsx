import { Link } from 'react-router-dom';

const Footer: React.FC = (): JSX.Element => {
  // Get current date
  const currentDate: number = new Date().getFullYear();
  return (
    <section className='bg-blue-900 flex flex-row justify-between'>
      <ul className='flex flex-row items-center'>
        <li className='mr-3'>
          <Link to={'/support'}>Support</Link>
        </li>
        <li className='mr-3'>
          <Link to={'/privacy'}>Privacy</Link>
        </li>
        <li className='mr-3'>
          <Link to={'/terms'}>Terms</Link>
        </li>
      </ul>
      <div>
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
      </div>
    </section>
  );
};

export default Footer;
