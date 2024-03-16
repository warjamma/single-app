import { useEffect, useCallback } from 'react';
import { IRegisterFormData } from './use-register.type';
import { CoreAuthenticationStore } from '../../store';
import { registerContent } from './register-content.mock';

export const useRegister = () => {
  // const { content } = useUIContent<IRegisterPageContent>('register-content');

  const handleRegister = useCallback((data: IRegisterFormData) => {
    CoreAuthenticationStore.registerAction(data.email, data.username, data.password, data.fullName);
  }, []);

  useEffect(() => {
    if (!CoreAuthenticationStore.isLoginSelector()) return;

    CoreAuthenticationStore.backToHome();
  }, []);

  return {
    handleRegister,
    contentData: registerContent,
  };
};
