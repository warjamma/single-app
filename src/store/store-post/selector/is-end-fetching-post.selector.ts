import { getStore } from '../store';

export const isEndFetchingPostSelector = () => {
  return getStore().isEndFetchingPost;
};
