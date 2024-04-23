import { HiWrenchScrewdriver } from 'react-icons/hi2';

const Support: React.FC = (): JSX.Element => {
  return (
    <section className='w-700 m-auto max783:w-auto'>
      <div className='mb-10'>
        <h2 className='text-2xl text-center'>Support</h2>
      </div>
      <HiWrenchScrewdriver className='text-gray-900 m-auto mb-10 mobileSmall:text-200 min460:text-300' />
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
