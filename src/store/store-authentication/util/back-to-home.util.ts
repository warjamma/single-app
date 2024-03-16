import { AppHistory } from '../../store-router-manager';

export const backToHome = (delay?: number) => {
  if (!delay || delay < 0) AppHistory().navigate('/');
  else {
    setTimeout(() => {
      AppHistory().navigate('/');
    }, delay);
  }
};
