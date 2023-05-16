import { selector } from 'recoil';

import { favoriteGuRoState } from 'recoil/atoms/dust';

export const favoriteSidoState = selector({
  key: 'favoriteSidoState',
  get: ({ get }) => Object.keys(get(favoriteGuRoState)),
});
