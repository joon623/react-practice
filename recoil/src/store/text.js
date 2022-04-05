import { atom, selector } from 'recoil';

const textState = atom({
  key: 'textState',
  default: '',
});

const charCounterState = selector({
  key: 'charCountState',
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});

export { textState, charCounterState };
