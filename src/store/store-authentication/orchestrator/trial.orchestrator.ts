import { orchestrator } from 'satcheljs';
import { CommonMessageStore } from '../../store-common-message';
import { CoreLoadingStore } from '../../store-loading';
import { trialAction, updateAccessTokenAction, updateIdTokenAction } from '../action';
import { backToHome } from '../util';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { CoreUserProfileStore } from '../../store-user-profile';
import { trialApi } from '../../../api';
import { ITranslatorParams } from '../../../configuration/language';

orchestrator(trialAction, async () => {
  try {
    CoreLoadingStore.updateLoadingAction(true);

    const fp = await FingerprintJS.load();
    const id = await fp.get();
    const { data } = await trialApi(id.visitorId);

    const { access_token: accessToken, id_token: idToken } = data;
    if (!accessToken || !idToken) return;

    updateIdTokenAction(idToken);
    updateAccessTokenAction(accessToken);

    // * fetch user info
    CoreUserProfileStore.fetchProfileAction();

    backToHome(500);
  } catch (error) {
    CommonMessageStore.updateErrorAction(error as string | ITranslatorParams);
  } finally {
    CoreLoadingStore.updateLoadingAction(false);
  }
});
