import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">  
      <h1>
        Do Done Did
      </h1>
      <p>Keep track of progress on your projects.</p>
      <Link to="/home" className="App-button">Let's do this!</Link>
      </header>
    </div>
  );
}

export default App;
