import React from 'react';

const Description: React.FC = (): JSX.Element => {
  return (
    <section className='relative'>
      <h1 className='text-3xl mb-5 z-10 relative max460:text-2xl'>
        Description
      </h1>
      <p className='text-md'>
        JustForToday is a supportive tool designed for the Alcoholics Anonymous
        (AA) community, offering a daily dose of inspiration and insight. Each
        day, users receive a new reflection tailored to their journey of
        recovery, fostering introspection and motivation. Additionally, the app
        provides convenient access to the foundational principles of AA through
        dedicated sections for the 12 Steps and 12 Traditions, empowering users
        to explore and reinforce their commitment to sobriety and personal
        growth.
      </p>
    </section>
  );
};

export default Description;
