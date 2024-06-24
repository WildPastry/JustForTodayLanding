import React from 'react';
import Rectangle from './Rectangle';
import { useMediaQuery } from '../utils/useMediaQuery';

const Traditions: React.FC = (): JSX.Element => {
  const defaultScreen = useMediaQuery('(min-width: 460px)');

  const getHeight = (): string => {
    return defaultScreen ? '20' : '10';
  };

  const getWidth = (): string => {
    return defaultScreen ? '186' : '150';
  };

  return (
    <section className='relative'>
      <Rectangle colour='midBlue' height={getHeight()} width={getWidth()} />
      <h1 className='text-3xl mb-5 z-10 relative max460:text-2xl'>
        Traditions
      </h1>
      <p className='text-md'>
        Providing guidelines for relationships between the groups, members, the
        global Fellowship and society at large. Questions of finance, public
        relations, donations and purpose are addressed in the Traditions.
      </p>
    </section>
  );
};

export default Traditions;
