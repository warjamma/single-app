import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';

export const updateIsEndFetchingPost = mutatorAction('updateIsEndFetchingPost', (value: boolean) => {
  getStore().isEndFetchingPost = value;
});
