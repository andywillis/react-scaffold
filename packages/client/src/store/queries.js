import { selectorFamily } from 'recoil';

// eslint-disable-next-line import/prefer-default-export
export const defaultDataQuery = selectorFamily({
  key: 'defaultDataQuery',
  get: arg => async () => {
    //
  }
});
