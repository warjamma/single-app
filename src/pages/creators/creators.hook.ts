/* eslint-disable no-debugger */
import { useCallback, useEffect, useState } from 'react';
import { fetchCreatorsApi } from '../../api';
import _ from 'lodash';
import { IListCreatorModel as ICreatorsModel } from '../../models';
import { useParams } from 'react-router-dom';
import { AppHistory } from '../../store';
import { followUserProfiledApi } from '../../api/user-profile/follow-user';
import { ToastService } from '../../components';

export const useCreator = () => {
  const history = AppHistory();

  const [creators, setCreators] = useState<ICreatorsModel[]>([]);

  const [isLoadingFetchCreators, setLoadingFetchCreators] = useState(false);

  const [isEndFetchingListCreator, setIsEndFetchingListCreator] = useState(false);

  const [isLoadingFollowCreator, setLoadingFollowCreator] = useState(false);

  const [isLoadingRemoveCreator, setLoadingRemoveCreator] = useState(false);

  const { id } = useParams<{ id: string }>();

  const replaceUserId = useCallback(
    (userId?: string) => {
      history.navigate(`/creators/${userId}`, { replace: true });
    },
    [history],
  );

  const fetchCreators = useCallback(() => {
    setLoadingFetchCreators(true);

    fetchCreatorsApi()
      .then((data) => {
        const cookedData: ICreatorsModel[] = [];
        data.forEach((item) => {
          cookedData.push({
            ...item,
            status: 'PENDING',
          });
        });
        setCreators(cookedData);

        if (_.isEmpty(data)) {
          setIsEndFetchingListCreator(false);
        } else {
          setIsEndFetchingListCreator(true);
        }
      })
      .catch((err) => ToastService.error(err))
      .finally(() => setLoadingFetchCreators(false));
  }, []);

  const followCreators = useCallback((idUser: string, data: ICreatorsModel[]) => {
    followUserProfiledApi(idUser)
      .then(() => {
        const tmpRemove: ICreatorsModel[] = [];
        data.forEach((item) => {
          tmpRemove.push({
            ...item,
            status: item.userId === idUser ? 'ACCEPTED' : item.status,
          });
        });
        setCreators(tmpRemove);
        setLoadingFollowCreator(true);
        ToastService.success('Yêu chấp nhận thành công');
      })
      .catch((err) => ToastService.error(err))
      .finally(() => setLoadingFollowCreator(false));
  }, []);

  const removeCreators = useCallback((idUser: string, data: ICreatorsModel[]) => {
    setLoadingRemoveCreator(true);
    const tmpRemove: ICreatorsModel[] = [];
    data.forEach((item) => {
      tmpRemove.push({
        ...item,
        status: item.userId === idUser ? 'DELETE' : item.status,
      });
    });
    setCreators(tmpRemove);
    setLoadingRemoveCreator(false);
    ToastService.success('Yêu cầu xoá thành công');
  }, []);

  useEffect(() => {
    fetchCreators();
  }, []);

  return {
    creators,
    isLoadingFetchCreators,
    isEndFetchingListCreator,
    fetchCreators,
    userIdSearch: id,
    replaceUserId,
    followCreators,
    isLoadingFollowCreator,
    removeCreators,
    isLoadingRemoveCreator,
  };
};
