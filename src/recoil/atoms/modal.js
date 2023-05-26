import { atom } from 'recoil';

export const isDustModalState = atom({
  key: 'isDustModalState',
  default: false,
});

export const dustModalState = atom({
  key: 'dustModalState',
  default: {},
});
