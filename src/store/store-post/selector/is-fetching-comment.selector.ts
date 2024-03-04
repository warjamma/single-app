import { getStore } from '../store';

export const isFetchingCommentSelector = () => {
  return getStore().isFetchingComment;
};
