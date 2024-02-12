import { API } from '..';
import { IUserCommentResponse } from '../../models';

export const fetchCommentsApi = (id: string) => {
  return new Promise<IUserCommentResponse[]>((resolve, reject) => {
    API.get(`/v1/post-service/comments/${id}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch(reject);
  });
};
