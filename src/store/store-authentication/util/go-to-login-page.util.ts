import { AppHistory } from '../../store-router-manager';
import { loginUrlSelector } from '../selector';

export const goToLoginPage = (delay?: number) => {
  const history = AppHistory();
  const loginUrl = loginUrlSelector();

  if (!delay || delay < 0) {
    history.navigate(loginUrl);
  } else {
    setTimeout(() => {
      history.navigate(loginUrl);
    }, delay);
  }
};
