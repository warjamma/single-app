import { API } from '..';
import { IPostModel } from '../../models';

export const fetchPostsApi = () => {
  return new Promise<IPostModel[]>((resolve, reject) => {
    API.get('/v1/post-service/posts/home-post', {
      params: { page: 0, perPage: 0, pageSize: 10, pageNumber: 1 },
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch(reject);
  });
};
