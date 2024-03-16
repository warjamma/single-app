import { useCallback, useEffect, useState } from 'react';
import { fetchUserProfileByIdApi } from '../../api';
import _ from 'lodash';
import { IUserProfile } from '../../models';
import { useParams } from 'react-router-dom';
import { ToastService } from '../../components';

export const useProfile = () => {
  const [userProfile, setUserProfile] = useState<IUserProfile>();

  const [isLoadingUser, setIsLoadingUser] = useState(false);

  const [isEndFetchingUser, setIsEndFetchingUser] = useState(false);

  const { id } = useParams<{ id: string }>();

  const fetchUser = useCallback((paramId?: string) => {
    if (paramId) {
      setIsLoadingUser(true);
      fetchUserProfileByIdApi(paramId)
        .then((data) => {
          setUserProfile(data);
          if (_.isEmpty(data)) {
            setIsEndFetchingUser(false);
          } else {
            setIsEndFetchingUser(true);
          }
        })
        .catch((err) => ToastService.error(err))
        .finally(() => setIsLoadingUser(false));
    }
  }, []);

  useEffect(() => {
    fetchUser(id);
  }, [id]);

  return {
    userProfile,
    isLoadingUser,
    isEndFetchingUser,
    fetchUser,
  };
};
