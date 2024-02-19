import React, { useCallback, useEffect, useState } from 'react';
import { Post, VirtualListContent } from '../../../../components';
import { INewFeedViewProps } from './new-feed.type';
import { IPostModel, IUserCommentResponse } from '../../../../models';
import { observer } from 'mobx-react';
import { CoreLoadingStore, CommonMessageStore } from '../../../../store';
import { fetchCommentsApi, fetchPostsApi } from '../../../../api';

export const NewFeedView: React.FC<INewFeedViewProps> = observer(() => {
  const [posts, setPosts] = useState<IPostModel[]>([]);

  const [comments, setComment] = useState<IUserCommentResponse[]>([]);

  const getPostsApi = useCallback(() => {
    CoreLoadingStore.updateLoadingAction(true);
    setPosts([]);

    fetchPostsApi()
      .then((response) => {
        setPosts(response);
      })
      .catch(CommonMessageStore.updateErrorAction)
      .finally(() => CoreLoadingStore.updateLoadingAction(false));
  }, []);

  const getCommentApi = useCallback((id: string) => {
    CoreLoadingStore.updateLoadingAction(true);
    setComment([]);

    fetchCommentsApi(id)
      .then((response) => {
        setComment(response);
      })
      .catch(CommonMessageStore.updateErrorAction)
      .finally(() => CoreLoadingStore.updateLoadingAction(false));
  }, []);

  useEffect(() => {
    getPostsApi();
  }, []);

  return (
    <div className="toto-new-feed">
      <main className="w-full lg:w-[586px]">
        <VirtualListContent>
          {posts.map((post) => {
            return <Post key={post.id} post={post} getComment={getCommentApi} comments={comments} />;
          })}
        </VirtualListContent>
      </main>
    </div>
  );
});
