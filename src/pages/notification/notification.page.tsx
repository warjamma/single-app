import React from 'react';
import { INotificationPageProps } from './notification.type';
import { NotificationItem } from './components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { LoadingMore } from '../../components';
import { useNotification } from './notification.hook';

export const NotificationPage: React.FC<INotificationPageProps> = (props) => {
  const { isDropdown } = props;

  const { notificationItems, isEndFetchingNotification, fetchNotification } = useNotification();

  return (
    <div className={`notification-page flex justify-center py-6 ${isDropdown ? '' : 'pt-20'}`}>
      <div className={`w-[600px] bg-white rounded-md ${isDropdown ? '' : 'shadow shadow-slate-250'}`}>
        <InfiniteScroll
          dataLength={notificationItems?.length || 0}
          next={fetchNotification}
          hasMore={isEndFetchingNotification}
          loader={<LoadingMore />}
          endMessage={<div className="text-center">Không còn dữ liệu.</div>}
        >
          {notificationItems?.map((rc) => (
            <div key={rc.id}>
              <NotificationItem
                imageUrl={rc.imageUrl}
                content={rc.content}
                timeStamp={rc.timeStamp}
                userName={rc.userName}
              />
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};
