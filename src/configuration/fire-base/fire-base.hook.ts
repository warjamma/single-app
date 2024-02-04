import { useEffect } from 'react';
import { FireBaseService } from '.';

export const useLocalStorage = () => {
  useEffect(() => {
    if (!FireBaseService.isLoginSelector()) return;

    if (FireBaseService.isMustVerifyPhoneSelector()) {
      FireBaseService.goToVerifyPhone();
      return;
    }

    FireBaseService.backToRedirectUrl();
  }, []);

  return {
    getLocalStorageItem: FireBaseService.getItem,
    setLocalStorageItem: FireBaseService.setItem,
  };
};
