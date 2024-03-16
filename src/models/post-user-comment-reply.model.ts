export interface IUserCommentReplies {
  id: string;
  commentId: string;
  userId: string;
  userFullName: string;
  avatar: string;
  parentReplyId: string;
  replyLevel: number;
  content: string;
  upvotesCount: number;
  downvotesCount: number;
  status: number;
  updatedAt: string;
  createdAt: string;
}
