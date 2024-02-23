import { API } from '..';
import { FetchPostParams, IPostModel } from '../../models';

export const fetchPostsApi = (params: FetchPostParams) => {
  return new Promise<IPostModel[]>((resolve, reject) => {
    API.get('/v1/post-service/posts/home-post', {
      params,
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch(reject);
  });
};
