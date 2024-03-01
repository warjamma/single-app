import React from 'react';
import { INotificationPageProps } from './notification.type';
import { notificationMock } from './mock/notification.mock';
import { INotificationItemProps, NotificationItem } from './components';

export const NotificationPage: React.FC<INotificationPageProps> = () => {
  return (
    <div className="notification-page flex justify-center py-6">
      <div className="w-[600px] bg-white rounded-md shadow shadow-slate-250">
        {notificationMock.dataNotify.map((rc: INotificationItemProps) => (
          <div key={rc.id}>
            <NotificationItem
              imageUrl={rc.imageUrl}
              content={rc.content}
              timeStamp={rc.timeStamp}
              userName={rc.userName}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
