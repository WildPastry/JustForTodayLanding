import Rectangle from './Rectangle';

const Traditions: React.FC = (): JSX.Element => {
  return (
    <section className='relative'>
      <Rectangle colour='darkBlue' width='220' />
      <h2 className='text-3xl mb-3 z-10 relative'>Traditions</h2>
      <p>
        Providing guidelines for relationships between the groups, members, the
        global Fellowship and society at large. Questions of finance, public
        relations, donations and purpose are addressed in the Traditions.
      </p>
    </section>
  );
};

export default Traditions;
