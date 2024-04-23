/* eslint-disable max-len */
import { useState } from 'react';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';

const Header: React.FC = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);

  // Hide or show mobile menu
  const toggleMenu = (): void => {
    setShowMenu(!showMenu);
  };

  const activeClass = showMenu ? 'is-active' : null;

  return (
    <section className='bg-darkBlue'>
      <div className='flex flex-row items-center justify-between px-8 py-5 max-w-screen-xl m-auto'>
        <NavLink to={'/home'}>
          <Logo />
        </NavLink>
        <ul className='flex flex-row items-center gap-4 mobileLarge:hidden mobileSmall:hidden'>
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
        <button
          className={`hamburger hamburger--elastic min674:hidden ${activeClass}`}
          type='button'
          onClick={() => toggleMenu()}>
          <span className='hamburger-box'>
            <span className='hamburger-inner'></span>
          </span>
        </button>
      </div>
    </section>
  );
};

export default Header;
