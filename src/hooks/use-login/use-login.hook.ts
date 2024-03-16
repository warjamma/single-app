import { useCallback, useEffect } from 'react';
import { ILoginFormData } from './use-login.type';
import { CoreAuthenticationStore } from '../../store';
import { loginContent } from './login-content.mock';

export const useLogin = () => {
  // const { content } = useUIContent<ILoginPageContent>('login-content');

  const handleLogin = useCallback((data: ILoginFormData) => {
    CoreAuthenticationStore.loginAction(data?.email, data?.password);
  }, []);

  // * prevent user login-ed access login page
  useEffect(() => {
    if (!CoreAuthenticationStore.isLoginSelector()) return;

    CoreAuthenticationStore.backToRedirectUrl();
  }, []);

  return {
    handleLogin,
    contentData: loginContent,
  };
};
