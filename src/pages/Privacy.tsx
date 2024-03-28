/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import Rectangle from '../components/Rectangle';

const Privacy: React.FC = (): JSX.Element => {
  return (
    <section className='bg-darkBlue'>
      <div className='flex flex-col px-7 py-3 max-w-screen-xl m-auto'>
        <div className='flex flex-row items-center justify-between mb-8 relative'>
          <Rectangle colour='midBlue' width='345' />
          <h2 className='text-3xl z-10 relative'>Privacy statement</h2>
          <Link to={'/'}>
            <MdClose fontSize={35} />
          </Link>
        </div>
        <p className='w-1/2'>
          JustForToday respects your privacy and is committed to protecting your
          personal information. This Privacy Statement outlines how we collect,
          use, and safeguard your data when you use our mobile application.
        </p>
        <hr className='h-px my-10 bg-gray-200 border-0 dark:bg-gray-700' />
        <div className='w-1/2 m-auto'>
          <div className='mb-16'>
            <h2 className='text-3xl text-spotBlue mb-3'>Data Collection</h2>
            <p>
              We want to reassure our users that JustForToday does not collect
              any personal data or information from you while you use our mobile
              application. We do not gather any data about your device, usage
              patterns, or any other information that could potentially identify
              you.
            </p>
          </div>
          <div className='mb-16'>
            <h2 className='text-3xl text-spotBlue mb-3'>Data Usage</h2>
            <p>
              Since we do not collect any data, we do not use your personal
              information for any purpose.
            </p>
          </div>
          <div className='mb-16'>
            <h2 className='text-3xl text-spotBlue mb-3'>Data Sharing</h2>
            <p>
              We do not share any data, personal or otherwise, with third
              parties. Your information is not disclosed, sold, or rented to any
              external entities.
            </p>
          </div>
          <div className='mb-16'>
            <h2 className='text-3xl text-spotBlue mb-3'>Changes</h2>
            <p>
              We reserve the right to update this Privacy Statement from time to
              time. Any changes will be reflected on this page.
            </p>
          </div>
          <div className='mb-16'>
            <h2 className='text-3xl text-spotBlue mb-3'>Contact Us</h2>
            <p>
              If you have any questions or concerns regarding this Privacy
              Statement or the privacy practices of <b>JustForToday</b>, please
              contact us at{' '}
              <a href='mailto:justfortoday@mikeparker.co.nz'>
                justfortoday@mikeparker.co.nz
              </a>
              .
            </p>
            <p className='mt-3'>
              By using JustForToday, you signify your acceptance of this Privacy
              Statement. If you do not agree to this Privacy Statement, please
              refrain from using our mobile application. Thank you for trusting{' '}
              <b className='font-InterBold'>JustForToday</b> with your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
