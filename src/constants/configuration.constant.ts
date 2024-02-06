import { Language } from '../configuration/language';

export const LOGIN_ROUTE_PATH = '/account/login';
export const VERIFY_PHONE_ROUTE_PATH = '/account/login/verify-phone';

export const DEFAULT_PHONE_MUST_VERIFY = '+84';

// * Regular expression
export const PASSWORD_REGEX = /^.{6,}$/;
export const PHONE_NUMBER_REGEX = /^[0-9]{7,11}$/;
export const FULL_PHONE_NUMBER_REGEX = /^\+[0-9]{9,14}$/;
export const CLEAN_PHONE_NUMBER_REGEX = /(^0)|\s|\r|\n|-/g;
export const OTP_REGEX = /^[0-9]{3,}$/;
export const REGEX_MAIL =
  /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const REGEX_PASSWORD = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
export const REGEX_PHONE = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

export const PHONE_COUNTRY_CODES = ['+84', '+65', '+63', '+86'];
export const GENERATE_OTP_COUNT_DOWN_DURATION = 180; // * seconds

export const DEFAULT_CURRENCY = 'VND';
export const DEFAULT_LANGUAGE: Language = 'vi';
export const DEFAULT_LANGUAGES: Language[] = ['vi'];

// * local storage
export const UI_CONTENT_VERSIONS_LS_KEY = 'ui-content-versions';
export const SYSTEM_CONFIG_CONTENT_ID_LS_KEY = 'system-config';
export const ID_TOKEN_LS_KEY = 'idToken';
export const ACCESS_TOKEN_LS_KEY = 'accessToken';
export const LOGIN_URL_LS_KEY = 'loginUrl';
export const REGISTER_URL_LS_KEY = 'registerUrl';
export const PHONE_NUMBER_LS_KEY = 'phoneNumber';
export const IS_MUST_VERIFY_PHONE_LS_KEY = 'isMustVerify';
