import { orchestrator } from 'satcheljs';
import { updatePhoneNumberAction } from '../action';
import { CONFIGURATION } from '@constants/index';
import { LocalStorageService } from "../../../configuration/local-storage";

orchestrator(updatePhoneNumberAction, ({ phone }) => {
  if (phone) LocalStorageService.setItem(CONFIGURATION.PHONE_NUMBER_LS_KEY, phone);
  else LocalStorageService.removeItem(CONFIGURATION.PHONE_NUMBER_LS_KEY);
});
