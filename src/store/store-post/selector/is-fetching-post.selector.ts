import { getStore } from '../store';

export const isFetchingPostSelector = () => {
  return getStore().isFetchingPost;
};
