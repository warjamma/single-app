import { CONFIGURATION } from '@constants/index';
import { systemConfigSelector } from './system-config.selector';

export const currencySelector = () => {
  return systemConfigSelector()?.currency || CONFIGURATION.DEFAULT_CURRENCY;
};
