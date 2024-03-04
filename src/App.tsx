import jftLogo from "./assets/just-for-today.svg";
import "./App.css";

const App: React.FC = (): JSX.Element => {
  return (
    <main className="main">
      <section className="logo-container">
        <img src={jftLogo} className="logo" alt="JustForToday Logo" />
        <h1 className="logo-text">
          Just for <span className="logo-text-colour">today</span>
        </h1>
      </section>
    </main>
  );
}

export default App;
