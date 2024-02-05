import React, { useState } from 'react';
import { IPostProps } from './post.type';
import { Button } from '../button';

const classNamePrefix = 'tt-post-component';

export const Post: React.FC<IPostProps> = () => {
  const [isShowMoreMenu, setShowMoreMenu] = useState(false);
  return (
    <div className={`${classNamePrefix} mb-4 post-item item::8242946a-051c-42eb-87c0-deee675f689c`}>
      <div className="rounded-xl flex transition duration-200 bg-gray-50 dark:bg-black flex-col">
        <div className="p-4">
          <div className="flex justify-between items-center">
            <div className="flex">
              <div className="flex items-center mr-4">
                <img
                  className="rounded-full h-10 w-10"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY2N8lDJmYah54o1y1RvYEtX6rq54lduk2MQ&usqp=CAU"
                  alt=""
                />
              </div>
              <div>
                <a className="inline-block text-black dark:text-white text-sm font-bold mb-[2px]" href="/u/a">
                  User Fullname
                </a>
                <div className="flex items-center space-x-2 text-xs">
                  <div className="relative">
                    <button className="font-semibold">KOL</button>{' '}
                  </div>
                  <span>•</span>{' '}
                  <a className="text-branding font-semibold mr-2" href="/c/a">
                    Công nghệ
                  </a>{' '}
                  <span>•</span> <span>2939182923 giờ trước</span> <span>•</span>{' '}
                  <button>
                    <i className="fas fa-trophy" />
                  </button>
                </div>
              </div>
            </div>
            <div className="relative flex items-start">
              <Button
                className="rounded-md  flex justify-center items-center gap-2  h-8 text-xs px-2 py-1 text-brand-500 dark:text-brand-200 hover:bg-brand-500/20 dark:hover:bg-brand-500/20 break-words transition duration-200 "
                type="button"
                onClick={() => setShowMoreMenu(!isShowMoreMenu)}
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
                    className="tabler-icon tabler-icon-dots "
                  >
                    <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  </svg>
                </div>
              </Button>

              {isShowMoreMenu && (
                <div
                  className="absolute top-10 right-0 rounded-md w-max bg-white dark:bg-black text-black dark:text-white shadow p-1"
                  style={{}}
                >
                  <ul>
                    <li>
                      <button className="rounded-md flex items-center space-x-2 w-full p-2 hover:bg-system-gray-light-6 dark:hover:bg-system-gray-dark-6 ">
                        <div className="flex justify-center items-center w-4 h-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                            />
                          </svg>
                        </div>
                        <span className="text-xs">Lưu bài</span>
                      </button>
                      <div className="text-xs text-center font-medium " />
                    </li>
                    <li>
                      <button className="rounded-md flex items-center space-x-2 w-full p-2 hover:bg-system-gray-light-6 dark:hover:bg-system-gray-dark-6">
                        <div className="flex justify-center items-center w-4 h-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                            />
                          </svg>
                        </div>
                        <span className="text-xs">Ẩn bài viết</span>
                      </button>
                    </li>
                    <li>
                      <button className="rounded-md flex items-center space-x-2 w-full p-2 hover:bg-system-gray-light-6 dark:hover:bg-system-gray-dark-6">
                        <div className="flex justify-center items-center w-4 h-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                          </svg>
                        </div>
                        <span className="text-xs">Báo cáo vi phạm</span>
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <a href="/p/a" className="inline-block text-lg font-bold py-4">
            cumque
          </a>
          <p className="text-sm">esse</p>
          <ul className="flex text-branding text-sm py-4">
            <li className="mr-1">
              <p>#dolores</p>
            </li>
            <li className="mr-1">
              <p>#architecto</p>
            </li>
            <li className="mr-1">
              <p>#sit</p>
            </li>
            <li className="mr-1">
              <p>#et</p>
            </li>
            <li className="mr-1">
              <p>#at</p>
            </li>
          </ul>
          <div>
            <div className="grid grid-cols-2 gap-1 mb-4">
              <button className="relative block rounded-md">
                <img
                  className="rounded-md h-full object-cover "
                  src="https://loremflickr.com/320/240?lock=58161377"
                  alt=""
                />{' '}
              </button>
              <button className="relative block rounded-md">
                <img
                  className="rounded-md h-full object-cover "
                  src="https://loremflickr.com/320/240?lock=1074964987"
                  alt=""
                />{' '}
              </button>
              <button className="relative block rounded-md">
                <img
                  className="rounded-md h-full object-cover "
                  src="https://loremflickr.com/320/240?lock=2134450976"
                  alt=""
                />{' '}
              </button>
              <button className="relative block rounded-md">
                <div className="absolute z-[1] top-0 left-0 rounded-md w-full h-full bg-black/50 text-white font-medium backdrop-blur p-4">
                  <div className="h-full flex justify-center items-center">Xem thêm</div>
                </div>
                <img
                  className="rounded-md object-cover w-full h-full "
                  src="https://loremflickr.com/320/240?lock=1535909826"
                  alt=""
                />
              </button>
            </div>
            <div />
          </div>
          <div className="w-full lg:w-auto py-4">
            <div className="grid grid-cols-4 gap-2 text-sm">
              <button
                type="button"
                className="rounded-md  flex justify-center items-center gap-2  h-8 text-xs px-2 py-1 bg-brand-500/20 dark:bg-brand-500/20 text-brand-500 dark:text-brand-200 break-words transition duration-200 "
              >
                <div className="line-clamp-1">
                  3
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-thumb-up-filled"
                    height={20}
                    width={20}
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M13 3a3 3 0 0 1 2.995 2.824l.005 .176v4h2a3 3 0 0 1 2.98 2.65l.015 .174l.005 .176l-.02 .196l-1.006 5.032c-.381 1.626 -1.502 2.796 -2.81 2.78l-.164 -.008h-8a1 1 0 0 1 -.993 -.883l-.007 -.117l.001 -9.536a1 1 0 0 1 .5 -.865a2.998 2.998 0 0 0 1.492 -2.397l.007 -.202v-1a3 3 0 0 1 3 -3z"
                      strokeWidth={0}
                      fill="currentColor"
                    />
                    <path
                      d="M5 10a1 1 0 0 1 .993 .883l.007 .117v9a1 1 0 0 1 -.883 .993l-.117 .007h-1a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-7a2 2 0 0 1 1.85 -1.995l.15 -.005h1z"
                      strokeWidth={0}
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </button>
              <button
                type="button"
                className="rounded-md  flex justify-center items-center gap-2  h-8 text-xs px-2 py-1 bg-brand-500/20 dark:bg-brand-500/20 text-brand-500 dark:text-brand-200 break-words transition duration-200 "
              >
                <div className="line-clamp-1">
                  0
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-thumb-down-filled"
                    height={20}
                    width={20}
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M13 21.008a3 3 0 0 0 2.995 -2.823l.005 -.177v-4h2a3 3 0 0 0 2.98 -2.65l.015 -.173l.005 -.177l-.02 -.196l-1.006 -5.032c-.381 -1.625 -1.502 -2.796 -2.81 -2.78l-.164 .008h-8a1 1 0 0 0 -.993 .884l-.007 .116l.001 9.536a1 1 0 0 0 .5 .866a2.998 2.998 0 0 1 1.492 2.396l.007 .202v1a3 3 0 0 0 3 3z"
                      strokeWidth={0}
                      fill="currentColor"
                    />
                    <path
                      d="M5 14.008a1 1 0 0 0 .993 -.883l.007 -.117v-9a1 1 0 0 0 -.883 -.993l-.117 -.007h-1a2 2 0 0 0 -1.995 1.852l-.005 .15v7a2 2 0 0 0 1.85 1.994l.15 .005h1z"
                      strokeWidth={0}
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </button>
              <button
                type="button"
                className="rounded-md  flex justify-center items-center gap-2  h-8 text-xs px-2 py-1 bg-brand-500/20 dark:bg-brand-500/20 text-brand-500 dark:text-brand-200 break-words transition duration-200 "
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
                <div className="line-clamp-1" />
              </button>
              <button
                type="button"
                className="rounded-md  flex justify-center items-center gap-2  h-8 text-xs px-2 py-1 bg-brand-500/20 dark:bg-brand-500/20 text-brand-500 dark:text-brand-200 break-words transition duration-200 "
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
                <div className="line-clamp-1" />
              </button>
            </div>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
};
