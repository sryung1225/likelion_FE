// import { StrictMode } from 'react';
import { RecoilRoot } from 'recoil';
import ReactDOM from 'react-dom/client';
import { RecoilLogger } from 'recoil-devtools-logger';
// import { TimeTravelObserver } from './@recoilDebug';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RecoilRoot>
      <App />
      <RecoilLogger />
      {/* <TimeTravelObserver visible shortcut="u" /> */}
    </RecoilRoot>
  </>
);