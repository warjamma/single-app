import { IUserCommentResponse } from '../../../models';
import { getStore } from '../store';

export const commentSelector = (): IUserCommentResponse[] | undefined => {
  const { comment } = getStore();

  return comment;
};
