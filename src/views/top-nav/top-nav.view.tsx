import React, { useState } from 'react';
import { ITopNavProps } from './top-nav.type';
import { CoreAuthenticationStore, CoreUserProfileStore } from '../../store';
import { useObserver } from 'mobx-react';
import { useDarkMode } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import { NotificationPopup } from './components/notification-popup/notification-popup.component';

export const TopNav: React.FC<ITopNavProps> = () => {
  const [isShowExtendMenu, setShowExtendMenu] = useState<boolean>(false);

  const [isShowNotifyPopup, setShowNotifyPopup] = useState<boolean>(false);

  const { theme, toggleTheme } = useDarkMode();

  const isLogin = CoreAuthenticationStore.isLoginSelector();

  const currentUser = useObserver(() => CoreUserProfileStore.profileSelector());

  const navigate = useNavigate();

  return (
    <header className="fixed top-0 z-40 w-screen h-16 bg-white dark:bg-zinc-900 py-2">
      <div className="w-full max-w-[1300px] px-2 lg:px-0 mx-auto">
        <div className="flex justify-between items-center lg:space-x-8 h-12">
          <div className="flex items-center h-full">
            <a href="/" className="hidden lg:block w-max h-full lg:mr-4">
              <img className="h-full w-auto" src="https://about.cab.vn/cab.svg" alt="CAB" />
            </a>
            <form method="get">
              <div className="rounded-2xl hidden lg:flex space-x-2 items-center lg:w-[250px] bg-zinc-100 dark:bg-zinc-800 px-4 py-2">
                <Button>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
                <input
                  className="flex-1 bg-transparent placeholder:text-zinc-500 text-sm focus:outline-none"
                  type="text"
                  placeholder="Tìm kiếm"
                />
              </div>
            </form>
            <Button className="rounded-full flex lg:hidden justify-center items-center w-9 h-9 bg-zinc-100 dark:bg-zinc-700 mr-2 transition duration-200 hover:bg-zinc-200 hover:dark:bg-zinc-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </div>
          <div className="flex justify-end items-center gap-2 h-full w-4/12 md:w-6/12 min-[320px]:w-full">
            <Button
              className="rounded-md  flex justify-center items-center gap-2  h-10 text-sm px-4 py-2 text-brand-500 dark:text-brand-200 hover:bg-brand-500/20 dark:hover:bg-brand-500/20 break-words transition duration-200 "
              type="link"
              link="https://forms.office.com/r/zQ0DpwwFg7"
              title="Phản hồi"
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
            </Button>
            {isLogin && (
              <Button
                className={`rounded-md relative flex justify-center items-center gap-2  h-10 text-sm px-4 py-2 text-brand-500 dark:text-brand-200 ${
                  isShowNotifyPopup && 'bg-brand-500/20'
                } hover:bg-brand-500/20 dark:hover:bg-brand-500/20 break-words transition duration-200`}
                type="button"
                onClick={() => setShowNotifyPopup(!isShowNotifyPopup)}
              >
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path d="M3 9.5a9 9 0 1 1 18 0v2.927c0 1.69.475 3.345 1.37 4.778a1.5 1.5 0 0 1-1.272 2.295h-4.625a4.5 4.5 0 0 1-8.946 0H2.902a1.5 1.5 0 0 1-1.272-2.295A9.01 9.01 0 0 0 3 12.43V9.5zm6.55 10a2.5 2.5 0 0 0 4.9 0h-4.9z" />
                </svg>
                <div className="absolute block w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-0 end-2.5 dark:border-gray-900" />
              </Button>
            )}
            {isShowNotifyPopup && <NotificationPopup />}

            {isLogin && (
              <Button
                className="rounded-md  flex justify-center items-center gap-2  h-10 text-sm px-4 py-2 text-brand-500 dark:text-brand-200 hover:bg-brand-500/20 dark:hover:bg-brand-500/20 break-words transition duration-200 "
                type="link"
                link="https://forms.office.com/r/zQ0DpwwFg7"
                title="Đăng bài"
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
                  className="tabler-icon tabler-icon-pencil-plus "
                >
                  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                  <path d="M13.5 6.5l4 4" />
                  <path d="M16 19h6" />
                  <path d="M19 16v6" />
                </svg>
              </Button>
            )}
            {!isLogin && (
              <div className="lg:flex">
                <Button
                  className="rounded-md  flex justify-center items-center gap-2  h-10 text-sm px-4 py-2 bg-brand-300 dark:bg-brand-400 text-white dark:text-gray-100 hover:bg-brand-400 dark:hover:bg-brand-500 break-words transition duration-200 "
                  type="link"
                  link="/account/login"
                  title="Đăng nhập"
                />
              </div>
            )}

            <div className="relative">
              <Button
                className="rounded-md  flex justify-center items-center gap-2  h-10 text-sm px-4 py-2 bg-brand-500/20 dark:bg-brand-500/20 text-brand-500 dark:text-brand-200 break-words transition duration-200 "
                onClick={() => setShowExtendMenu(!isShowExtendMenu)}
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
              </Button>

              {isShowExtendMenu && (
                <div
                  className="absolute top-14 right-0 rounded-md w-max bg-white dark:bg-gray-900 space-y-2 px-2 py-4 drop-shadow-xl"
                  style={{}}
                >
                  <ul className="text-sm">
                    {isLogin && (
                      <li>
                        <a
                          href="u/cab"
                          className="block rounded-md px-4 py-2 hover:bg-system-gray-light-6 dark:hover:bg-system-gray-dark-6"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Trang cá nhân
                        </a>
                      </li>
                    )}
                    {isLogin && (
                      <li>
                        <a
                          href="/settings"
                          className="block rounded-md px-4 py-2 hover:bg-system-gray-light-6 dark:hover:bg-system-gray-dark-6"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Cài đặt
                        </a>
                      </li>
                    )}
                    {isLogin && (
                      <li>
                        <a
                          href="/manage/histories"
                          className="block rounded-md px-4 py-2 hover:bg-system-gray-light-6 dark:hover:bg-system-gray-dark-6"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Lịch sử giao dịch
                        </a>
                      </li>
                    )}

                    <li>
                      <a
                        href="https://about.cab.vn/help"
                        className="block rounded-md px-4 py-2 hover:bg-system-gray-light-6 dark:hover:bg-system-gray-dark-6"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Trợ giúp
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://about.cab.vn/terms"
                        className="block rounded-md px-4 py-2 hover:bg-system-gray-light-6 dark:hover:bg-system-gray-dark-6"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Điều khoản sử dụng
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://about.cab.vn/advertising"
                        className="block rounded-md px-4 py-2 hover:bg-system-gray-light-6 dark:hover:bg-system-gray-dark-6"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Quảng cáo
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://about.cab.vn/contact"
                        className="block rounded-md px-4 py-2 hover:bg-system-gray-light-6 dark:hover:bg-system-gray-dark-6"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Liên hệ
                      </a>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="rounded-md flex justify-center items-center gap-2 h-10 text-sm px-4 py-2 text-brand-500 dark:text-brand-200 hover:bg-brand-500/20 dark:hover:bg-brand-500/20 break-words transition duration-200 w-full"
                    onClick={() => toggleTheme()}
                  >
                    <div className="line-clamp-1">
                      <div className="flex items-center gap-2">
                        {theme === 'light' && (
                          <>
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
                              className="tabler-icon tabler-icon-moon "
                            >
                              <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                            </svg>
                            <span>Dark</span>
                          </>
                        )}

                        {theme === 'dark' && (
                          <>
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
                              className="tabler-icon tabler-icon-sun "
                            >
                              <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                              <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                            </svg>
                            <span>Light</span>
                          </>
                        )}
                      </div>
                    </div>
                  </button>

                  {isLogin && (
                    <a
                      href="/account/topup"
                      target="_self"
                      className="rounded-md flex justify-center items-center gap-2 h-10 text-sm px-4 py-2 bg-brand-300 dark:bg-brand-400 text-white dark:text-gray-100 hover:bg-brand-400 dark:hover:bg-brand-500 break-words transition duration-200 w-full"
                    >
                      <div className="line-clamp-1">Nạp đồng+</div>
                    </a>
                  )}

                  <a
                    href="/account/cabplus"
                    target="_self"
                    className="rounded-md flex justify-center items-center gap-2 h-10 text-sm px-4 py-2 bg-brand-300 dark:bg-brand-400 text-white dark:text-gray-100 hover:bg-brand-400 dark:hover:bg-brand-500 break-words transition duration-200 w-full"
                  >
                    <div className="line-clamp-1">Nâng cấp CAB+</div>
                  </a>

                  {isLogin && (
                    <Button
                      target="_self"
                      className="rounded-md flex justify-center items-center gap-2 h-10 text-sm px-4 py-2 bg-brand-300 dark:bg-brand-400 text-white dark:text-gray-100 hover:bg-brand-400 dark:hover:bg-brand-500 break-words transition duration-200 w-full"
                      onClick={() => {
                        CoreAuthenticationStore.logOutAction(CoreAuthenticationStore.loginUrlSelector());
                      }}
                    >
                      <div className="line-clamp-1">Đăng xuất+</div>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
