import { useEffect, useState } from 'react';
import { AppShellConfigService } from './application-shell.service';
import { IAppShellData } from './application-shell.type';

export const useAppShellConfig = (): {
  appShellConfig: IAppShellData | null;
  isLoading?: boolean;
} => {
  // Application config
  const [appShellConfig, setAppShellConfig] = useState<IAppShellData | null>(null);
  useEffect(() => {
    const subscription = AppShellConfigService.instance().service$.subscribe((response) => {
      if (response) {
        setAppShellConfig(response.data);
      } else {
        setAppShellConfig(null);
      }
    });

    return () => subscription.unsubscribe();
  }, [appShellConfig]);

  //   loading state
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const subscription = AppShellConfigService.instance().loading$.subscribe((data) => {
      setIsLoading(data);
    });

    return () => subscription.unsubscribe();
  }, [isLoading]);

  return { appShellConfig };
};
