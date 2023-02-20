import './App.css';
import logo from '../assets/logo.svg';

function App() {
  // console.log('rendering App Component');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="React" />
        <p>
          <code>src/App.js</code> 파일을 수정하면{' '}
          <abbr title="Hot Moudle Replacement">HMR</abbr>, Live Reload 됩니다.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React 배우러 가보자구
        </a>
      </header>
    </div>
  );
}

export default App;
