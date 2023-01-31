import { selectorFamily } from 'recoil';

import { libraryAtom } from './atoms';

export const defaultSelector = selectorFamily({
  key: 'defaultSelector',
  get: (arg) => ({ get }) => {
    //
  }

});
