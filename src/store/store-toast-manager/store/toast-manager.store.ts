import { createStore } from 'satcheljs';
import { IToastManagerStore } from './toast-manager.type';
import { ObservableMap } from 'mobx';

const initStore: IToastManagerStore = {
  toast: new ObservableMap(),
};

export const getStore = createStore<IToastManagerStore>('toastManagerStore', initStore);
