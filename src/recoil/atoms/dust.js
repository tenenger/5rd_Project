import { atom } from 'recoil';

import { getLocalStorage, setLocalStorage } from 'utils/localStorage';

const FAVORITE_GURO_KEY = 'favoriteGuRoState';

export const favoriteGuRoState = atom({
  key: FAVORITE_GURO_KEY,
  default: getLocalStorage(FAVORITE_GURO_KEY) ?? {},
  effects: [
    ({ onSet }) => {
      onSet(newState => {
        setLocalStorage(FAVORITE_GURO_KEY, newState);
      });
    },
  ],
});
