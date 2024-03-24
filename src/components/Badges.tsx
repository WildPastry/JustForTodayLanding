import appleStoreBadge from './../assets/img/apple.svg';
import googeStoreBadge from './../assets/img/google.svg';

const Badges: React.FC = (): JSX.Element => {
  return (
    <section>
      <div className='align-bottom inline-block me-5 w-40'>
        <a
          className='align-bottom inline-block w-40'
          href='https://www.apple.com/nz/app-store/'
          target='_blank'
          rel='noopener noreferrer'>
          <img src={appleStoreBadge} alt='Apple Store Badge' />
        </a>
      </div>
      <div className='align-bottom inline-block me-5 w-40'>
        <a
          className='align-bottom inline-block w-40'
          href='https://play.google.com/store/apps'
          target='_blank'
          rel='noopener noreferrer'>
          <img src={googeStoreBadge} alt='Googe Store Badge' />
        </a>
      </div>
    </section>
  );
};

export default Badges;
