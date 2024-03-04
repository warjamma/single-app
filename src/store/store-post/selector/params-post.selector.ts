import { FetchPostParams } from '../../../models';
import { getStore } from '../store';

export const paramsPostSelector = (): FetchPostParams | undefined => {
  const { paramsPost } = getStore();

  return paramsPost;
};
