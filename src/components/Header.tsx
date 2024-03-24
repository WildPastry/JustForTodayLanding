/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import Logo from './Logo/Logo';

const Header: React.FC = (): JSX.Element => {
  return (
    <section className='bg-blue-900 flex flex-row items-center justify-between px-7 h-12'>
      <Logo />
      <ul className='flex flex-row items-center'>
        <li>
          <Link to={'/support'}>Support</Link>
        </li>
        <li className='mx-3'>
          <Link to={'/privacy'}>Privacy</Link>
        </li>
        <li>
          <Link to={'/terms'}>Terms</Link>
        </li>
      </ul>
    </section>
  );
};

export default Header;
