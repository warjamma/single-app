import { observable } from 'mobx';
import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';

export const updateFetchCommentError = mutatorAction(
  'updateFetchCommentError',
  (error: string | undefined | unknown) => {
    getStore().fetchCommentError = observable.box(error);
  },
);
