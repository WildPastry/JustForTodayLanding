// import appleStoreBadge from './../assets/img/apple.svg';
import googeStoreBadge from './../assets/img/google.svg';

const Badges: React.FC = (): JSX.Element => {
  return (
    <section className='max460:flex max460:flex-col'>
      {/* <div className='align-bottom inline-block me-10 max460:mb-5 max460:m-auto'>
        <a
          className='align-bottom inline-block'
          href='https://www.apple.com/nz/app-store/'
          target='_blank'
          rel='noopener noreferrer'>
          <img className='h-12 min460:h-16' src={appleStoreBadge} alt='Apple Store Badge' />
        </a>
      </div> */}
      <div className='align-bottom inline-block max460:m-auto'>
        <a
          className='align-bottom inline-block'
          href='https://play.google.com/store/apps/details?id=nz.co.mikeparker.jft'
          target='_blank'
          rel='noopener noreferrer'>
          <img className='h-12 min460:h-16' src={googeStoreBadge} alt='Googe Store Badge' />
        </a>
      </div>
    </section>
  );
};

export default Badges;
