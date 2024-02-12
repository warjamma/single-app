import React, { useEffect } from 'react';
import { LangService } from './configuration/language';
import { useObserver } from 'mobx-react';
import { SystemConfigStore } from './store';
import { initWuiLoginLanguage } from './languages';
import { RouterProvider } from 'react-router-dom';
import { RouterLinks } from './routes';
import dayjs from 'dayjs';
import { MOMENT_UPDATE_LOCALE_VI } from './constants/configuration.constant';
import updateLocale from 'dayjs/plugin/updateLocale';

initWuiLoginLanguage();

const Root = () => {
  const defaultLanguage = useObserver(() => SystemConfigStore.defaultLanguageSelector());

  useEffect(() => {
    if (defaultLanguage && !LangService.instance().hasLocalLanguage()) {
      LangService.instance().changeLanguage(defaultLanguage);

      /**
       * TODO:  When changing languages, remember to updateLocale according to the corresponding language
       */
      dayjs.extend(updateLocale);

      dayjs.updateLocale('en', MOMENT_UPDATE_LOCALE_VI);
    }
  }, [defaultLanguage]);

  return <RouterProvider router={RouterLinks} fallbackElement={<p>Initial·Load...</p>} />;
};

export default Root;
