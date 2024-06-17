import './App.css';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { notifications, totalNotificationSelector } from './atoms';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  useEffect(() => {
    // Fetch notifications when the component mounts
    const fetchNotifications = async () => {
      try {
        const res = await axios.get('https://sum-server.100xdevs.com/notifications');
        setNetworkCount(res.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, [setNetworkCount]);

  return (
    <>
      <button>Home</button>
      <button>My Network ({networkCount.network >= 100 ? '99+' : networkCount.network})</button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>
      <button>Me ({totalNotificationCount})</button>
    </>
  );
}

export default App;
