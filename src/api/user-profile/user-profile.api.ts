import { API } from '..';
import { IUserProfile } from '../../models';

export const fetchUserProfileApi = () => {
  return new Promise<IUserProfile>((resolve, reject) => {
    API.get<IUserProfile>('/v1/user-service/me')
      .then((res) => {
        resolve(res.data);
      })
      .catch(reject);
  });
};
