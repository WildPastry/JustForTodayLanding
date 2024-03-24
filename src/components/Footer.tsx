/* eslint-disable max-len */
import { Link } from 'react-router-dom';

const Footer: React.FC = (): JSX.Element => {
  // Get current date
  const currentDate: number = new Date().getFullYear();
  return (
    <section className='bg-blue-900 flex flex-row items-center justify-between px-7 h-12'>
      <p>link</p>
      <div>
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
