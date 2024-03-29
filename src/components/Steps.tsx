import Rectangle from './Rectangle';

const Steps: React.FC = (): JSX.Element => {
  return (
    <section className='relative mb-10'>
      <Rectangle colour='midBlue' width='93' />
      <h1 className='text-3xl mb-5 z-10 relative'>Steps</h1>
      <p className='text-md'>
        A set of spiritual principles. When practiced as a way of life, they can
        expel the obsession to drink and enable the sufferer to recover from
        alcoholism.
      </p>
    </section>
  );
};

export default Steps;
