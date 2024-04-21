import appleStoreBadge from './../assets/img/apple.svg';
import googeStoreBadge from './../assets/img/google.svg';

const Badges: React.FC = (): JSX.Element => {
  return (
    <section className='mobileSmall:flex mobileSmall:flex-col'>
      <div className='align-bottom inline-block me-10 mobileSmall:mb-5 mobileSmall:m-auto'>
        <a
          className='align-bottom inline-block'
          href='https://www.apple.com/nz/app-store/'
          target='_blank'
          rel='noopener noreferrer'>
          <img className='h-16 mobileLarge:h-14' src={appleStoreBadge} alt='Apple Store Badge' />
        </a>
      </div>
      <div className='align-bottom inline-block mobileSmall:m-auto'>
        <a
          className='align-bottom inline-block'
          href='https://play.google.com/store/apps/details?id=nz.co.mikeparker.jft'
          target='_blank'
          rel='noopener noreferrer'>
          <img className='h-16 mobileLarge:h-14' src={googeStoreBadge} alt='Googe Store Badge' />
        </a>
      </div>
    </section>
  );
};

export default Badges;
