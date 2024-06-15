import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { jobsAtom, messingatom, networkAtom, notificationatom, totalnotificationcount } from './atoms';
import { useRecoilValue, RecoilRoot, useRecoilState } from 'recoil';

// The App component wraps the MainApp component with RecoilRoot
function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

// MainApp is where the main application logic and UI are defined
function MainApp() {
  const networkcount = useRecoilValue(networkAtom);
  const jobAtomcount = useRecoilValue(jobsAtom);
  const [messagecount, setMessagecount] = useRecoilState(messingatom);
  const notificationcount = useRecoilValue(notificationatom);
  const totalnotification = useRecoilValue(totalnotificationcount);

  return (
    <div>
      <button>Home</button>
      <button>My Network ({networkcount >= 100 ? "99+" : networkcount})</button>
      <button>Jobs ({jobAtomcount})</button>
      <button>Messaging ({messagecount})</button>
      <button>Notifications ({notificationcount})</button>
      <button>Me {totalnotification}</button>
    </div>
  );
}

export default App;
