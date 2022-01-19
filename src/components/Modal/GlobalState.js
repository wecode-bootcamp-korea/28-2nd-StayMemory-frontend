import { atom } from 'recoil';

export const showModalState = atom({
  key: 'showModalState',
  default: null,
});

export const selectedDatesState = atom({
  key: 'selectedDatesState',
  default: {
    check_in: null,
    check_out: null,
  },
});

export const validDatesState = atom({
  key: 'validDatesState',
  default: false,
});

export const selectedLocationState = atom({
  key: 'selectedLocationState',
  default: {
    location: null,
  },
});

export default showModalState;
