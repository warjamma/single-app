import { useObserver } from 'mobx-react';
import { useCallback, useEffect, useMemo } from 'react';
import { splitPhoneCountryCode } from '../../utils';
import { CoreAuthenticationStore, SystemConfigStore } from '../../store';

export const useVerifyPhone = () => {
  const fullPhoneNumber = useObserver(CoreAuthenticationStore.phoneNumberSelector);

  const countryCodes = useObserver(SystemConfigStore.phoneCountryCodesSelector);

  const [countryCode, phoneNumber] = useMemo(
    () => splitPhoneCountryCode(fullPhoneNumber || countryCodes[0], countryCodes),
    [countryCodes, fullPhoneNumber],
  );

  const timeRegenerateOtp = useObserver(CoreAuthenticationStore.timeRegenerateOtpSelector);

  const isMustVerifyPhone = useMemo(() => CoreAuthenticationStore.isMustVerifyPhoneSelector(), []);

  const logout = useCallback(() => {
    CoreAuthenticationStore.logOutAction(CoreAuthenticationStore.loginUrlSelector());
  }, []);

  useEffect(() => {
    if (!CoreAuthenticationStore.isLoginSelector()) {
      CoreAuthenticationStore.goToLoginPage();
      return;
    }

    if (CoreAuthenticationStore.isMustVerifyPhoneSelector()) return;

    if (!CoreAuthenticationStore.phoneNumberSelector()) CoreAuthenticationStore.backToHome();
  }, []);

  return {
    fullPhoneNumber,
    countryCode,
    phoneNumber,
    generateOtp: CoreAuthenticationStore.generateOtpAction,
    verifyOtp: CoreAuthenticationStore.verifyOtpAction,
    timeRegenerateOtp,
    isMustVerifyPhone,
    logout,
  };
};
