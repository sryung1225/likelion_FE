// import { StrictMode } from 'react';
import { RecoilRoot, RecoilEnv } from 'recoil';
import ReactDOM from 'react-dom/client';
import { RecoilLogger } from 'recoil-devtools-logger';
// import { TimeTravelObserver } from './@recoilDebug';
import App from './App';
import './index.css';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RecoilRoot>
      <App />
      <RecoilLogger />
      {/* <TimeTravelObserver visible shortcut="u" /> */}
    </RecoilRoot>
  </>
);