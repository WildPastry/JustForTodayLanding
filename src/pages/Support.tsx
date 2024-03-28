/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import Rectangle from '../components/Rectangle';

const Support: React.FC = (): JSX.Element => {
  return (
    <section>
      <div className='flex flex-col max-w-screen-xl m-auto'>
        <div className='flex flex-row items-center justify-between mb-16 relative'>
          <Rectangle colour='midBlue' width='155' />
          <h2 className='text-3xl z-10 relative'>Support</h2>
          <Link to={'/'}>
            <MdClose fontSize={35} />
          </Link>
        </div>
        <p>Frequently asked questions:</p>
        <hr className='h-px my-4 bg-gray-200 border-0 dark:bg-gray-700' />
        <p>Other questions:</p>
        <p>
          <a href='mailto:justfortoday@mikeparker.co.nz'>
            justfortoday@mikeparker.co.nz
          </a>
        </p>
      </div>
    </section>
  );
};

export default Support;
