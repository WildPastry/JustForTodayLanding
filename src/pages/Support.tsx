/* eslint-disable max-len */
import Rectangle from '../components/Rectangle';

const Support: React.FC = (): JSX.Element => {
  return (
    <section>
      <div className='flex flex-col max-w-screen-xl m-auto'>
        <div className='mb-8 relative'>
          <Rectangle colour='midBlue' width='155' />
          <h2 className='text-3xl z-10 relative'>Support</h2>
        </div>
        <p>Frequently asked questions:</p>
        <hr className='h-px my-10 bg-gray-600 border-0' />
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
