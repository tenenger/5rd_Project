import { atom } from 'recoil';

const FAVORITE_GURO_KEY = 'favoriteGuRoState';

const localStorageEffect = ({ onSet }) => {
  onSet(newState => {
    localStorage.setItem(FAVORITE_GURO_KEY, JSON.stringify(newState));
  });
};

export const favoriteGuRoState = atom({
  key: FAVORITE_GURO_KEY,
  default: JSON.parse(localStorage.getItem(FAVORITE_GURO_KEY)) ?? {},
  effects: [localStorageEffect],
});
