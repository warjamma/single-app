import React from 'react';
import { IAsideRightProps } from './aside-right.type';
import { asideRightContentMock } from './mock/aside-right.mock';
import { LazyLoadImage, Slider } from '../../components';

export const AsideRight: React.FC<IAsideRightProps> = () => {
  return (
    <aside className="hidden lg:block flex-1 sticky top-20 overflow-y-auto" style={{ height: 'calc(100vh - 64px)' }}>
      <div className="space-y-4">
        <section>
          <div className="rounded-xl flex transition duration-200 bg-gray-100 dark:bg-gray-900 flex-col">
            <div className="p-4">
              <div className="text-lg font-bold ">Nổi bật</div>
            </div>
            <Slider
              sliders={asideRightContentMock?.slides?.map((slider) => slider.imageUrl) as string[]}
              type="only-image"
              autoNext
            />
          </div>
        </section>
        <section>
          <div className="rounded-xl flex transition duration-200 bg-gray-100 dark:bg-gray-900 flex-col">
            <div className="p-4">
              <div className="text-lg font-bold ">Bảng xếp hạng</div>
            </div>
            <div className="px-4 pb-4">
              <div role="navigation" className="w-full">
                <ul
                  className="rounded-full bg-gray-100 dark:bg-gray-800 backdrop-blur flex w-max mb-4 overflow-x-auto scrollbar-hide"
                  role="tablist"
                />
              </div>
              <ul className="space-y-2">
                <li>
                  {asideRightContentMock?.leaderboard &&
                    asideRightContentMock?.leaderboard.map((member) => {
                      const { id, name, avatar, link } = member;
                      return (
                        <a
                          key={id}
                          href={link}
                          target="_self"
                          className="rounded-md  flex justify-start items-center gap-2  h-8 text-xs px-2 py-1 text-primary-6 dark:text-primary-3 hover:bg-primary-6/20 dark:hover:bg-primary-6/20 break-words transition duration-200 "
                          role="button"
                          tabIndex={-1}
                        >
                          <div className="line-clamp-1">
                            <div className="flex items-center gap-2">
                              <LazyLoadImage className="rounded-full w-6 h-6" src={avatar} alt="" />{' '}
                              <span className="text-xs font-semibold">{name}</span>
                            </div>
                          </div>
                        </a>
                      );
                    })}
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className="rounded-xl flex transition duration-200 bg-gray-100 dark:bg-gray-900 flex-col">
            <div className="p-4">
              <div className="text-lg font-bold ">Hashtag phổ biến</div>
            </div>
            <div className="px-4 pb-4">
              <div className="flex flex-wrap justify-center items-center">
                {asideRightContentMock?.hashtags &&
                  asideRightContentMock?.hashtags.map((hashtag, index) => {
                    return (
                      <a
                        key={Math.random().toString(36).substring(2, 15)}
                        className="rounded-2xl bg-zinc-200 dark:bg-zinc-700 text-xs px-3 py-2 mr-2 mb-2 transition duration-300 hover:bg-primary-6 hover:dark:bg-primary-6 hover:text-white"
                        href="/t/name"
                      >
                        {hashtag}
                      </a>
                    );
                  })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </aside>
  );
};
