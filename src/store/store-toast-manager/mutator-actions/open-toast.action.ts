import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';
import { IToastProps } from '../../../components';

export const openToastAction = mutatorAction('openToastAction', (toastId: string, toastProps?: IToastProps) => {
  const store = getStore();
  if (toastProps) {
    store.toast.set(toastId, { ...toastProps, id: toastId, isOpen: true });
  } else {
    const toast = store.toast.get(toastId);
    if (toast) {
      toast.isOpen = true;
    }
  }
});
