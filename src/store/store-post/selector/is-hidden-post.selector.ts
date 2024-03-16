import { getStore } from '../store';

export const isHiddenPostSelector = () => {
  return getStore().isHiddenPost;
};
