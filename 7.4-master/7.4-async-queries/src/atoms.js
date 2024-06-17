import axios from "axios";
import { atom, selector } from "recoil";

// Atom to hold notifications data
export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: selector({
        key: "notificationsAtomSelector",
        get: async () => {
          
                const res = await axios.get("https://sum-server.100xdevs.com/notifications");
                return res.data;
           
            
        }
    })
});

// Selector to calculate total notifications
export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({ get }) => {
        const allNotifications = get(notificationsAtom);
        return (
            allNotifications.network +
            allNotifications.jobs +
            allNotifications.notifications +
            allNotifications.messaging
        );
    }
});
