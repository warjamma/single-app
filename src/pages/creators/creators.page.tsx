import React from 'react';
import { ICreatorsPageProps } from './creators.type';
import { useCreator } from './creators.hook';
import { Helmet } from 'react-helmet-async';
import InfiniteScroll from 'react-infinite-scroll-component';
import { LazyLoadImage, LoadingMore } from '../../components';
import { ProfilePage } from '../profile';
import './creators.style.scss';

export const CreatorsPage: React.FC<ICreatorsPageProps> = () => {
  const {
    creators,
    isEndFetchingListCreator,
    fetchCreators,
    userIdSearch,
    replaceUserId,
    followCreators,
    removeCreators,
  } = useCreator();

  return (
    <div className="toto-creators-page flex justify-between lg:space-x-8 pt-2">
      <Helmet>
        <title>Creators Page</title>
        <meta name="ListCreator" content="ListCreator Page" />
      </Helmet>
      <div className="top-20 w-1/4 border-r border-gray-4 shadow-right">
        <div className="pt-[64px] fixed top-0 left-0 px-3 overflow-y-auto w-[360px] h-screen bg-white dark:bg-black">
          <div className="flex py-6 gap-3 bg-white dark:bg-black fixed w-[24%]">
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-left"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M5 12l6 6" />
                <path d="M5 12l6 -6" />
              </svg>
            </a>
            <h5 className="text-xl font-bold leading-none text-gray-10 dark:text-white">Bạn gợi ý</h5>
          </div>
          <ul className="pt-[75px]">
            <InfiniteScroll
              dataLength={creators?.length || 0}
              next={fetchCreators}
              hasMore={isEndFetchingListCreator}
              loader={<LoadingMore />}
              endMessage={<div className="text-center">Không còn dữ liệu.</div>}
            >
              {creators &&
                creators?.map((creator) => {
                  const { userId, fullName, avatar, status } = creator;

                  return (
                    <li
                      key={userId}
                      className={`px-3 py-3 sm:py-4 divide-y divide-gray-200 dark:divide-gray-8 cursor-pointer
                    ${userIdSearch === userId ? 'bg-gray-3 rounded-lg dark:bg-gray-3' : ''}`}
                    >
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <LazyLoadImage
                            src={avatar}
                            alt="avatar"
                            className="w-[60px] h-[60px] object-cover rounded-full"
                          />
                        </div>
                        <div className="flex-1 min-w-0 ms-4">
                          <div className="flex justify-between">
                            <p
                              onClick={() => replaceUserId(userId)}
                              className="text-sm font-medium text-gray-10 truncate dark:text-white"
                            >
                              {fullName}
                            </p>
                            <p className="text-xs text-gray-6 truncate dark:text-gray-5">20w</p>
                          </div>

                          {status === 'PENDING' && (
                            <>
                              <p className="text-xs text-gray-6 truncate dark:text-gray-5">13 bạn chung</p>
                              <div className="group-button flex pt-2">
                                <button
                                  onClick={() => userId && followCreators(userId, creators)}
                                  className="inline-flex items-center w-[124px] py-1.5 text-sm font-medium justify-center text-white bg-primary-8 rounded-lg hover:bg-primary-9 focus:ring-4 focus:outline-none focus:ring-primary-4 dark:bg-primary-7 dark:hover:bg-primary-8 dark:focus:ring-primary-9"
                                >
                                  Theo dõi
                                </button>
                                <button
                                  onClick={() => userId && removeCreators(userId, creators)}
                                  className="w-[124px] py-1.5 ms-2 text-sm font-medium text-center text-gray-10 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-2 hover:text-primary-8 focus:z-10 focus:ring-4 focus:ring-gray-2 dark:focus:ring-gray-8 dark:bg-gray-9 dark:text-gray-5 dark:border-gray-7 dark:hover:text-white dark:hover:bg-gray-8"
                                >
                                  Xoá
                                </button>
                              </div>
                            </>
                          )}

                          {status === 'ACCEPTED' && (
                            <p className="text-xs text-gray-6 truncate dark:text-gray-5">Yêu cầu được chấp nhận</p>
                          )}
                          {status === 'DELETE' && (
                            <p className="text-xs text-gray-6 truncate dark:text-gray-5">Yêu cầu được xoá</p>
                          )}
                        </div>
                      </div>
                    </li>
                  );
                })}
            </InfiniteScroll>
          </ul>
        </div>
      </div>

      {userIdSearch !== 'request' ? (
        <div className="flex-1 toto-creators-page__ml-0">
          <ProfilePage />
        </div>
      ) : (
        <div className="flex-1 flex justify-center h-[100vh]">
          <div className="mt-20">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 112" className="w-[300px]">
              <defs>
                <clipPath id="a">
                  <circle cx="72.58" cy="53.81" r="12.08" fill="none" />
                </clipPath>
              </defs>
              <g clipPath="url(#a)">
                <circle cx="72.58" cy="53.81" r="12.08" fill="#1876f2" />
                <circle cx="62.18" cy="40.55" r="14.72" fill="#a4a7ab" />
                <circle cx="88.92" cy="39.27" r="14.72" fill="#a4a7ab" />
              </g>
              <path d="M27.37 17.56h11.3a3.84 3.84 0 013.84 3.84v15h-19v-15a3.84 3.84 0 013.86-3.84z" />
              <rect width="19" height="24.75" x="23.52" y="26.9" fill="#90c3ff" rx="8.65" />
              <path fill="#a4a7ab" d="M18.87 55.28h28.3a7 7 0 017 7v37.36H11.92V62.23a7 7 0 016.95-6.95z" />
              <path
                fill="#64676b"
                d="M68.63 68.28h5.06A26.12 26.12 0 0199.8 94.4v5.25H42.51V94.4a26.12 26.12 0 0126.12-26.12z"
              />
              <circle cx="66.32" cy="35.2" r="7.55" fill="#a4a7ab" />
            </svg>
            <h3 className="text-[22px] font-bold">Chọn tên của người mà bạn muốn xem trước trang cá nhân</h3>
          </div>
        </div>
      )}
    </div>
  );
};
