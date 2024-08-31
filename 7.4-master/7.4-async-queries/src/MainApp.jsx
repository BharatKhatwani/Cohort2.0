import { useRecoilValue } from "recoil";
import { notifications, totalNotificationSelector } from "./atoms";

const MainApp = () => {
  const networkCount = useRecoilValue(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <div>
      <div>
        <button>Home</button>

        <button>
          My Network(
          {networkCount.network > 100 ? "99+" : networkCount.network})
        </button>
        <button>Jobs ({networkCount.jobs})</button>
        <button>Messaging ({networkCount.messaging})</button>
        <button>Notifications ({networkCount.notifications})</button>

        <button>ME({totalNotificationCount})</button>
      </div>
    </div>
  );
};

export default MainApp;