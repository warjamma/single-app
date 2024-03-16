import { orchestrator } from 'satcheljs';
import { hiddenPostAction } from '../action';
import { updateFetchPostError, updateIsFetchingPost } from '../mutator-action';
import { hiddenPostsApi } from '../../../api';

let isFetching = false;

orchestrator(hiddenPostAction, async ({ userId, postId, hideAll }) => {
  if (isFetching) return;

  isFetching = true;

  updateIsFetchingPost(true);

  try {
    await hiddenPostsApi({ userId, postId, hideAll });
  } catch (error) {
    updateFetchPostError(error);
  } finally {
    updateIsFetchingPost(false);
  }

  isFetching = false;
});
