import { CONFIGURATION } from '@constants/index';
import { systemConfigSelector } from './system-config.selector';

export const phoneCountryCodesSelector = (): string[] => {
  return systemConfigSelector()?.phoneCountryCodes || CONFIGURATION.PHONE_COUNTRY_CODES;
};
