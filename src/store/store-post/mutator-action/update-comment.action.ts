import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';
import { IUserCommentResponse } from '../../../models';

export const updateCommentAction = mutatorAction(
  'updateCommentAction',
  (comment: IUserCommentResponse[] | undefined) => {
    getStore().comment = comment;
  },
);
