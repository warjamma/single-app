import { useObserver } from 'mobx-react';
import { CorePostStore } from '../../store';
import { useEffect } from 'react';
import { FetchPostParams } from '../../models';

export const usePost = () => {
  const postItems = useObserver(() => CorePostStore.postSelector());
  const isLoadingPost = useObserver(() => CorePostStore.isFetchingPostSelector());
  const paramsPost = useObserver(() => CorePostStore.paramsPostSelector());
  const isEndFetchingPost = useObserver(() => CorePostStore.isEndFetchingPostSelector());

  const commentItems = useObserver(() => CorePostStore.commentSelector());
  const isLoadingComment = useObserver(() => CorePostStore.isFetchingCommentSelector());

  async function fetchPost() {
    let params: FetchPostParams;

    if (!paramsPost) {
      params = { pageSize: 10, pageNumber: 1 };
    } else {
      params = {
        pageNumber: 1,
        pageSize: (paramsPost?.pageSize ?? 10) + 1,
      };
    }

    const { pageSize = 10, pageNumber = 1 } = params;

    CorePostStore.fetchPostAction(pageSize, pageNumber);
  }

  async function fetchComment(postId: string) {
    CorePostStore.fetchCommentAction(postId);
  }

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
