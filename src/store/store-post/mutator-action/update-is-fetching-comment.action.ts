import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';

export const updateIsFetchingComment = mutatorAction('updateIsFetchingComment', (value: boolean) => {
  getStore().isFetchingComment = value;
});
