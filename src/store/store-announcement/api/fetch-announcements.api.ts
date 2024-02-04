import { API } from '../../../api';
import { IAnnouncementModel } from '../store';
import { IBaseSearchResponse } from 'utils/hooks';

export const fetchAnnouncementsAPI = (): Promise<IAnnouncementModel[]> => {
  return new Promise((resolve, reject) => {
    API.get<IBaseSearchResponse<{ announcements: IAnnouncementModel[] }>>('/report/announcements', {
      params: { status: 'ACTIVE' },
    })
      .then((response) => {
        resolve(response.data._embedded?.announcements ?? []);
      })
      .catch(reject);
  });
};
