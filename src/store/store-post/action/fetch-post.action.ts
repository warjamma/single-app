import { action } from 'satcheljs';

export const fetchPostAction = action('fetchPostAction', (pageSize: number, pageNumber: number) => {
  return { pageSize, pageNumber };
});
