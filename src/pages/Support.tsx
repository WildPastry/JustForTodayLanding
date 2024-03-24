import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';

const Support: React.FC = (): JSX.Element => {
  return (
    <section className='h-full w-full flex flex-col px-7 py-3'>
      <div className='flex flex-row items-center justify-between mb-10'>
        <h2 className='text-3xl'>SUPPORT</h2>
        <Link to={'/'}>
          <MdClose fontSize={50} />
        </Link>
      </div>
      <h3>Support for JFT:</h3>
      <hr className='h-px my-4 bg-gray-200 border-0 dark:bg-gray-700' />
      <p>Frequently asked questions:</p>
      <hr className='h-px my-4 bg-gray-200 border-0 dark:bg-gray-700' />
      <p>Other questions:</p>
      <p>
        <a href='mailto:justfortoday@mikeparker.co.nz'>
          justfortoday@mikeparker.co.nz
        </a>
      </p>
    </section>
  );
};

export default Support;
