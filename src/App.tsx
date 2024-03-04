import './App.css';
import Reflections from './components/Reflections';
import Steps from './components/Steps';
import Traditions from './components/Traditions';
import jftLogo from './assets/just-for-today.svg';

const App: React.FC = (): JSX.Element => {
  return (
    <main className='main'>
      <section className='logo-container'>
        <img src={jftLogo} className='logo' alt='JustForToday Logo' />
        <h1 className='logo-text'>
          Just for <span className='logo-text-colour'>today</span>
        </h1>
      </section>
      <Reflections />
      <Steps />
      <Traditions />
    </main>
  );
};

export default App;
