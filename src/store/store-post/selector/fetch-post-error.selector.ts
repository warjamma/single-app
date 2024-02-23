import { getStore } from '../store';

export const fetchPostErrorSelector = () => {
  return getStore().fetchPostError.get();
};
