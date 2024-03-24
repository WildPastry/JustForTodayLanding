/* eslint-disable max-len */
const Footer: React.FC = (): JSX.Element => {
  // Get current date
  const currentDate: number = new Date().getFullYear();
  return (
    <section className='flex flex-row items-center justify-between px-7 py-3'>
      <p>
        Reference material ©
        <a
          className='ml-1'
          href='https://www.aa.org/'
          target='_blank'
          rel='noopener noreferrer'>
          Alcoholics Anonymous
        </a>
      </p>
      <div>
        <p>
          © {currentDate}
          <a
            className='ml-1'
            href='https://mikeparker.co.nz/'
            target='_blank'
            rel='noopener noreferrer'>
            Mike Parker
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
