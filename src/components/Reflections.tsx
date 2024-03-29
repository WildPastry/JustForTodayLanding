import Rectangle from './Rectangle';

const Reflections: React.FC = (): JSX.Element => {
  return (
    <section>
      {/* <Rectangle colour='midBlue' width='240' /> */}
      <h1 className='text-3xl mb-5'>Reflections</h1>
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
