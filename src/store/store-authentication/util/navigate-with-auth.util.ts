import { isLoginSelector } from '../selector';
import { goToLoginPage } from './go-to-login-page.util';
import { AppHistory } from '../../store-router-manager';
import { Router as RemixRouter } from "@remix-run/router";

export function navigateWithAuth(path: string, history?: RemixRouter, options?: { replace?: boolean }) {
  const isLogin = isLoginSelector();

  const actionHistory = history || AppHistory();

  if (isLogin) {
    switch (options?.replace) {
      case true:
        actionHistory.navigate(path, { replace: true });
        break;
      default:
        actionHistory.navigate(path);
        break;
    }
  } else {
    goToLoginPage();
  }
}
