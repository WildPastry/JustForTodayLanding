/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = (): JSX.Element => {
  return (
    <section className='bg-darkBlue'>
      <div className='flex flex-row items-center justify-between px-7 py-3 max-w-screen-xl m-auto'>
        <Link to={'/home'}>
          <Logo />
        </Link>
        <ul className='flex flex-row items-center gap-4'>
          <li>
            <Link to={'/home'}>HOME</Link>
          </li>
          <li>
            <Link to={'/support'}>SUPPORT</Link>
          </li>
          <li>
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
