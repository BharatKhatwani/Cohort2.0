// atoms.js
import { atom, selector } from 'recoil';

export const networkAtom = atom({
  key: 'networkAtom',
  default: 102,
});

export const jobsAtom = atom({
  key: 'jobsAtom',
  default: 0,
});

export const messingatom = atom({
  key: 'messingatom',
  default: 0,
});

export const notificationatom = atom({
  key: 'notificationatom',
  default: 12,
});

export const totalnotificationcount = selector({
  key: 'totalnotificationcount',
  get: ({ get }) => {
    const networkCount = get(networkAtom);
    const jobsCount = get(jobsAtom);
    const messagesCount = get(messingatom);
    const notificationsCount = get(notificationatom);
    return networkCount + jobsCount + messagesCount + notificationsCount;
  },
});
