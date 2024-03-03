import { API } from '..';
import { FetchNotificationParams, INotificationModel } from '../../models';

export const fetchNotificationsApi = (params: FetchNotificationParams) => {
  return new Promise<INotificationModel[]>((resolve, reject) => {
    API.get('/v1/post-service/posts/home-post', {
      params,
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch(reject);
  });
};
