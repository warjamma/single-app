import { observable } from 'mobx';
import { createStore } from 'satcheljs';
import { IPostStore } from './post.type';

const initStore: IPostStore = {
  post: undefined,
  isFetchingPost: false,
  fetchPostError: observable.box(undefined),
  paramsPost: undefined,
  isEndFetchingPost: false,

  comment: undefined,
  isFetchingComment: false,
  fetchCommentError: observable.box(undefined),
};

export const getStore = createStore('POST_STORE', initStore);
