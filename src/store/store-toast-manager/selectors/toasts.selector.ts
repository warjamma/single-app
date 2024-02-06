import { computedFn } from 'mobx-utils';
import { getStore } from '../store';
import { TToastPosition, IToastProps } from '../../../components';

export const toastsSelector = computedFn((position?: TToastPosition): IToastProps[] => {
  return position
    ? [...getStore().toast.values()].filter((toast) => toast.position === position)
    : [...getStore().toast.values()];
});
