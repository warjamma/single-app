import React from 'react';
import { IHomePageProps } from './home.type';
import { LoadingMore, Post } from '../../components';
import { Helmet } from 'react-helmet-async';
import { observer } from 'mobx-react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { usePost } from '../../hooks';
import { AsideLeft } from '../../views/aside-left';
import { AsideRight } from '../../views/aside-right';

const classNamePrefix = 'tt-home-page';

export const HomePage: React.FC<IHomePageProps> = observer(() => {
  const { postItems, commentItems, isEndFetchingPost, isLoadingHiddenPost, hiddenPost, fetchPost, fetchComment } =
    usePost();

  // HASHMAP
  const towSum = (numbers, target) => {
    const hashMap = {};
    for (let i = 0; i < numbers.length; i++) {
      const num = numbers[i];
      if (hashMap[target - num] !== 'undefined') {
        return [i, hashMap[target - num]];
      }
      hashMap[num] = i;
    }
  };
  console.log(towSum([1, 2, 3, 4, 5], 6));

  // STACK
  const isValid = (s) => {
    const stack: string[] = [];

    const match = {
      '}': '{',
      ')': '(',
      ']': '[',
    };

    // eslint-disable-next-line no-restricted-syntax
    for (const ch of s) {
      // eslint-disable-next-line no-console
      console.log({ ch, stack });
      if (ch === '{' || ch === '[' || ch === '(') {
        stack.push(ch);
      } else {
        const top = stack.pop();

        if (match[ch] !== top) {
          return false;
        }
      }
    }

    return stack.length === 0;
  };

  return (
    <div className={`${classNamePrefix} bg-white dark:bg-black dark:text-zinc-200`}>
      <Helmet>
        <title>Home Page</title>
        <meta name="home" content="Home Page" />
      </Helmet>
      <div className="w-full max-w-[1300px] px-2 lg:px-0 mx-auto">
        <div className="flex justify-between lg:space-x-8 pt-20">
          <AsideLeft />
          <div className="toto-new-feed">
            <main className="w-full lg:w-[586px]">
              <InfiniteScroll
                dataLength={postItems?.length || 0}
                next={fetchPost}
                hasMore={isEndFetchingPost}
                loader={<LoadingMore />}
                endMessage={<div className="text-center">Không còn dữ liệu.</div>}
              >
                {postItems?.map((post) => {
                  return (
                    <Post
                      key={post.id}
                      post={post}
                      getComment={fetchComment}
                      comments={commentItems}
                      isLoadingHiddenPost={isLoadingHiddenPost}
                      hiddenPost={hiddenPost}
                    />
                  );
                })}
              </InfiniteScroll>
            </main>
          </div>
          <AsideRight />
        </div>
      </div>
    </div>
  );
});
