import Rectangle from './Rectangle';

const Traditions: React.FC = (): JSX.Element => {
  return (
    <section>
      {/* <Rectangle colour='darkBlue' width='220' /> */}
      <h1 className='text-3xl mb-5'>Traditions</h1>
      <p className='text-md'>
        Providing guidelines for relationships between the groups, members, the
        global Fellowship and society at large. Questions of finance, public
        relations, donations and purpose are addressed in the Traditions.
      </p>
    </section>
  );
};

export default Traditions;
