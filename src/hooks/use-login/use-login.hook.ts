import { useState, FormEventHandler, useCallback, useEffect } from 'react';
import { ILoginFormData } from './use-login.type';
import { CoreAuthenticationStore } from '../../store';
import { loginContent } from './login-content.mock';

export const useLogin = () => {
  const [formError, setFormError] = useState<string>();

  // const { content } = useUIContent<ILoginPageContent>('login-content');
  const  content  = loginContent;

  const handleLogin: FormEventHandler = useCallback((ev) => {
    ev.preventDefault();
    setFormError(undefined);

    const target = ev.target as typeof ev.target & ILoginFormData;
    const username = target.username.value.trim?.();
    const password = target.password.value;

    if (username && password) {
      CoreAuthenticationStore.loginAction(username, password);
    } else {
      setFormError(content?.errorNotBlank);
    }
  }, []);

  // * prevent user login-ed access login page
  useEffect(() => {
    if (!CoreAuthenticationStore.isLoginSelector()) return;

    if (CoreAuthenticationStore.isMustVerifyPhoneSelector()) {
      CoreAuthenticationStore.goToVerifyPhone();
      return;
    }

    CoreAuthenticationStore.backToRedirectUrl();
  }, []);

  return {
    formError,
    handleLogin,
    contentData: content,
  };
};
