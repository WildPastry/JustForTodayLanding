/* eslint-disable max-len */
import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Header: React.FC = (): JSX.Element => {
  // Component settings
  const [showMenu, setShowMenu] = useState(false);

  // Hide or show mobile menu
  const toggleMenu = (): void => {
    setShowMenu(!showMenu);
  };

  const activeClass: 'is-active' | null = showMenu ? 'is-active' : null;

  return (
    <section className='bg-darkBlue'>
      <div className='flex flex-row items-center justify-between px-8 py-5 max-w-screen-xl m-auto'>
        {/* Logo */}
        <NavLink to={'/home'}>
          <Logo />
        </NavLink>
        {/* Desktop menu */}
        <ul className='flex flex-row items-center gap-4 min460max674:hidden max460:hidden'>
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
          className={`hamburger hamburger--elastic z-30 min674:hidden ${activeClass}`}
          type='button'
          onClick={() => toggleMenu()}>
          <span className='hamburger-box'>
            <span className='hamburger-inner' />
          </span>
        </button>
      </div>
      {/* Mobile menu */}
      {showMenu ? (
        <div className='absolute inset-0 h-full w-full z-20 bg-darkBlue flex flex-col items-center justify-center min674:hidden'>
          <ul className='flex flex-col items-center gap-10 text-2xl min460:text-3xl'>
            <li onClick={() => toggleMenu()}>
              <NavLink to={'/home'}>HOME</NavLink>
            </li>
            <li onClick={() => toggleMenu()}>
              <NavLink to={'/support'}>SUPPORT</NavLink>
            </li>
            <li onClick={() => toggleMenu()}>
              <NavLink to={'/privacy'}>PRIVACY</NavLink>
            </li>
            <li onClick={() => toggleMenu()}>
              <NavLink to={'/terms'}>TERMS</NavLink>
            </li>
          </ul>
        </div>
      ) : null}
    </section>
  );
};

export default Header;
