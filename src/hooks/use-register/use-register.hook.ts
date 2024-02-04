import { useMemo, useEffect, useCallback, useState, FormEventHandler } from 'react';
import { IAgentCodeDomain, IRegisterPageContent } from '../../models';
import { CONFIGURATION } from '../../constants';
import { IRegisterFormData } from './use-register.type';
import { useUIContent } from '../use-ui-content';
import { LocalStorageService } from '../../configuration/local-storage';
import { CoreAuthenticationStore } from '../../store';

const extractAgentCode = (codeInfo?: string | IAgentCodeDomain[]): string | undefined => {
  if (!codeInfo) return;
  if (typeof codeInfo === 'string') return codeInfo;

  let defaultCode: string | undefined;
  for (let index = 0; index < codeInfo.length; index++) {
    const e = codeInfo[index];
    if (e.domains == null) defaultCode = e.code;
    // eslint-disable-next-line no-restricted-globals
    else if (e.domains?.includes(location.host)) return e.code;
  }

  return defaultCode;
};

export const useRegister = () => {
  const [formError, setFormError] = useState<string>();

  const { content } = useUIContent<IRegisterPageContent>('register-content');

  const defaultShareCode = useMemo<string | undefined>(() => {
    const url = new URL(window.location.href);
    const codeFromUrl = url.searchParams.get('code');
    const codeFromStorage = LocalStorageService.getItem('shareCode');
    const code =
      codeFromUrl || // ưu tiên code trên url
      (content?.storeShareLinkCode ? codeFromStorage : false) || // nếu enable store share link code thì lấy từ code from storage
      extractAgentCode(content?.defaultAgentCode) ||
      undefined;

    // * lưu lại nếu code trên url khác trong local storage
    if (codeFromUrl && content?.storeShareLinkCode && codeFromUrl !== codeFromStorage)
      LocalStorageService.setItem('shareCode', codeFromUrl);

    return code;
  }, [content]);

  const handleRegister: FormEventHandler = useCallback((ev) => {
    ev.preventDefault();
    setFormError(undefined);
    const target = ev.target as typeof ev.target & IRegisterFormData;
    const username = target.username.value.trim?.();
    const countryCode = target.countryCode.value.trim?.();
    const phoneNumber = target.phoneNumber.value.trim?.();
    const password = target.password.value;
    const confirmPassword = target.confirmPassword.value;
    const shareLink = target.shareLink.value.trim?.();

    if (!(username && countryCode && phoneNumber && password && confirmPassword && shareLink)) {
      setFormError(content?.errorNotBlank);
      return;
    }

    if (!CONFIGURATION.PHONE_NUMBER_REGEX.test(phoneNumber)) {
      setFormError(content?.errorInvalidPhoneNumber);
      return;
    }

    if (password !== confirmPassword) {
      setFormError(content?.errorConfirmPassword);
      return;
    }

    CoreAuthenticationStore.registerAction(username, password, `${countryCode}${phoneNumber}`, shareLink);
  }, []);

  // * prevent user login-ed access register page
  useEffect(() => {
    if (!CoreAuthenticationStore.isLoginSelector()) return;

    if (CoreAuthenticationStore.isMustVerifyPhoneSelector()) {
      CoreAuthenticationStore.goToVerifyPhone();
      return;
    }

    CoreAuthenticationStore.backToHome();
  }, []);

  return {
    defaultShareCode,
    formError,
    handleRegister,
    contentData: content,
  };
};
