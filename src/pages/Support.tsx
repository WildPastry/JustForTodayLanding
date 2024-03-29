const Support: React.FC = (): JSX.Element => {
  return (
    <section className='flex flex-col'>
      <div className='my-8 m-auto'>
        <h2 className='text-2xl'>FAQ</h2>
      </div>
      <p className='w-1/2 m-auto text-xl leading-8'>
        For any support or questions please contact the team
        <a className='ml-1' href='mailto:justfortoday@mikeparker.co.nz'>
          here
        </a>
        .
      </p>
      <hr className='h-px my-10 bg-gray-600 border-0 w-1/2 m-auto' />
      {/* <div className='w-1/2 m-auto'>
        <div className='mb-10'>
          <h3 className='text-lg text-spotBlue mb-2'>Data Collection</h3>
          <p className='text-md'>
            We want to reassure our users that JustForToday does not collect any
            personal data or information from you while you use our mobile
            application. We do not gather any data about your device, usage
            patterns, or any other information that could potentially identify
            you.
          </p>
        </div>
      </div> */}
    </section>
  );
};

export default Support;
