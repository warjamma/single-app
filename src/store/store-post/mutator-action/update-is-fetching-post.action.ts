import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';

export const updateIsFetchingPost = mutatorAction('updateIsFetchingPost', (value: boolean) => {
  getStore().isFetchingPost = value;
});
