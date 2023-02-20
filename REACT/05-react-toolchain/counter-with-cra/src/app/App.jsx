import './App.css';
import { Counter } from '../components';

function App() {
  return (
    <div className="App">
      <Counter count={2} /> {/* 2부터 시작해서 1씩 증가 */}
      <Counter step={3} /> {/* 1부터 시작해서 3씩 증가 */}
    </div>
  );
}

export default App;
