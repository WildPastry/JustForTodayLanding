import jftLogo from '../assets/img/jft-white-blue.svg';

const Logo: React.FC = (): JSX.Element => {
  return <img className='h-6 mobileSmall:h-5' src={jftLogo} alt='JustForToday Logo' />;
};

export default Logo;
