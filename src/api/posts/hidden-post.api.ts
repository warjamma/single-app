import { API } from '..';
import { HiddenPostParams } from '../../models';

export const hiddenPostsApi = (params: HiddenPostParams) => {
  return new Promise((resolve, reject) => {
    API.post(`/v1/post-service/posts/spam/${params.postId}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch(reject);
  });
};
