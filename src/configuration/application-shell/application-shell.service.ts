import { BehaviorSubject } from 'rxjs';
import { IAppShellConfig } from '.';
import { API } from '../../api';
import { LangService } from '../language';
import { LocalStorageService } from '../local-storage';
import { API_UI_CONFIG_BASE_URL } from '../constants';

const LOCAL_APP_SHELL_CONFIG_KEY = 'appShellConfig';

const API_CONFIG_ID = 'app-shell-config';
export class AppShellConfigService {
  private static _instance: AppShellConfigService;

  public service$: BehaviorSubject<IAppShellConfig> = new BehaviorSubject({ version: '', data: {} } as IAppShellConfig);

  public loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  private constructor() {
    this.initService();
  }

  public static getInstance(): AppShellConfigService {
    if (!this._instance) {
      this._instance = new AppShellConfigService();
    }

    return this._instance;
  }

  public static instance(): AppShellConfigService {
    return this.getInstance();
  }

  private initService(): void {
    this.loadConfig();
  }

  private loadConfig(): void {
    this.loading$.next(true);

    const localConfig = LocalStorageService.getItem(LOCAL_APP_SHELL_CONFIG_KEY) as IAppShellConfig;
    const currentLang = LangService.instance().currentLang$.value || 'vi';

    API.get(`${API_UI_CONFIG_BASE_URL}/${currentLang}/${API_CONFIG_ID}`, {
      headers: {
        version: (localConfig && localConfig.version) || '0',
      },
    })
      .then((response) => {
        if (response.data && Object.keys(response.data).length !== 0) {
          const appShellConfig: IAppShellConfig = {
            version: response.headers.version ?? '0',
            data: {
              ...response.data,
            },
          };
          LocalStorageService.setItem(LOCAL_APP_SHELL_CONFIG_KEY, appShellConfig);
          this.service$.next(appShellConfig);
        } else {
          this.service$.next(localConfig);
        }
      })
      .catch((error) => {
        throw error;
      })
      .finally(() => {
        this.loading$.next(false);
      });
  }
}
