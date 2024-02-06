import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';

export const closeToastAction = mutatorAction('closeToastAction', (toastId: string, clearComponent?: boolean) => {
  const store = getStore();

  if (store.toast.has(toastId)) {
    if (clearComponent) {
      store.toast.delete(toastId);
    } else {
      const toast = store.toast.get(toastId);
      if (toast) {
        toast.isOpen = false;
      }
    }
  }
});
