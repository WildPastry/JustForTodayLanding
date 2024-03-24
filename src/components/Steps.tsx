import Rectangle from './Rectangle';

const Steps: React.FC = (): JSX.Element => {
  return (
    <section className='relative'>
      <Rectangle colour='midBlue' width='64' />
      <h2 className='text-3xl mb-3 z-10 relative'>Steps</h2>
      <p>
        A set of spiritual principles. When practiced as a way of life, they can
        expel the obsession to drink and enable the sufferer to recover from
        alcoholism.
      </p>
    </section>
  );
};

export default Steps;
