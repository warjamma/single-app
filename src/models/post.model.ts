import { IUserCommentResponse } from './post-user-comment-response.model';

export interface IPostModel {
  id: string;
  userAvatar: string;
  userId: string;
  userFullName: string;
  postType: string;
  categoryId: string;
  hashtag_Ids: string[];
  hashtags: string[];
  content: string;
  imageUrls: string[];
  videoUrls: string[];
  likesCount: string;
  commentsCount: string;
  isDonateOpen: boolean;
  isViolence: boolean;
  updatedAt: string;
  createdAt: string;
  title: string;
  viewCount: number;
  voteUpCount: number;
  voteDownCount: number;
  userCommentResponses: IUserCommentResponse[];
}

export type FetchPostParams = {
  pageNumber?: number;
  pageSize?: number;
};

export type HiddenPostParams = {
  userId?: string;
  postId?: string;
  hideAll?: boolean;
};
