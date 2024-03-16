import { AxiosError } from 'axios';

export type SearchResult<T> = {
  _embedded?: T;
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
};

export type ApiError = AxiosError<{
  code?: number;
  message?: string;
  title?: string;
}>;
