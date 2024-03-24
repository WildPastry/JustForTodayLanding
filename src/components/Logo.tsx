/* eslint-disable max-len */
import jftLogo from '../assets/img/just-for-today.svg';

const Logo: React.FC = (): JSX.Element => {
  return (
    <div className='cursor-default flex flex-row justify-center items-center gap-4'>
      <img className='h-6' src={jftLogo} alt='JustForToday Logo' />
      <h1 className='text-3xl'>
        Just for <span className='text-spotBlue font-SpaceMonoBold'>today</span>
      </h1>
    </div>
  );
};

export default Logo;
