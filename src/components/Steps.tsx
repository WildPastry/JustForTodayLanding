/* eslint-disable max-len */
import Rectangle from './Rectangle';
import { useMediaQuery } from '../utils/useMediaQuery';

const Steps: React.FC = (): JSX.Element => {
  const defaultScreen = useMediaQuery('(min-width: 460px)');

  const getHeight = (): string => {
    return defaultScreen ? '20' : '10';
  };

  const getWidth = (): string => {
    return defaultScreen ? '93' : '76';
  };

  return (
    <section className='relative mb-10 min790max850:mb-0 min674max790:mb-0 min460max674:mb-0 max460:mb-0'>
      <Rectangle colour='midBlue' height={getHeight()} width={getWidth()} />
      <h1 className='text-3xl mb-5 z-10 relative max460:text-2xl'>Steps</h1>
      <p className='text-md'>
        A set of spiritual principles. When practiced as a way of life, they can
        expel the obsession to drink and enable the sufferer to recover from
        alcoholism.
      </p>
    </section>
  );
};

export default Steps;
