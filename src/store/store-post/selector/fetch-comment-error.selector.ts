import { getStore } from '../store';

export const fetchCommentErrorSelector = () => {
  return getStore().fetchCommentError.get();
};
