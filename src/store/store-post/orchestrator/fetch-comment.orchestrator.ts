import { orchestrator } from 'satcheljs';
import { fetchCommentAction } from '../action';
import { updateCommentAction, updateFetchCommentError, updateIsFetchingComment } from '../mutator-action';
import { fetchCommentsApi } from '../../../api';

let isFetching = false;

orchestrator(fetchCommentAction, async ({ postId }) => {
  if (isFetching) return;
  isFetching = true;
  try {
    updateIsFetchingComment(true);
    updateCommentAction(await fetchCommentsApi(postId));
  } catch (error) {
    updateFetchCommentError(error);
  } finally {
    updateIsFetchingComment(false);
  }
  isFetching = false;
});
