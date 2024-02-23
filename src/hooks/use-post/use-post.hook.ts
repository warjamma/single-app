import { useObserver } from 'mobx-react';
import { CorePostStore } from '../../store';
import { useCallback, useEffect } from 'react';
import { FetchPostParams } from '../../models';

const LIMIT_LOAD_ITEMS_POST = 15;

export const usePost = () => {
  const postItems = useObserver(() => CorePostStore.postSelector());
  const isLoadingPost = useObserver(() => CorePostStore.isFetchingPostSelector());
  const paramsPost = useObserver(() => CorePostStore.paramsPostSelector());
  const isEndFetchingPost = useObserver(() => CorePostStore.isEndFetchingPostSelector());

  const commentItems = useObserver(() => CorePostStore.commentSelector());
  const isLoadingComment = useObserver(() => CorePostStore.isFetchingCommentSelector());

  const fetchPost = useCallback(() => {
    let params: FetchPostParams;

    if (!paramsPost) {
      params = { pageSize: LIMIT_LOAD_ITEMS_POST, pageNumber: 1 };
    } else {
      params = {
        pageNumber: (paramsPost?.pageNumber ?? 1) + 1,
        pageSize: paramsPost?.pageSize,
      };
    }

    const { pageSize = LIMIT_LOAD_ITEMS_POST, pageNumber = 1 } = params;

    CorePostStore.fetchPostAction(pageSize, pageNumber);
  }, [paramsPost]);

  const fetchComment = useCallback((postId: string) => {
    if (!postId) return;

    CorePostStore.fetchCommentAction(postId);
  }, []);

  useEffect(() => {
    fetchPost();
  }, []);

  return {
    postItems,
    isLoadingPost,
    commentItems,
    isLoadingComment,
    paramsPost,
    isEndFetchingPost,
    fetchPost,
    fetchComment,
  };
};
