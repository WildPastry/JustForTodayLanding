/* eslint-disable max-len */
import Logo from './Logo';
import { NavLink } from 'react-router-dom';

const Header: React.FC = (): JSX.Element => {
  return (
    <section className='bg-darkBlue'>
      <div className='flex flex-row items-center justify-between px-7 py-3 max-w-screen-xl m-auto'>
        <NavLink to={'/home'}>
          <Logo />
        </NavLink>
        <ul className='flex flex-row items-center gap-4'>
          <li>
            <NavLink to={'/home'}>HOME</NavLink>
          </li>
          <li>
            <NavLink to={'/support'}>SUPPORT</NavLink>
          </li>
          <li>
            <NavLink to={'/privacy'}>PRIVACY</NavLink>
          </li>
          <li>
            <NavLink to={'/terms'}>TERMS</NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
