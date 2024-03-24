/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = (): JSX.Element => {
  return (
    <section className='flex flex-row items-center justify-between px-7 py-3'>
      <Logo />
      <ul className='flex flex-row items-center'>
        <li>
          <Link to={'/support'}>SUPPORT</Link>
        </li>
        <li className='mx-3'>
          <Link to={'/privacy'}>PRIVACY</Link>
        </li>
        <li>
          <Link to={'/terms'}>TERMS</Link>
        </li>
      </ul>
    </section>
  );
};

export default Header;
