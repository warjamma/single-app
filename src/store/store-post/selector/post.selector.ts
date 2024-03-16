import { IPostModel } from '../../../models';
import { getStore } from '../store';

export const postSelector = (): IPostModel[] | undefined => {
  const { post } = getStore();

  return post;
};
