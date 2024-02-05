import React, { useEffect } from 'react';
import { LangService } from './configuration/language';
import { useObserver } from 'mobx-react';
import { SystemConfigStore } from './store';
import { initWuiLoginLanguage } from './languages';
import { RouterProvider } from 'react-router-dom';
import { RouterLinks } from './routes';

initWuiLoginLanguage();

const Root = () => {
  const defaultLanguage = useObserver(() => SystemConfigStore.defaultLanguageSelector());

  useEffect(() => {
    if (defaultLanguage && !LangService.instance().hasLocalLanguage()) {
      LangService.instance().changeLanguage(defaultLanguage);
    }
  }, [defaultLanguage]);

  return <RouterProvider router={RouterLinks} fallbackElement={<p>Initial·Load...</p>} />;
};

export default Root;
