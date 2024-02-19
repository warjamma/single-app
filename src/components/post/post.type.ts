import { IPostModel, IUserCommentResponse } from '../../models';

export interface IPostProps {
  post?: IPostModel;
  getComment?: (id: string) => void;
  comments?: IUserCommentResponse[];
}
