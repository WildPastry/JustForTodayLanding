const Support: React.FC = (): JSX.Element => {
  return (
    <section className='w-700 m-auto'>
      <div className='mb-10'>
        <h2 className='text-2xl text-center'>Support</h2>
      </div>
      <p className='text-xl leading-8 text-center'>
        For any support or questions please contact the team
        <a className='ml-1' href='mailto:justfortoday@mikeparker.co.nz'>
          here
        </a>
        .
      </p>
    </section>
  );
};

export default Support;
