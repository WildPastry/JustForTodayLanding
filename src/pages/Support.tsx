const Support: React.FC = (): JSX.Element => {
  return (
    <section className='w-700 m-auto'>
      <div className='my-10'>
        <h2 className='text-2xl text-center'>Support</h2>
      </div>
      <hr className='h-px my-10 bg-gray-600 border-0' />
      <div className='mb-10'>
        <h3 className='text-lg text-spotBlue mb-2'>Contact</h3>
        <p className='text-xl leading-8 mb-2'>
          For any support or questions please contact the team
          <a className='ml-1' href='mailto:justfortoday@mikeparker.co.nz'>
            here
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Support;
