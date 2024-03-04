import { IObservableValue } from 'mobx';
import { FetchPostParams, IPostModel, IUserCommentResponse } from '../../../models';

export interface IPostStore {
  post: IPostModel[] | undefined;
  isFetchingPost: boolean;
  fetchPostError: IObservableValue<string | undefined | unknown>;
  paramsPost: FetchPostParams | undefined;
  isEndFetchingPost: boolean;

  comment: IUserCommentResponse[] | undefined;
  isFetchingComment: boolean;
  fetchCommentError: IObservableValue<string | undefined | unknown>;
}
