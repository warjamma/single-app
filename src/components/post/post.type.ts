import { HiddenPostParams, IPostModel, IUserCommentResponse } from '../../models';

export interface IPostProps {
  post?: IPostModel;
  getComment?: (id: string) => void;
  comments?: IUserCommentResponse[];
  hiddenPost?: (data: HiddenPostParams) => void;
  isLoadingHiddenPost?: boolean;
}
