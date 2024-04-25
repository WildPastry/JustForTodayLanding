import React from 'react';
import Rectangle from './Rectangle';
import { useScreenWidth } from '../utils/useScreenWidth';

const Traditions: React.FC = (): JSX.Element => {
  const screenWidth = useScreenWidth(400); // Set your desired breakpoint here

  return (
    <section className='relative'>
      <Rectangle colour='midBlue' width={screenWidth.toString()} />
      <h1 className='text-3xl mb-5 z-10 relative mobileSmall:text-2xl'>Traditions</h1>
      <p className='text-md'>
        Providing guidelines for relationships between the groups, members, the
        global Fellowship and society at large. Questions of finance, public
        relations, donations and purpose are addressed in the Traditions.
      </p>
    </section>
  );
};

export default Traditions;
