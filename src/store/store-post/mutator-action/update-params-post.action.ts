import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';
import { FetchPostParams } from '../../../models';

export const updateParamsPostAction = mutatorAction(
  'updateParamsPostAction',
  (paramsPost: FetchPostParams | undefined) => {
    getStore().paramsPost = paramsPost;
  },
);
