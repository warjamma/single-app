import { observable } from 'mobx';
import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';

export const updateFetchPostError = mutatorAction('updateFetchPostError', (error: string | undefined | unknown) => {
  getStore().fetchPostError = observable.box(error);
});
