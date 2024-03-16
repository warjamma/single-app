import { action } from 'satcheljs';
import { HiddenPostParams } from '../../../models';

export const hiddenPostAction = action('hiddenPostAction', (data: HiddenPostParams) => {
  return data;
});
