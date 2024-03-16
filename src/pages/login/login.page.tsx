import React from 'react';
import { ILoginFormModel, ILoginPageProps } from './login.type';
import { useLogin } from '../../hooks/use-login';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useLangTranslation } from '../../configuration/language';
import { LANGUAGE_NAMESPACE } from '../../languages';
import { Helmet } from 'react-helmet-async';

export const LoginPage: React.FC<ILoginPageProps> = () => {
  const { handleLogin, contentData } = useLogin();

  const { translator } = useLangTranslation(LANGUAGE_NAMESPACE);

  const loginSchema = yup.object().shape({
    email: yup.string().email('Định dạng email không hợp lệ. Vui lòng thử lại').required('Email không được để trống'),
    password: yup.string().required('form.password.validate.require').min(6, 'form.password.validate.min.length'),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    clearErrors,
  } = useForm<ILoginFormModel>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: yupResolver(loginSchema),
    defaultValues: { email: contentData?.defaultEmail, password: contentData?.defaultPassword },
  });

  return (
    <div className="toto-login">
      <Helmet>
        <title>Đăng nhập</title>
        <meta name="description" content="Description of SignUpPage" />
      </Helmet>
      <div
        className="w-screen min-h-screen bg-center bg-cover flex justify-center items-center p-2"
        style={{ backgroundImage: 'url("https://picsum.photos/1600/900")' }}
      >
        <div className="w-full max-w-[1300px] px-2 lg:px-0 mx-auto">
          <div className="rounded-2xl bg-white dark:bg-black lg:w-[500px] mx-auto p-8">
            <div className="flex justify-end" data-svelte-h="svelte-w8q1sk">
              <a href="/" className="transition duration-200 hover:text-primary-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </a>
            </div>
            <div className="text-3xl font-bold mb-8 text-center">Đăng nhập</div>
            <div className="flex justify-center items-center space-x-4 mb-8" data-svelte-h="svelte-tkh4w5">
              <button className="rounded-2xl border border-zinc-400 flex justify-center items-center w-10 h-10 bg-zinc-50 dark:bg-zinc-800 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="fill-black dark:fill-white w-4 h-4"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </button>
              <button className="rounded-2xl border border-zinc-400 flex justify-center items-center w-10 h-10 bg-zinc-50 dark:bg-zinc-800 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                  className="fill-black dark:fill-white w-4 h-4"
                >
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
              </button>
            </div>
            <div className="flex justify-between items-center space-x-2 mb-8" data-svelte-h="svelte-1sasxhj">
              <div className="flex-1 h-px bg-zinc-100" />
              <p className="flex-1 text-zinc-500 dark:text-zinc-300 text-center text-xs">nếu bạn đã có tài khoản</p>
              <div className="flex-1 h-px bg-zinc-100" />
            </div>
            <form className="mb-4" onSubmit={handleSubmit(handleLogin)}>
              <div className="mb-4">
                <label className="block font-medium text-sm mb-2 " htmlFor="email">
                  Email
                </label>
                <input
                  className={`rounded-md block w-full bg-zinc-100 dark:bg-zinc-800 text-sm px-4 py-2 ${
                    errors.email ? 'border-solid border-2 border-red-400' : ''
                  }`}
                  id="email"
                  type="text"
                  {...register('email')}
                  placeholder={contentData?.placeholderEmail}
                  defaultValue={contentData?.defaultEmail}
                  onChange={(e) => {
                    if (!e.target.value) {
                      clearErrors('email');
                    }
                  }}
                />
                {errors.email && (
                  <label className="block font-medium text-sm mb-2 mt-3 text-red-600" htmlFor="email">
                    {errors.email?.message && translator(errors.email?.message)}
                  </label>
                )}
              </div>
              <div className="mb-4">
                <label className="block font-medium text-sm mb-2 " htmlFor="password">
                  Mật khẩu
                </label>
                <input
                  className={`rounded-md block w-full bg-zinc-100 dark:bg-zinc-800 text-sm px-4 py-2 ${
                    errors.password ? 'border-solid border-2 border-red-400' : ''
                  }`}
                  id="password"
                  type="password"
                  {...register('password')}
                  placeholder={contentData?.placeholderPassword}
                  defaultValue={contentData?.defaultPassword}
                  onChange={(e) => {
                    if (!e.target.value) {
                      clearErrors('password');
                    }
                  }}
                />
                {errors.password && (
                  <label className="block font-medium text-sm mb-2 mt-3 text-red-600" htmlFor="password">
                    {errors.password?.message && translator(errors.password?.message)}
                  </label>
                )}
              </div>
              <div className="flex justify-end mb-4" data-svelte-h="svelte-sotu5m">
                <a
                  className="inline-block text-sm font-semibold text-primary-6 transition duration-200 hover:underline"
                  href="/account/forgot"
                >
                  Quên mật khẩu
                </a>
              </div>
              <button
                type="submit"
                className="rounded-md flex justify-center items-center gap-2 h-10 text-sm px-4 py-2 bg-primary-4 dark:bg-primary-5 text-white dark:text-gray-100 hover:bg-primary-5 dark:hover:bg-primary-6 break-words transition duration-200 w-full"
              >
                <div className="line-clamp-1">Đăng nhập</div>
              </button>
            </form>
            <div className="mb-8">
              <a
                href="/account/register"
                target="_self"
                className="rounded-md flex justify-center items-center gap-2 h-10 text-sm px-4 py-2 bg-primary-4 dark:bg-primary-5 text-white dark:text-gray-100 hover:bg-primary-5 dark:hover:bg-primary-6 break-words transition duration-200 w-full"
              >
                <div className="line-clamp-1">Đăng kí</div>
              </a>
            </div>
            <p className="text-xs text-center text-zinc-500 dark:text-zinc-300" data-svelte-h="svelte-sgs55j">
              ©2022 cab.vn
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
