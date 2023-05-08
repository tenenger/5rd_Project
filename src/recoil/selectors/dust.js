import { selector } from 'recoil';
import { favoriteGuRoState } from '../atoms/dust';

export const favoriteSidoState = selector({
  key: 'favoriteSidoState',
  get: ({ get }) => Object.keys(get(favoriteGuRoState)),
});
