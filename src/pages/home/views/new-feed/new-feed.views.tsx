import React from 'react';
import { LoadingMore, Post } from '../../../../components';
import { INewFeedViewProps } from './new-feed.type';
import { observer } from 'mobx-react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { usePost } from '../../../../hooks';

export const NewFeedView: React.FC<INewFeedViewProps> = observer(() => {
  const { postItems, commentItems, isEndFetchingPost, fetchPost, fetchComment } = usePost();

  return (
    <div className="toto-new-feed">
      <main className="w-full lg:w-[586px]">
        <InfiniteScroll
          dataLength={postItems?.length || 0}
          next={fetchPost}
          hasMore={isEndFetchingPost}
          scrollThreshold={1}
          loader={<LoadingMore />}
          endMessage={<p>No more data to load.</p>}
        >
          {postItems?.map((post) => {
            return <Post key={post.id} post={post} getComment={fetchComment} comments={commentItems} />;
          })}
        </InfiniteScroll>
      </main>
    </div>
  );
});
