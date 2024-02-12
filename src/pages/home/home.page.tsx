import React from 'react';
import { IHomePageProps } from './home.type';
import { TopNav, Button } from '../../components';
import { asideLeftContentMock, asideRightContentMock } from './mocks';
import { Helmet } from 'react-helmet-async';
import { NewFeedView } from './views/new-feed';
import { observer } from 'mobx-react';

const classNamePrefix = 'tt-home-page';

const iconTrendingUp = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="tabler-icon tabler-icon-trending-up "
  >
    <path d="M3 17l6 -6l4 4l8 -8" />
    <path d="M14 7l7 0l0 7" />
  </svg>
);

const iconAwardFilled = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="tabler-icon tabler-icon-award-filled "
  >
    <path
      d="M19.496 13.983l1.966 3.406a1.001 1.001 0 0 1 -.705 1.488l-.113 .011l-.112 -.001l-2.933 -.19l-1.303 2.636a1.001 1.001 0 0 1 -1.608 .26l-.082 -.094l-.072 -.11l-1.968 -3.407a8.994 8.994 0 0 0 6.93 -3.999z"
      strokeWidth={0}
      fill="currentColor"
    />
    <path
      d="M11.43 17.982l-1.966 3.408a1.001 1.001 0 0 1 -1.622 .157l-.076 -.1l-.064 -.114l-1.304 -2.635l-2.931 .19a1.001 1.001 0 0 1 -1.022 -1.29l.04 -.107l.05 -.1l1.968 -3.409a8.994 8.994 0 0 0 6.927 4.001z"
      strokeWidth={0}
      fill="currentColor"
    />
    <path
      d="M12 2l.24 .004a7 7 0 0 1 6.76 6.996l-.003 .193l-.007 .192l-.018 .245l-.026 .242l-.024 .178a6.985 6.985 0 0 1 -.317 1.268l-.116 .308l-.153 .348a7.001 7.001 0 0 1 -12.688 -.028l-.13 -.297l-.052 -.133l-.08 -.217l-.095 -.294a6.96 6.96 0 0 1 -.093 -.344l-.06 -.271l-.049 -.271l-.02 -.139l-.039 -.323l-.024 -.365l-.006 -.292a7 7 0 0 1 6.76 -6.996l.24 -.004z"
      strokeWidth={0}
      fill="currentColor"
    />
  </svg>
);

export const HomePage: React.FC<IHomePageProps> = observer((props) => {
  return (
    <div className="toto-home-page">
      <Helmet>
        <title>Home Page</title>
        <meta name="home" content="Home Page" />
      </Helmet>
      <div className={`${classNamePrefix} bg-white dark:bg-black dark:text-zinc-200`}>
        <TopNav />
        <div className="w-full max-w-[1300px] px-2 lg:px-0 mx-auto">
          <div className="flex justify-between lg:space-x-8 pt-20">
            <aside
              className="hidden lg:block flex-1 sticky top-20 overflow-y-auto"
              style={{ height: 'calc(100vh - 64px)' }}
            >
              <section className="grid grid-cols-2 gap-2">
                <div className="rounded-xl flex transition duration-200 bg-brand-500 text-white hover:brightness-105 flex-col">
                  <div className="">
                    <a className="block rounded-md font-bold p-4" href="/trending">
                      {iconTrendingUp}
                      <span>Xu hướng</span>
                    </a>
                  </div>
                </div>
                <div className="rounded-xl flex transition duration-200 bg-[#C69A5E] text-white hover:brightness-105 flex-col">
                  <div className="">
                    <a className="block rounded-md font-bold p-4" href="/legend">
                      {iconAwardFilled}
                      <span>Huyền thoại</span>
                    </a>
                  </div>
                </div>
              </section>
              <hr className="border-gray-200 dark:border-gray-700 spacing-4" />
              <section>
                <div className="text-lg font-bold mb-2">Danh mục</div>
                <ul className="text-sm font-medium" />
              </section>
              <hr className="border-gray-200 dark:border-gray-700 spacing-4" />
              <section>
                <ul className="text-sm font-medium space-y-2">
                  {asideLeftContentMock?.asideLeftMenu.map((item, index) => {
                    const { link, name, id, icon } = item;
                    return (
                      <li key={id}>
                        <Button
                          className="rounded-md  flex justify-start items-center gap-2  h-10 text-sm px-4 text-brand-500 dark:text-brand-200 hover:bg-brand-500/20 dark:hover:bg-brand-500/20 break-words transition duration-200 py-2"
                          type="link"
                          link={link}
                          title={name}
                        >
                          {icon}
                        </Button>
                      </li>
                    );
                  })}
                </ul>
              </section>
            </aside>
            <NewFeedView />
            <aside
              className="hidden lg:block flex-1 sticky top-20 overflow-y-auto"
              style={{ height: 'calc(100vh - 64px)' }}
            >
              <div className="space-y-4">
                <section>
                  <div className="rounded-xl flex transition duration-200 bg-gray-100 dark:bg-gray-900 flex-col">
                    <div className="p-4">
                      <div className="text-lg font-bold ">Nổi bật</div>
                    </div>
                    <div
                      className="splide splide--slide splide--ltr splide--draggable is-active is-overflow is-initialized"
                      aria-label="My Favorite Images"
                      id="splide02"
                      role="region"
                      aria-roledescription="carousel"
                    >
                      <div
                        className="splide__track splide__track--slide splide__track--ltr splide__track--draggable"
                        id="splide02-track"
                        aria-live="polite"
                        aria-atomic="true"
                        style={{ paddingLeft: '0px', paddingRight: '0px' }}
                      >
                        <ul
                          className="splide__list"
                          id="splide02-list"
                          role="presentation"
                          style={{ transform: 'translateX(0px)' }}
                        >
                          <li
                            className="splide__slide is-active is-visible"
                            id="splide02-slide01"
                            role="group"
                            aria-roledescription="slide"
                            aria-label="1 of 3"
                            style={{ width: 'calc(100%)' }}
                          >
                            <img src="https://picsum.photos/id/100/2500/1656.jpg" alt="Slide" />{' '}
                          </li>
                          {/* <li className="splide__slide is-next" id="splide02-slide02" role="group" aria-roledescription="slide" aria-label="2 of 3" aria-hidden="true" style={{ width: 'calc(100%)' }}><img src="https://picsum.photos/id/1000/2500/1656.jpg" alt="Slide" /> </li>
                        <li className="splide__slide" id="splide02-slide03" role="group" aria-roledescription="slide" aria-label="3 of 3" aria-hidden="true" style={{ width: 'calc(100%)' }}><img src="https://picsum.photos/id/1001/2500/1656.jpg" alt="Slide" /> </li> */}
                        </ul>
                      </div>
                    </div>
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
                                  className="rounded-md  flex justify-start items-center gap-2  h-8 text-xs px-2 py-1 text-brand-500 dark:text-brand-200 hover:bg-brand-500/20 dark:hover:bg-brand-500/20 break-words transition duration-200 "
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div className="line-clamp-1">
                                    <div className="flex items-center gap-2">
                                      <img className="rounded-full w-6 h-6" src={avatar} alt="" />{' '}
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
                                className="rounded-2xl bg-zinc-200 dark:bg-zinc-700 text-xs px-3 py-2 mr-2 mb-2 transition duration-300 hover:bg-brand-500 hover:dark:bg-brand-500 hover:text-white"
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
          </div>
        </div>
      </div>
    </div>
  );
});
