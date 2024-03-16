import { useCallback, useEffect, useState } from 'react';
import { FetchNotificationParams, INotificationModel } from '../../models';
import { fetchNotificationsApi } from '../../api/notification';
import { notificationMock } from './mock';
import _ from 'lodash';

const LIMIT_LOAD_ITEMS_POST = 15;

export const useNotification = () => {
  const [notificationItems, setNotificationItems] = useState<INotificationModel[]>([]);

  const [isLoadingNotification, setIsLoadingNotification] = useState(false);

  const [paramsNotification, setParamsNotification] = useState<FetchNotificationParams>();

  const [isEndFetchingNotification, setIsEndFetchingNotification] = useState(false);

  const fetchNotification = useCallback(() => {
    let params: FetchNotificationParams;

    if (!paramsNotification) {
      params = { pageSize: LIMIT_LOAD_ITEMS_POST, pageNumber: 1 };
    } else {
      params = {
        pageNumber: (paramsNotification?.pageNumber ?? 1) + 1,
        pageSize: paramsNotification?.pageSize,
      };
    }

    const { pageSize = LIMIT_LOAD_ITEMS_POST, pageNumber = 1 } = params;

    setParamsNotification(params);

    setIsLoadingNotification(true);
    fetchNotificationsApi({ pageSize, pageNumber })
      .then((data) => {
        setNotificationItems(data);

        if (_.isEmpty(data)) {
          setIsEndFetchingNotification(false);
        } else {
          setIsEndFetchingNotification(true);
        }
      })
      .catch(() => setNotificationItems(notificationMock))
      .finally(() => setIsLoadingNotification(false));
  }, [paramsNotification]);

  useEffect(() => {
    fetchNotification();
  }, []);

  return {
    notificationItems,
    isLoadingNotification,
    paramsNotification,
    isEndFetchingNotification,
    fetchNotification,
  };
};
