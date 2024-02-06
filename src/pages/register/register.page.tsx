import React from 'react';
import { IRegisterFormData, useRegister } from '../../hooks/use-register';
import { useLangTranslation } from '../../configuration/language';
import { LANGUAGE_NAMESPACE } from '../../languages';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { IRegisterPageProps } from './register.type';
import * as yup from 'yup';
import { Helmet } from 'react-helmet-async';

export const RegisterPage: React.FC<IRegisterPageProps> = () => {
  const { translator } = useLangTranslation(LANGUAGE_NAMESPACE);

  const { handleRegister, contentData } = useRegister();

  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .email('Định dạng email không hợp lệ. Vui lòng thử lại')
      .required(contentData?.errorRequiredEmail),
    username: yup.string().required(contentData?.errorRequiredUsername),
    fullName: yup.string().required(contentData?.errorRequiredFullName),
    password: yup
      .string()
      .required(contentData?.errorRequirePassword)
      .min(6, contentData?.errorRequirePasswordMinLength),
    confirmPassword: yup
      .string()
      .min(6, contentData?.errorRequireConfirmPasswordMinLength)
      .required(contentData?.errorRequireConfirmPassword)
      .oneOf([yup.ref('password'), ''], contentData?.errorRequireConfirmPasswordNotMatchValidation),
    code: yup.string().required(contentData?.errorRequireCodeRef),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    clearErrors,
  } = useForm<IRegisterFormData>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    shouldUnregister: false,
    resolver: yupResolver(loginSchema),
    defaultValues: {},
  });

  return (
    <div className="toto-register">
      <Helmet>
        <title>Đăng ký</title>
        <meta name="register" content="Description of register" />
      </Helmet>
      <div
        className="w-screen min-h-screen bg-center bg-cover flex justify-center items-center p-2"
        style={{ backgroundImage: 'url("https://picsum.photos/1600/900")' }}
      >
        <div className="w-full max-w-[1300px] px-2 lg:px-0 mx-auto">
          <div className="rounded-2xl bg-white dark:bg-black lg:w-[500px] mx-auto p-8">
            <div className="flex justify-end" data-svelte-h="svelte-w8q1sk">
              <a href="/" className="transition duration-200 hover:text-brand-500">
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
            <div className="text-2xl font-bold mb-8 text-center">{contentData?.title}</div>
            <form className="mb-4" onSubmit={handleSubmit(handleRegister)}>
              <div className="mb-4">
                <label className="block font-medium text-sm mb-2 " htmlFor="email">
                  {contentData?.labelEmail}
                </label>
                <input
                  className="rounded-md block w-full bg-zinc-100 dark:bg-zinc-800 text-sm px-4 py-2 "
                  id="email"
                  type="text"
                  {...register('email')}
                  placeholder={contentData?.placeholderEmail}
                  defaultValue={contentData?.defaultValueEmail}
                  onChange={(e) => {
                    if (!e.target.value) {
                      clearErrors('email');
                    }
                  }}
                />
                {errors.email && (
                  <label className="block font-medium text-sm mb-2 mt-3 text-red-600" htmlFor="email">
                    {errors.email?.message?.toString()}
                  </label>
                )}
              </div>
              <div className="mb-4">
                <label className="block font-medium text-sm mb-2 " htmlFor="fullName">
                  {contentData?.labelFullName}
                </label>
                <input
                  className="rounded-md block w-full bg-zinc-100 dark:bg-zinc-800 text-sm px-4 py-2 "
                  id="fullName"
                  type="text"
                  {...register('fullName')}
                  placeholder={contentData?.placeholderFullName}
                  defaultValue={contentData?.defaultValueFullName}
                  onChange={(e) => {
                    if (!e.target.value) {
                      clearErrors('fullName');
                    }
                  }}
                />
                {errors.fullName && (
                  <label className="block font-medium text-sm mb-2 mt-3 text-red-600" htmlFor="fullName">
                    {errors.fullName?.message?.toString()}
                  </label>
                )}
              </div>
              <div className="mb-4">
                <label className="block font-medium text-sm mb-2 " htmlFor="username">
                  {contentData?.labelUsername}
                </label>
                <input
                  className="rounded-md block w-full bg-zinc-100 dark:bg-zinc-800 text-sm px-4 py-2 "
                  id="username"
                  type="text"
                  {...register('username')}
                  placeholder={contentData?.placeholderUsername}
                  defaultValue={contentData?.defaultValueUsername}
                  onChange={(e) => {
                    if (!e.target.value) {
                      clearErrors('username');
                    }
                  }}
                />
                {errors.username && (
                  <label className="block font-medium text-sm mb-2 mt-3 text-red-600" htmlFor="username">
                    {errors.username?.message?.toString()}
                  </label>
                )}
              </div>
              <div className="mb-4">
                <label className="block font-medium text-sm mb-2 " htmlFor="password">
                  {contentData?.labelPassword}
                </label>
                <input
                  className="rounded-md block w-full bg-zinc-100 dark:bg-zinc-800 text-sm px-4 py-2 "
                  id="password"
                  type="password"
                  {...register('password')}
                  placeholder={contentData?.defaultValuePassword}
                  defaultValue={contentData?.defaultValuePassword}
                  onChange={(e) => {
                    if (!e.target.value) {
                      clearErrors('password');
                    }
                  }}
                />
                {errors.password && (
                  <label className="block font-medium text-sm mb-2 mt-3 text-red-600" htmlFor="password">
                    {errors.password?.message?.toString()}
                  </label>
                )}
              </div>
              <div className="mb-4">
                <label className="block font-medium text-sm mb-2 " htmlFor="confirmPassword">
                  {contentData?.labelConfirmPassword}
                </label>
                <input
                  className="rounded-md block w-full bg-zinc-100 dark:bg-zinc-800 text-sm px-4 py-2 "
                  id="confirmPassword"
                  type="password"
                  {...register('confirmPassword')}
                  placeholder={contentData?.placeholderConfirmPassword}
                  defaultValue={contentData?.defaultValueConfirmPassword}
                  onChange={(e) => {
                    if (!e.target.value) {
                      clearErrors('confirmPassword');
                    }
                  }}
                />
                {errors.confirmPassword && (
                  <label className="block font-medium text-sm mb-2 mt-3 text-red-600" htmlFor="confirmPassword">
                    {errors.confirmPassword?.message?.toString()}
                  </label>
                )}
              </div>
              <div className="mb-4">
                <label className="block font-medium text-sm mb-2 " htmlFor="code">
                  {contentData?.labelCodeRef}
                </label>
                <input
                  className="rounded-md block w-full bg-zinc-100 dark:bg-zinc-800 text-sm px-4 py-2 "
                  id="code"
                  type="text"
                  {...register('code')}
                  placeholder={contentData?.placeholderCodeRef}
                  defaultValue={contentData?.defaultValueCodeRef}
                  onChange={(e) => {
                    if (!e.target.value) {
                      clearErrors('code');
                    }
                  }}
                />
                {errors.code && (
                  <label className="block font-medium text-sm mb-2 mt-3 text-red-600" htmlFor="code">
                    {errors.code?.message?.toString()}
                  </label>
                )}
              </div>
              <button
                type="submit"
                className="rounded-md flex justify-center items-center gap-2 h-10 text-sm px-4 py-2 bg-brand-300 dark:bg-brand-400 text-white dark:text-gray-100 hover:bg-brand-400 dark:hover:bg-brand-500 break-words transition duration-200 w-full"
              >
                <div className="line-clamp-1">{contentData?.btnRegister}</div>
              </button>
            </form>
            <div className="mb-8">
              <a
                href="/account/login"
                target="_self"
                className="rounded-md flex justify-center items-center gap-2 h-10 text-sm px-4 py-2 bg-brand-300 dark:bg-brand-400 text-white dark:text-gray-100 hover:bg-brand-400 dark:hover:bg-brand-500 break-words transition duration-200 w-full"
                role="button"
              >
                <div className="line-clamp-1">{contentData?.checkBoxHasAccount}</div>
              </a>
            </div>
            <p className="text-xs text-center text-zinc-500 dark:text-zinc-300 mb-4">
              Bằng việc đăng kí tài khoản, bạn đã đồng ý với{' '}
              <a className="text-brand-500 font-medium " href="/" target="_self">
                Điều khoản sử dụng
              </a>{' '}
              và dã đọc{' '}
              <a className="text-brand-500 font-medium " href="/" target="_self">
                Chính sách quyền riêng tư
              </a>{' '}
              của chúng tôi.
            </p>
            <p className="text-xs text-center text-zinc-500 dark:text-zinc-300" data-svelte-h="svelte-sgs55j">
              ©2022 cab.vn
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
