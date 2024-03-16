import { ILoginResponseData } from '../../models';
import { API } from '../Api';

export const loginAPI = (email: string, password: string) => {
  // const formData = new URLSearchParams();
  // formData.append('email', email);
  // formData.append('password', password);
  return API.post<ILoginResponseData>(
    '/v1/identity-service/accounts/login',
    { email, password },
    {
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/json;charset=UTF-8',
        'clean-request': 'no-clean',
      },
    },
  );
};
