import { orchestrator } from 'satcheljs';
import { fetchPostAction } from '../action';
import {
  updateFetchPostError,
  updateIsEndFetchingPost,
  updateIsFetchingPost,
  updateParamsPostAction,
  updatePostAction,
} from '../mutator-action';
import { fetchPostsApi } from '../../../api';
import _ from 'lodash';

let isFetching = false;

orchestrator(fetchPostAction, async ({ pageSize, pageNumber }) => {
  if (isFetching) return;

  isFetching = true;

  updateIsFetchingPost(true);

  updateParamsPostAction({ pageSize, pageNumber });

  try {
    const post = await fetchPostsApi({ pageSize, pageNumber });

    updatePostAction(post);

    if (_.isEmpty(post)) {
      updateIsEndFetchingPost(false);
    } else {
      updateIsEndFetchingPost(true);
    }
  } catch (error) {
    updateFetchPostError(error);
  } finally {
    updateIsFetchingPost(false);
  }

  isFetching = false;
});
