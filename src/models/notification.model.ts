export interface INotificationModel {
  id: string | number;
  imageUrl: string;
  userName: string;
  content: string;
  timeStamp: string;
}

export type FetchNotificationParams = {
  pageNumber?: number;
  pageSize?: number;
};
