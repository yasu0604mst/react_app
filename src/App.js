import logo from './logo.svg';
import './App.css';
import Test from './Test';
import { SimpleForm } from './SimpleForm';
import { InchToCm } from './InchToCm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ku Edit <code>src/App.js</code> and save to reload.
        </p>
        <Test></Test>
        <div id="root"></div>
        
        <SimpleForm />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
