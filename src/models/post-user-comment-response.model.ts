import { IUserCommentReplies } from './post-user-comment-reply.model';

export interface IUserCommentResponse {
  id: string;
  postId: string;
  userId: string;
  userFullName: string;
  avatar: string;
  content: string;
  upvotesCount: number;
  downvotesCount: number;
  status: number;
  replies: IUserCommentReplies[];
  updatedAt: string;
  createdAt: string;
}
