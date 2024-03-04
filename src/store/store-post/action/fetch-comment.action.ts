import { action } from 'satcheljs';

export const fetchCommentAction = action('fetchCommentAction', (postId: string) => {
  return { postId };
});
