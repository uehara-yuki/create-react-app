import logo from './logo.svg';
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        

        <h1>
          hello world
        </h1>
        <p>
          <Weather city="Paris" />
        </p>

      </header>
    </div>
  );
}

export default App;
