import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';
import { IPostModel } from '../../../models';
import { postSelector } from '../selector';

export const updatePostAction = mutatorAction('updatePostAction', (post: IPostModel[] | undefined) => {
  const storePost = postSelector();

  if (!storePost) {
    getStore().post = post;
  } else {
    getStore().post = [...storePost, ...(post ?? [])];
  }
});
