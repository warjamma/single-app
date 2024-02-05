import React from 'react';
import { IProfilePageProps } from './profile.type';
import { Helmet } from 'react-helmet-async';

export const ProfilePage: React.FC<IProfilePageProps> = () => {
  return (
    <div className="toto-profile">
      <Helmet>
        <title>Trang cá nhân</title>
        <meta name="profile" content="Description of profile" />
      </Helmet>
      <div className="bg-white dark:bg-black dark:text-zinc-200">
        <Header />
        <main className="mt-16">
          <section className="bg-gradient-to-t from-white dark:from-black from-50% to-brand-50 dark:to-brand transition">
            <div className="w-full max-w-[1300px] px-2 lg:px-0 mx-auto">
              <figure>
                <img className="w-full h-[500px]" src="https://picsum.photos/1600/900" alt="" />
              </figure>
              <div className="flex items-center space-x-4 lg:space-x-8 py-8">
                <figure>
                  <div className="w-full h-full">
                    <div className="h-full w-full relative">
                      <div className="flex justify-center">
                        <img className="avatar rounded-full object-cover h-[200px] w-[200px]" alt="" />
                        <button className="absolute rounded-xl border-2 top-3/4 left-3/4 h-8 w-8 flex justify-center bg-gray-500">
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
                            className="tabler-icon tabler-icon-camera-up "
                          >
                            <path d="M12 20h-7a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v3.5" />
                            <path d="M12 16a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
                            <path d="M19 22v-6" />
                            <path d="M22 19l-3 -3l-3 3" />
                          </svg>
                        </button>
                      </div>
                      <input type="file" accept=".jpg, .jpeg, .png" style={{ display: 'none' }} />
                    </div>
                  </div>
                </figure>
                <div>
                  <div className="text-2xl font-bold " />
                  <div className="text-sm text-zinc-500 dark:text-zinc-300 font-medium mb-2">@Username</div>
                  <button
                    type="button"
                    className="rounded-md  flex justify-center items-center gap-2  h-8 text-xs px-2 py-1 bg-brand-300 dark:bg-brand-400 text-white dark:text-gray-100 hover:bg-brand-400 dark:hover:bg-brand-500 break-words transition duration-200 my-1"
                  >
                    <div className="line-clamp-1">Theo dõi</div>
                  </button>
                  <div className="text-xs text-zinc-500 dark:text-zinc-300 font-medium hover:cursor-pointer flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-user-check "
                    >
                      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
                      <path d="M15 19l2 2l4 -4" />
                    </svg>
                    <p className="mx-1 text-lg">0</p>
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-300 font-medium hover:cursor-pointer flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-users "
                    >
                      <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                      <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                    </svg>
                    <p className="mx-1 text-lg">0</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="w-full max-w-[1300px] px-2 lg:px-0 mx-auto">
            <div className="flex flex-wrap gap-4 lg:gap-8">
              <aside className="w-full lg:w-5/12">
                <div className="rounded-xl flex transition duration-200 bg-brand/10 dark:bg-brand/20 flex-col">
                  <div className="space-y-4 p-4">
                    <div className="text-lg font-bold ">Giới thiệu</div>
                    <div className="w-full max-w-[1300px] px-2 lg:px-0 mx-auto">
                      <p className="text-sm">Xin chào, tôi là một CAB-er!</p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
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
                            className="tabler-icon tabler-icon-world "
                          >
                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                            <path d="M3.6 9h16.8" />
                            <path d="M3.6 15h16.8" />
                            <path d="M11.5 3a17 17 0 0 0 0 18" />
                            <path d="M12.5 3a17 17 0 0 1 0 18" />
                          </svg>
                          <a className="text-brand-500 font-medium " href="/">
                            cab.vn
                          </a>
                        </li>
                        <li className="flex items-center gap-2">
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
                            className="tabler-icon tabler-icon-brand-twitch "
                          >
                            <path d="M4 5v11a1 1 0 0 0 1 1h2v4l4 -4h5.584c.266 0 .52 -.105 .707 -.293l2.415 -2.414c.187 -.188 .293 -.442 .293 -.708v-8.585a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1z" />
                            <path d="M16 8l0 4" />
                            <path d="M12 8l0 4" />
                          </svg>
                          <a className="text-brand-500 font-medium " href="/">
                            stream.cab.vn
                          </a>
                        </li>
                        <li className="flex items-center gap-2">
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
                            className="tabler-icon tabler-icon-cash "
                          >
                            <path d="M7 9m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
                            <path d="M14 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2" />
                          </svg>
                          <a className="text-brand-500 font-medium " href="/">
                            donate.cab.vn
                          </a>
                        </li>
                      </ul>
                      <button
                        className="w-full rounded-md flex justify-center items-center gap-2 h-10 text-sm px-4 py-2 bg-brand-300 dark:bg-brand-400 text-white dark:text-gray-100 hover:bg-brand-400 dark:hover:bg-brand-500 break-words transition duration-200"
                        type="button"
                      >
                        Cập nhật thông tin
                      </button>
                      <div />
                    </div>
                    <button
                      className="w-full rounded-md flex justify-center items-center gap-2 h-10 text-sm px-4 py-2 bg-brand-300 dark:bg-brand-400 text-white dark:text-gray-100 hover:bg-brand-400 dark:hover:bg-brand-500 break-words transition duration-200"
                      type="button"
                    >
                      Donate
                    </button>
                    <div className="text-lg font-bold ">Huy hiệu</div>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex flex-col items-center gap-2">
                        <img src="/img/top/top-donate.png" alt="" className="w-10 h-10" />
                        <div className="text-xs font-medium">Top donate</div>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <img src="/img/top/top-follower.png" alt="" className="w-10 h-10" />
                        <div className="text-xs font-medium">Top follow</div>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <img src="/img/top/top-post.png" alt="" className="w-10 h-10" />
                        <div className="text-xs font-medium">Top bài viết</div>
                      </div>
                    </div>
                    <div className="text-lg font-bold ">Nổi bật</div>
                    <p className="text-sm text-center">Hiện chưa có nội dung nổi bật nào.</p>
                    <a
                      href="#"
                      className="rounded-md  flex justify-center items-center gap-2  h-10 text-sm px-4 py-2 bg-brand-300 dark:bg-brand-400 text-white dark:text-gray-100 hover:bg-brand-400 dark:hover:bg-brand-500 break-words transition duration-200 "
                    >
                      <div className="line-clamp-1">Thêm nội dung nổi bật</div>
                    </a>
                  </div>
                </div>
              </aside>
              <section className="w-full flex-1 flex flex-col gap-y-4">
                <div className="rounded-xl flex transition duration-200 bg-brand/10 dark:bg-brand/20 flex-col">
                  <div className="space-y-4 p-4">
                    <div className="mb-8">
                      <button
                        type="button"
                        className="rounded-md flex justify-center items-center gap-2 h-10 text-sm px-4 py-2 text-brand-500 dark:text-brand-200 break-words transition duration-200 h-auto bg-brand-700 text-white dark:text-white hover:bg-brand-800 w-full"
                      >
                        <div className="line-clamp-1">
                          <div className="flex flex-col items-center gap-2 p-4">
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
                              className="tabler-icon tabler-icon-plus "
                            >
                              <path d="M12 5l0 14" />
                              <path d="M5 12l14 0" />
                            </svg>
                            <span>Bạn đang nghĩ gì</span>
                          </div>
                        </div>
                      </button>
                    </div>
                    <div className="flex flex-wrap lg:flex-nowrap justify-between items-center space-x-0 lg:space-x-2 space-y-2 lg:space-y-0">
                      <button
                        type="button"
                        className="rounded-md flex justify-center items-center gap-2 h-10 text-sm px-4 py-2 bg-brand-300 dark:bg-brand-400 text-white dark:text-gray-100 hover:bg-brand-400 dark:hover:bg-brand-500 break-words transition duration-200 w-full"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                          />
                        </svg>
                        <div className="line-clamp-1">Bài viết</div>
                      </button>
                      <button
                        type="button"
                        className="rounded-md flex justify-center items-center gap-2 h-10 text-sm px-4 py-2 bg-brand-300 dark:bg-brand-400 text-white dark:text-gray-100 hover:bg-brand-400 dark:hover:bg-brand-500 break-words transition duration-200 w-full"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                        <div className="line-clamp-1">Video</div>
                      </button>
                      <button
                        type="button"
                        className="rounded-md flex justify-center items-center gap-2 h-10 text-sm px-4 py-2 bg-brand-300 dark:bg-brand-400 text-white dark:text-gray-100 hover:bg-brand-400 dark:hover:bg-brand-500 break-words transition duration-200 w-full"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <div className="line-clamp-1">Chiến dịch</div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl flex transition duration-200 bg-brand/10 dark:bg-brand/20 flex-col">
                  <div className="space-y-4 p-4">
                    <div className="border-t-1 border-b-1 min-h-200 h-screen">
                      <p className="text-sm text-center">Không có dữ liệu.</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div />
        </main>
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 z-40 w-screen h-16 bg-white dark:bg-zinc-900 py-2">
      <div className="w-full max-w-[1300px] px-2 lg:px-0 mx-auto">
        <div className="flex justify-between items-center lg:space-x-8 h-12">
          <div className="flex items-center h-full">
            <a href="/" className="hidden lg:block w-max h-full lg:mr-4">
              <img className="h-full w-auto" src="http://devcab.org/img/logo/cab.png" alt="CAB" />
            </a>
            <form method="get">
              <div className="rounded-2xl hidden lg:flex space-x-2 items-center lg:w-[250px] bg-zinc-100 dark:bg-zinc-800 px-4 py-2">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <input
                  className="flex-1 bg-transparent placeholder:text-zinc-500 text-sm focus:outline-none"
                  type="text"
                  placeholder="Tìm kiếm"
                />
              </div>
            </form>
            <button className="rounded-full flex lg:hidden justify-center items-center w-9 h-9 bg-zinc-100 dark:bg-zinc-700 mr-2 transition duration-200 hover:bg-zinc-200 hover:dark:bg-zinc-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-end items-center gap-2 h-full w-4/12 md:w-6/12 min-[320px]:w-full">
            <a
              href="https://forms.office.com/r/zQ0DpwwFg7"
              className="rounded-md  flex justify-center items-center gap-2  h-10 text-sm px-4 py-2 text-brand-500 dark:text-brand-200 hover:bg-brand-500/20 dark:hover:bg-brand-500/20 break-words transition duration-200 "
            >
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
                className="tabler-icon tabler-icon-checkbox "
              >
                <path d="M9 11l3 3l8 -8" />
                <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
              </svg>
              <div className="line-clamp-1">Phản hồi</div>
            </a>
            <div className="hidden lg:flex">
              <a
                href="/account/login"
                className="rounded-md  flex justify-center items-center gap-2  h-10 text-sm px-4 py-2 bg-brand-300 dark:bg-brand-400 text-white dark:text-gray-100 hover:bg-brand-400 dark:hover:bg-brand-500 break-words transition duration-200 "
              >
                <div className="line-clamp-1">Đăng nhập</div>
              </a>
            </div>
            <div className="relative">
              <button
                type="button"
                className="rounded-md  flex justify-center items-center gap-2  h-10 text-sm px-4 py-2 bg-brand-500/20 dark:bg-brand-500/20 text-brand-500 dark:text-brand-200 break-words transition duration-200 "
              >
                <div className="line-clamp-1">
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
                    className="tabler-icon tabler-icon-menu-2 "
                  >
                    <path d="M4 6l16 0" />
                    <path d="M4 12l16 0" />
                    <path d="M4 18l16 0" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
