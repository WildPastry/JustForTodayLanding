const Privacy: React.FC = (): JSX.Element => {
  return (
    <section className='w-700 m-auto'>
      <div className='my-10'>
        <h2 className='text-2xl text-center'>Privacy statement</h2>
      </div>
      <p className='text-xl leading-8'>
        JustForToday respects your privacy and is committed to protecting your
        personal information. This Privacy Statement outlines how we collect,
        use, and safeguard your data when you use our mobile application.
      </p>
      <hr className='h-px my-10 bg-gray-600 border-0' />
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
      <div className='mb-10'>
        <h3 className='text-lg text-spotBlue mb-2'>Data Usage</h3>
        <p className='text-md'>
          Since we do not collect any data, we do not use your personal
          information for any purpose.
        </p>
      </div>
      <div className='mb-10'>
        <h3 className='text-lg text-spotBlue mb-2'>Data Sharing</h3>
        <p className='text-md'>
          We do not share any data, personal or otherwise, with third parties.
          Your information is not disclosed, sold, or rented to any external
          entities.
        </p>
      </div>
      <div className='mb-10'>
        <h3 className='text-lg text-spotBlue mb-2'>Changes</h3>
        <p className='text-md'>
          We reserve the right to update this Privacy Statement from time to
          time. Any changes will be reflected on this page.
        </p>
      </div>
      <div className='mb-10'>
        <h3 className='text-lg text-spotBlue mb-2'>Contact Us</h3>
        <p className='text-md mb-2'>
          If you have any questions or concerns regarding this Privacy Statement
          or the privacy practices of JustForToday, please contact us
          <a className='ml-1' href='mailto:justfortoday@mikeparker.co.nz'>
            here
          </a>
          .
        </p>
        <p className='text-md'>
          By using JustForToday, you signify your acceptance of this Privacy
          Statement. If you do not agree to this Privacy Statement, please
          refrain from using our mobile application. Thank you for trusting
          JustForToday with your privacy.
        </p>
      </div>
    </section>
  );
};

export default Privacy;
