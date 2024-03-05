import { Close } from 'react-ionicons';
import { Link } from 'react-router-dom';

const Terms: React.FC = (): JSX.Element => {
  return (
    <section>
      <Link to={'/'}>
        <Close color={'#ffffff'} title={'CLOSE'} height='50px' width='50px' />
      </Link>
      <h2>Terms</h2>
    </section>
  );
};

export default Terms;
