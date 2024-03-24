/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = (): JSX.Element => {
  return (
    <section className='bg-darkBlue'>
      <div className='flex flex-row items-center justify-between px-7 py-3 max-w-screen-xl m-auto'>
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
      </div>
    </section>
  );
};

export default Header;
