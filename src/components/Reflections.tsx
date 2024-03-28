import Rectangle from './Rectangle';

const Reflections: React.FC = (): JSX.Element => {
  return (
    <section className='relative'>
      <Rectangle colour='midBlue' width='240' />
      <h2 className='text-3xl mb-5 z-10 relative'>Reflections</h2>
      <p>
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
