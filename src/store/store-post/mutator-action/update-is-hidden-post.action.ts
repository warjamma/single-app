import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';

export const updateIsHiddenPost = mutatorAction('updateIsHiddenPost', (value: boolean) => {
  getStore().isHiddenPost = value;
});
