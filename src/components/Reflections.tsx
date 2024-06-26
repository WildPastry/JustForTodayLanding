import Rectangle from './Rectangle';
import { useMediaQuery } from '../utils/useMediaQuery';

const Reflections: React.FC = (): JSX.Element => {
  const defaultScreen = useMediaQuery('(min-width: 460px)');

  const getHeight = (): string => {
    return defaultScreen ? '20' : '10';
  };

  const getWidth = (): string => {
    return defaultScreen ? '204' : '166';
  };

  return (
    <section className='relative'>
      <Rectangle colour='midBlue' height={getHeight()} width={getWidth()} />
      <h1 className='text-3xl mb-5 z-10 relative max460:text-2xl'>
        Reflections
      </h1>
      <p className='text-md'>
        Drawing from the principles of the Twelve Steps and Twelve Traditions of
        Alcoholics Anonymous, daily reflections delve into themes such as
        acceptance, gratitude, and personal growth. Providing guidance,
        encouragement, wisdom, spiritual contemplation, and mindfulness, they
        assist individuals in staying sober, one day at a time.
      </p>
    </section>
  );
};

export default Reflections;
